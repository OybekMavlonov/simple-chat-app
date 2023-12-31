export function extractTime(ISODateTime) {
    return new Date(ISODateTime).toTimeString().slice(0, 5);
}

export function
createHiddenInput() {
    const input = document.createElement('input');

    // See https://stackoverflow.com/questions/47664777/javascript-file-input-onchange-not-working-ios-safari-only
    input.style.position = 'fixed';
    input.style.top = '-100000px';
    input.style.left = '-100000px';

    return input;
}

export function safeParseJSON(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        return null;
    }
}
