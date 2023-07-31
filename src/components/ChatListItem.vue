<script setup>
    defineProps({
        chatUser: {
            type: Object,
            default: {}
        }
    });
</script>

<template>
    <li class="chat-list-item p-2 flex align-items-center">
        <Avatar :image="chatUser.avatar_url" class="mr-2" size="large" shape="circle"/>
        <div class="name ml-2">{{chatUser.name}}</div>
    </li>
</template>

<style scoped lang="scss">
    .chat-list-item {
        border-bottom: 1px solid;

        &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.04);
        }
    }
</style>