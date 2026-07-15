const images = [
  "Herta/123541331_p0_master1200 (1).jpg",
  "Herta/123541331_p0_master1200.jpg",
  "Herta/124836138_p0_master1200.jpg",
  "Herta/133005117_p3_master1200.jpg",
  "Herta/133005117_p4_master1200.jpg",
  "Herta/133005117_p5_master1200.jpg",
  "Herta/134334847_p0_master1200.jpg",
  "Herta/134385777_p0_master1200.jpg"
];

let currentIndex = 0;

function showImage(index) {
  const viewer = document.getElementById("viewer");
  if (!images[index]) return; // antisipasi index salah
  viewer.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function randomImage() {
  currentIndex = Math.floor(Math.random() * images.length);
  showImage(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
});
