// Fill this in later with your own image paths, e.g.:
// "/REAP/4_Ponder/Neo Beta/Asset/yourimage.jpg"
const images = [

];

function showImage(index) {
    const viewer = document.getElementById("viewer");
    if (!images[index]) return;
    viewer.src = images[index];
}
