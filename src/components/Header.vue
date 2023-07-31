<script setup>
    import {ref} from 'vue'
    import {fileController} from '../controllers/FileController';
    import {useChatStore} from '../store/ChatStore.js';
    import {safeParseJSON} from '../utils/misc';

    const chatStore = useChatStore();

    const props = defineProps({
        archivedChats: {
            type: Array,
            default: []
        }
    });

    const handleImportFile = async () => {
        const data = await fileController.loadArchiveFromFile()

        // store chat data to global store (like pinia)
        if (data) chatStore.loadArchivedChats(data)
    };

    const handleExport = async () => {
        await fileController.saveArchiveToFile(props.archivedChats);
    };
</script>

<template>
    <div class="card">
        <Button label="Import" class="mr-2" @click="handleImportFile"/>
        <Button label="Export" class="mr-2" :disabled="!archivedChats?.length" @click="handleExport"/>
        <Button label="Clear" class="mr-2" :disabled="!archivedChats?.length" @click="chatStore.deleteArchives()"/>
    </div>
</template>

<style scoped>

</style>
