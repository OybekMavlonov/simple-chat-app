import { openFilePicker, readFileAsText, saveToFile } from '../utils/fileUtils.js';

class FileController {
    #instance = null;

    constructor() {
        if (this.#instance) {
            throw new Error('FileController can be instanciated only once!');
        }

        this.#instance = this;
    }

    async loadArchiveFromFile() {
        const file = await openFilePicker('.json');
        return readFileAsText(file);
    }

    async saveArchiveToFile(data) {
        return saveToFile('chat-archive.json', JSON.stringify(data));
    }
}

export const fileController = new FileController();
