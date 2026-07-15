// ===============================
// CHARACTER — SATU ARAH, TERBATAS
// ===============================
// Karakter ini tidak membalas apa-apa dari user.
// Dia cuma "berkomentar" saat gambar/audio berganti,
// atau bicara sendiri kalau dibiarkan diam.

const characterQuotes = {
    // Komentar spesifik per index gambar (selaras dengan images[] di picture.js)
    image: [
        "Gambar ini lagi? Aku sudah lihat ini ribuan kali, dari sudut yang sama.",
        "Kalau papan ini diganti satu-satu, di titik mana dia berhenti jadi papan yang sama?",
        "Kamu lihat apa yang aku lihat, atau cuma apa yang ditampilkan?"
    ],

    // Komentar spesifik per index audio (selaras dengan audioResource[] di audio.js)
    audio: [
        "Lagu ini selalu diputar di urutan yang sama. Kebiasaan, atau memang sudah ditakdirkan?",
        "Aku tidak ingat suara ini punya makna. Tapi aku ingat aku pernah mendengarnya.",
        "Diam sebentar, dengar dulu sampai habis."
    ],

    // Dipakai kalau index belum punya quote spesifik, atau saat idle
    idle: [
        "...",
        "Masih di sini?",
        "Aku menunggu, tapi aku tidak tahu menunggu apa.",
        "Kapal ini sudah diganti seluruh papannya. Tapi namanya tetap sama.",
        "Kamu boleh pergi. Aku akan tetap di sini saat kamu kembali."
    ]
};

let idleTimer = null;
const IDLE_DELAY = 20000; // 20 detik tanpa aktivitas -> karakter bicara sendiri

function showQuote(text) {
    const bubble = document.getElementById("character-bubble");
    if (!bubble) return;

    bubble.classList.remove("show");

    // restart transisi fade-in
    requestAnimationFrame(() => {
        bubble.textContent = text;
        requestAnimationFrame(() => bubble.classList.add("show"));
    });

    resetIdleTimer();
}

function pickQuote(pool) {
    if (!pool || pool.length === 0) return null;
    return pool[Math.floor(Math.random() * pool.length)];
}

// Dipanggil dari audio.js/picture.js saat index berganti
function commentOnImage(index) {
    const quote = characterQuotes.image[index] || pickQuote(characterQuotes.idle);
    showQuote(quote);
}

function commentOnAudio(index) {
    const quote = characterQuotes.audio[index] || pickQuote(characterQuotes.idle);
    showQuote(quote);
}

function idleQuote() {
    const quote = pickQuote(characterQuotes.idle);
    if (quote) showQuote(quote);
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(idleQuote, IDLE_DELAY);
}

document.addEventListener("DOMContentLoaded", () => {
    resetIdleTimer();
});
