<script setup>
import ChatMessage from './ChatMessage.vue'
import { ref, nextTick, watch } from 'vue'

const chatContainer = ref()

const props = defineProps({
    chatMessages: {
        type: Array,
        default: []
    }
});


watch(() => props.chatMessages, (newVal) => {
    if (newVal) {
        const container = chatContainer.value;
        nextTick(() => {
            container.scrollTop = container.scrollHeight;
        })
    }
})

</script>

<template>
    <div class="chat-container" ref="chatContainer">
        <div style="width: 100%; height: 100%" class="flex flex-column gap-2 mb-2 pb-2">
            <ChatMessage v-for="msg in chatMessages" :key="msg" :msg="msg"/>
        </div>
    </div>
</template>

<style scoped>
.chat-container {
    height: 80vh;
    background: grey;
    flex: 1;
    padding: 12px;
    overflow: auto
}
</style>