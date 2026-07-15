// =========================
// AUDIO PLAYER SECTION
// =========================

// Contoh Resource (bisa diganti kapan saja)
const audioResource = [
  "audio/Atago_Affinity1JP.ogg",
  "audio/Atago_Affinity2JP.ogg",
  "audio/Atago_Affinity3JP.ogg",
  "audio/Atago_Affinity4JP.ogg"
];


let audioIndex = 0;

function showAudio(index) {
    const player = document.getElementById("audio-player");
    const source = document.getElementById("audio-source");

    if (!audioResource[index]) return;

    source.src = audioResource[index];
    player.load();
    player.play();
}

function nextAudio() {
    audioIndex = (audioIndex + 1) % audioResource.length;
    showAudio(audioIndex);
}

function prevAudio() {
    audioIndex = (audioIndex - 1 + audioResource.length) % audioResource.length;
    showAudio(audioIndex);
}

function randomAudio() {
    audioIndex = Math.floor(Math.random() * audioResource.length);
    showAudio(audioIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showAudio(audioIndex);
});
