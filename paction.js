/********************
 * Index page typing
 ********************/
const typingEl = document.getElementById("typing");
const introText = "I have made something for you Billi 💕";
let introIndex = 0;

function typeIntro() {
    if (typingEl && introIndex < introText.length) {
        typingEl.innerHTML += introText.charAt(introIndex);
        introIndex++;
        setTimeout(typeIntro, 80);
    }
}

/********************
 * Navigation
 ********************/
function yesClicked() {
    window.location.href = "begin.html";
}

function tryAgain() {
    window.location.href = "index.html";
}

/********************
 * No button escape
 ********************/
const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", moveNo);
    noBtn.addEventListener("touchstart", moveNo);
}

function moveNo() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/********************
 * Floating hearts
 ********************/
function startHearts() {
    const interval = window.innerWidth < 500 ? 1200 : 700;

    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, interval);
}

/********************
 * Envelope + Typed Letter
 ********************/
const letterContent = `
From the moment you walked into my life,
everything started to feel different.

You became my calm on chaotic days,
my smile without effort,
and my favorite thought before sleep.

This little letter can’t fully express
what you truly mean to me,
but it carries every honest feeling
straight from my heart… 💖
`;

let letterIndex = 0;

function openEnvelope() {
    const envelope = document.querySelector(".envelope");
    const letter = document.getElementById("letter");
    const textArea = document.getElementById("letterText");

    envelope.classList.add("open");
    letter.style.display = "block";

    setTimeout(() => typeLetter(textArea), 400);
}

function typeLetter(el) {
    if (letterIndex < letterContent.length) {
        el.innerHTML += letterContent.charAt(letterIndex);
        letterIndex++;
        setTimeout(() => typeLetter(el), 40);
    } else {
        document.getElementById("nextBtn").style.display = "inline-block";
    }
}

function goNext() {
    window.location.href = "next.html";
}

/********************
 * Init
 ********************/
window.onload = () => {
    typeIntro();
    startHearts();
};
