<script setup>
    import {ref, watch} from "vue";
    import {storeToRefs} from 'pinia'
    import Header from './components/Header.vue'
    import ChatContainer from './components/ChatContainer.vue'
    import ChatList from './components/ChatList.vue'
    import {useChatStore} from './store/ChatStore.js';

    const chatStore = useChatStore();
    const {archivedChats} = storeToRefs(chatStore)
    const chatMessages = ref()

    const getChatMessages = (messages) => {
        chatMessages.value = messages
    }

    chatStore.restoreArchivedChats()
</script>

<template>
    <div class="container">
        <Header :archivedChats="archivedChats"/>
        <div class="flex h-full">
            <ChatList :archivedChats="archivedChats" @onUserClicked="(messages)=> getChatMessages(messages)"/>
            <ChatContainer :chatMessages="chatMessages"/>
        </div>
    </div>
</template>

<style scoped>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
        flex: 1
    }
</style>
