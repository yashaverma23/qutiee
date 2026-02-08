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
From the moment you walked into my life again,
everything started to feel different.

You the missing piece which i always needed to complete my puzzled life.
See to be honest, i am an idiot, i know that, and i want to know how to love you in your way.
means i want to know and learn your love language Sweetie 💖.

but also i want you to know that i love you more than anything in this world like,

I'm in love with you like Boa Hancock loves Monkey D. Luffy

I'm obbesed with you like Hinata is for Naruto

I will try my best everytime to protect you like Takemichi did for Hinata

I can stand againt the world like Eren did in love for Mikasa

I can make a fool of myself like Senor Pink does for Russian.

Well I'm an anime fans so all anime refernece hope this will excite you to watch them.
Btw has some football reference too, wanna know?

You know, Pyar karne se nhi hota, hote hote ho jaata bass.
and please don't ever think im just your friend coz once Monkey D. Luffy said 
"Until im alive i have infinite chances to get you".

Aur dhyan seh sunn
"Na tere jaasa chaiye, na tujhse behtar,
laakho karodon ki bheed me bhi, mujhe sirf tu hi chaiye"

Aur rahi baat Green man honi, im a green man in everthing,
until i see you with someone else, after that i am most reddest man on earth.
I can't see you with anyone else, not even with our friends and not even in dreams.

You know you have became my calm on chaotic days,
my smile without effort,
and my favorite thought before sleep.

This little letter can’t fully express
what you truly mean to me,
but it carries every honest feeling
straight from my heart… 💖
`.trim();

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
        const btnContainer = document.getElementById("letterButtons");
        if (btnContainer) {
            btnContainer.style.display = "flex";
        }
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

/********************
 * Final Proposal NO Button Logic
 ********************/

const noPhrases = [
    "NO 😏",
    "Are you sure?",
    "Try again 😌",
    "I don't think you want this",
    "Really? Still trying?",
    "Hmm… think again 🤔",
    "This button is useless 😅",
    "You know the answer 💖",
    "Nice try 😏",
    "Okay last chance…"
];

let noIndex = 0;
const noFinalBtn = document.getElementById("noFinal");

if (noFinalBtn) {
    noFinalBtn.addEventListener("mouseover", moveFinalNo);
    noFinalBtn.addEventListener("touchstart", moveFinalNo);
}

function moveFinalNo() {
    // Change text
    noFinalBtn.innerText = noPhrases[noIndex];
    noIndex = (noIndex + 1) % noPhrases.length;

    const btnWidth = noFinalBtn.offsetWidth;
    const btnHeight = noFinalBtn.offsetHeight;

    const padding = 20;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noFinalBtn.style.position = "fixed";
    noFinalBtn.style.left = x + "px";
    noFinalBtn.style.top = y + "px";
}

/********************
 * YES → Final Page
 ********************/
function yesFinal() {
    window.location.href = "last.html";
}

/********************
 * 🎉 Confetti Effect
 ********************/
const canvas = document.getElementById("confettiCanvas");

if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#4dabf7"];

    for (let i = 0; i < 120; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 120,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((c, i) => {
            ctx.beginPath();
            ctx.fillStyle = c.color;
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fill();
        });

        updateConfetti();
    }

    function updateConfetti() {
        confetti.forEach((c) => {
            c.y += Math.cos(c.d) + 1 + c.r / 2;
            c.x += Math.sin(c.d);

            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });
    }

    setInterval(drawConfetti, 20);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
