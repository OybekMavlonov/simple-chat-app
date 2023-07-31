// src/stores/ChatStore.js (Pinia)
import {defineStore} from 'pinia';
import {safeParseJSON} from "../utils/misc";

export const useChatStore = defineStore('ChatStore', {
    state: () => {
        return {
            archivedChats: null,
            arcStorageKey: 'archived-chat-data-key',
        };
    },
    actions: {
        loadArchivedChats(data) {
            const archived = safeParseJSON(data)
            this.setArchivedChats(archived);
        },
        setArchivedChats(data) {
            this.archivedChats = Object.freeze(data);
            localStorage.setItem(this.arcStorageKey, JSON.stringify(data));
        },
        restoreArchivedChats() {
            const data = localStorage.getItem(this.arcStorageKey) || '';
            this.loadArchivedChats(data);
        },
        deleteArchives() {
            this.setArchivedChats([]);
        }
    }
});
