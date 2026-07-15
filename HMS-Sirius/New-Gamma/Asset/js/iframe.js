// Shared iframe content logic.
// Expects the page to define `const iframeSources = [...]` in an inline
// <script> BEFORE this file is loaded.

let iframeIndex = 0;

function showIframe(index) {
    const frame = document.getElementById("content-frame");
    if (typeof iframeSources === "undefined" || !iframeSources[index]) return;
    frame.src = iframeSources[index];
}

function nextIframe() {
    if (typeof iframeSources === "undefined" || iframeSources.length === 0) return;
    iframeIndex = (iframeIndex + 1) % iframeSources.length;
    showIframe(iframeIndex);
}

function prevIframe() {
    if (typeof iframeSources === "undefined" || iframeSources.length === 0) return;
    iframeIndex = (iframeIndex - 1 + iframeSources.length) % iframeSources.length;
    showIframe(iframeIndex);
}

function randomIframe() {
    if (typeof iframeSources === "undefined" || iframeSources.length === 0) return;
    iframeIndex = Math.floor(Math.random() * iframeSources.length);
    showIframe(iframeIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showIframe(iframeIndex);
});
