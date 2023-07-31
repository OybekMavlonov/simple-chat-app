<script setup>
    import { ref } from 'vue'
    const userId = 12345
    const props = defineProps({
        msg: {
            type: Object,
            default: {}
        }
    });

    const timeFormat = ref()

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    }
    timeFormat.value = new Intl.DateTimeFormat('en-US', options).format(new Date(props.msg.timestamp))
</script>

<template>
    <div class="chat-message mb-2" :class="[msg.user_id ===  userId ? 'sent' : 'received']">
        <div class="content">{{msg.content}}</div>
        <div class="time">{{timeFormat}}</div>
    </div>
</template>

<style scoped lang="scss">
    .chat-message {
        border-radius: 16px;
        padding: 8px;
        max-width: 500px;
        color: white;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.00938em;


        .content {
            font-size: 1rem;
        }

        .time {
            margin-top: 10px;
            font-size: 14px;
            float: right;
        }
    }

    .sent {
        align-self: flex-end;
        background-color: #8bc34a
    }

    .received {
        align-self: flex-start;
        background-color: #03a9f4
    }
</style>