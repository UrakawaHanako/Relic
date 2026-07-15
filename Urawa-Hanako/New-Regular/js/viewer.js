// Daftar video (pastikan file ada di folder "video/")
const videos = [
"./Pictures/Azurelabe/[NekoPoi] Elf ni Inmon wo Tsukeru Hon The Animation - 02 [1080P][nekopoi.care].mp4",
  "./Pictures/Azurelabe/[NekoPoi] Gomu o Tsukete to Iimashita yo ne - 01 [720P][nekopoi.care].mp4",
  "./Pictures/Azurelabe/[NekoPoi] Gomu o Tsukete to Iimashita yo ne - 02 [720P][nekopoi.care].mp4",
  "./Pictures/Azurelabe/[NekoPoi] Kaede to Suzu The Animation - 02 [720P][nekopoi.care].mp4",
  "./Pictures/ relabe/[NekoPoi] Knight of Erin - 03 [480P][nekopoi.care].mp4",

  "./Pictures/Azurelabe/Mov/Agir 10804595-720p.mp4",
  "./Pictures/Azurelabe/Mov/Amagi 10338605-720p.mp4",
  "./Pictures/Azurelabe/Mov/Atago 20230819115431.mp4",
  "./Pictures/Azurelabe/Mov/Atago20230903142406.mp4",
  "./Pictures/Azurelabe/Mov/Atago20230903143124.mp4",
  "./Pictures/Azurelabe/Mov/Atago20230903144338.mp4",
  "./Pictures/Azurelabe/Mov/Atagoc00d898ec261a3d8b1e0f9f6c1.mp4",
  "./Pictures/Azurelabe/Mov/Atago_20231020001635.mp4",
  "./Pictures/Azurelabe/Mov/Azur Lane Ayanami [www.saveporn.net].mp4",
  "./Pictures/Azurelabe/Mov/Cygnet 8424283-720p.mp4",
  "./Pictures/Azurelabe/Mov/e54cc14dea537c31db4b63a8f1110299.mp4",
  "./Pictures/Azurelabe/Mov/Elbe 11671528-720p.mp4",
  "./Pictures/Azurelabe/Mov/Enterprise 10433323-720p.mp4",
  "./Pictures/Azurelabe/Mov/Enterprise 10433395-720p.mp4",
  "./Pictures/Azurelabe/Mov/Formidable 12559964-720p.mp4",
  "./Pictures/Azurelabe/Mov/HMS Cheshire 7495469-720p.mp4",
  "./Pictures/Azurelabe/Mov/HMS Formidable 13487711-720p.mp4",
  "./Pictures/Azurelabe/Mov/HMS Formidable 9151582-720p.mp4",
  "./Pictures/Azurelabe/Mov/HMS Formidable 9153685-720p.mp4",
  "./Pictures/Azurelabe/Mov/HMS Perseus 10433630-720p.mp4",
  "./Pictures/Azurelabe/Mov/IJN Kashino 20230330.mp4",
  "./Pictures/Azurelabe/Mov/IJN Kashino video_131601_edit.mp4",
  "./Pictures/Azurelabe/Mov/IJN Kashino11505907-720p.mp4",
  "./Pictures/Azurelabe/Mov/Illustrious bbc820b051140a3696c16dccfc928d21.mp4",
  "./Pictures/Azurelabe/Mov/Illustrious7347539-720p.mp4",
  "./Pictures/Azurelabe/Mov/Implacapble13847348-720p.mp4",
  "./Pictures/Azurelabe/Mov/KMS Heinrich20230819_131920_edit.mp4",
  "./Pictures/Azurelabe/Mov/KMS Roon 12738777-720p.mp4",
  "./Pictures/Azurelabe/Mov/Kronshadt 14794984-720p.mp4",
  "./Pictures/Azurelabe/Mov/LongIsland9892546-720p.mp4",
  "./Pictures/Azurelabe/Mov/New Jersey10179651-720p.mp4",
  "./Pictures/Azurelabe/Mov/Prinz Heinrich11153623-720p.mp4",
  "./Pictures/Azurelabe/Mov/Reno 11153744-720p.mp4",
  "./Pictures/Azurelabe/Mov/RN Pola 12133030-720p.mp4",
  "./Pictures/Azurelabe/Mov/RN Zara 6189703-720p.mp4",
  "./Pictures/Azurelabe/Mov/Shinano 13143259-720p.mp4",
  "./Pictures/Azurelabe/Mov/SN Chapayev 11215621-720p.mp4",
  "./Pictures/Azurelabe/Mov/SN Chapayev 7347511-720p.mp4",
  "./Pictures/Azurelabe/Mov/SN Chapayev 8345353-720p.mp4",
  "./Pictures/Azurelabe/Mov/SN Chapayev a75b36d941dddcb39f75276bf26cfa14.mp4",
  "./Pictures/Azurelabe/Mov/st-louis-rinhee-eng-sub-xray_720p.mp4",
  "./Pictures/Azurelabe/Mov/St.Louis10433618-720p.mp4",
  "./Pictures/Azurelabe/Mov/St.Louis7159116-720p.mp4",
  "./Pictures/Azurelabe/Mov/StLouis10425449-720p.mp4",
  "./Pictures/Azurelabe/Mov/Stlouis9315794-720p.mp4",
  "./Pictures/Azurelabe/Mov/Taihou 10172426-720p.mp4",
  "./Pictures/Azurelabe/Mov/Taihou Cowgirl [www.yesdownloader.com].mp4",
  "./Pictures/Azurelabe/Mov/Takao 384e46bb5142bd6737a159d6ec62609d.mp4",
  "./Pictures/Azurelabe/Mov/Takao be1533e658e94b924e10deb217841e15.mp4",
  "./Pictures/Azurelabe/Mov/Z23_20250517_155630_edit - Copy.mp4",
  "./Pictures/Azurelabe/Mov/Z23_20250517_155630_edit.mp4"
];


let currentIndex = 0;

function showVideo(index) {
  const video = document.getElementById("video-player");
  const source = document.getElementById("video-source");

  source.src = videos[index];
  video.load();
  video.play();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % videos.length;
  showVideo(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  showVideo(currentIndex);
}


function randomVideo() {
  currentIndex = Math.floor(Math.random() * videos.length);
  showVideo(currentIndex);
}

// otomatis load video random saat halaman dibuka
document.addEventListener("DOMContentLoaded", randomVideo);

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("random") === "1") {
  randomVideo();
} else {
  showVideo(0);
}