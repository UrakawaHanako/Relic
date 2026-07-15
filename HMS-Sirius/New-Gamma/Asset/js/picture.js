// Shared image viewer logic.
// Expects the page to define `const images = [...]` in an inline
// <script> BEFORE this file is loaded.

function showImage(index) {
    const viewer = document.getElementById("viewer");
    if (typeof images === "undefined" || !images[index]) return;
    viewer.src = images[index];
}
