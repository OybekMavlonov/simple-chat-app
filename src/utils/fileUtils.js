import { createHiddenInput } from './misc';

export function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => resolve(event.target?.result);
        reader.onerror = (event) => reject(event.target?.error);

        reader.readAsText(file);
    });
}

export async function openFilePicker(accept) {
    if ('showOpenFilePicker' in window) {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [{ accept: { 'applocation/*': accept } }],
        });
        return fileHandle.getFile();
    }

    return openFilePickerWithInput(accept);
}

export async function saveToFile(filename, data) {
    if ('showSaveFilePicker' in window) return saveFilePicker(filename, data);
    return downloadAsFile(filename, data);
}

function openFilePickerWithInput(accept) {
    debugger
    const input = createHiddenInput();
    input.type = 'file';
    input.accept = accept;

    document.body.appendChild(input);

    return new Promise((resolve, reject) => {
        input.onchange = () => {
            if (input.files) resolve(input.files[0]);
            else reject();

            document.body.removeChild(input);
        };

        input.click();
    });
}

function downloadAsFile(filename, data) {
    const blob = new Blob([data]);
    const link = document.createElement('a');
    link.download = filename;
    link.href = window.URL.createObjectURL(blob);

    link.click();
}

async function saveFilePicker(filename, data) {
    const blob = new Blob([data]);

    try {
        // Show the file save dialog.
        const handle = await window.showSaveFilePicker({
            suggestedName: filename,
        });
        const writable = await handle.createWritable();

        await writable.write(blob);
        await writable.close();
    } catch (error) {
        // Fail silently if the user has simply canceled the dialog.
        if ((error).name === 'AbortError') {
            return;
        }

        throw error;
    }
}
