<script setup>
    import {ref} from "vue";
    import ChatListItem from './ChatListItem.vue'

    const props = defineProps({
        archivedChats: {
            type: Array,
            default: []
        }
    });
    defineEmits(['onUserClicked'])

</script>

<template>
    <div class="chat-list">
        <ul>
            <ChatListItem v-for="(item, index) in archivedChats"
                          :key="item.user.id" :chatUser="item.user"
                          @click="$emit('onUserClicked', item.messages)"
            />
        </ul>
    </div>
</template>

<style scoped lang="scss">
    .chat-list {
        width: 360px;
        overflow: auto;
        height: 80vh;

        ul {
            list-style: none;
            margin: 0;
            padding: 0 8px;
            position: relative;
        }
    }
</style>