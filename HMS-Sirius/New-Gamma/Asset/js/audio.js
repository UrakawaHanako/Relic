// Shared audio player logic.
// Expects the page to define `const audioResource = [...]` in an inline
// <script> BEFORE this file is loaded.

let index = 0;

function render(index) {
    // AUDIO
    const player = document.getElementById("audio-player");
    const source = document.getElementById("audio-source");

    if (typeof audioResource === "undefined" || !audioResource[index]) return;

    source.src = audioResource[index];
    player.load();
    player.play();

    // IMAGE (delegasi)
    if (typeof showImage === "function") {
        showImage(index);
    }
}

function next() {
    if (typeof audioResource === "undefined" || audioResource.length === 0) return;
    index = (index + 1) % audioResource.length;
    render(index);
}

function prev() {
    if (typeof audioResource === "undefined" || audioResource.length === 0) return;
    index = (index - 1 + audioResource.length) % audioResource.length;
    render(index);
}

function random() {
    if (typeof audioResource === "undefined" || audioResource.length === 0) return;
    index = Math.floor(Math.random() * audioResource.length);
    render(index);
}

document.addEventListener("DOMContentLoaded", () => {
    render(index);
});
