// Fill this in later with your own audio file paths, e.g.:
// "/REAP/4_Ponder/Neo Beta/Asset/Audio/YourTrack.ogg"
const audioResource = [

];

let index = 0;

function render(index) {
    // AUDIO
    const player = document.getElementById("audio-player");
    const source = document.getElementById("audio-source");

    if (!audioResource[index]) return;

    source.src = audioResource[index];
    player.load();
    player.play();

    // IMAGE (delegasi)
    if (typeof showImage === "function") {
        showImage(index);
    }
}

function next() {
    if (audioResource.length === 0) return;
    index = (index + 1) % audioResource.length;
    render(index);
}

function prev() {
    if (audioResource.length === 0) return;
    index = (index - 1 + audioResource.length) % audioResource.length;
    render(index);
}

function random() {
    if (audioResource.length === 0) return;
    index = Math.floor(Math.random() * audioResource.length);
    render(index);
}

document.addEventListener("DOMContentLoaded", () => {
    render(index);
});
