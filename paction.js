/********************
 * Typing – index.html
 ********************/
const typingElement = document.getElementById("typing");
const introText = "I have made something for you Billi 💕";
let introIndex = 0;

function typeIntro() {
    if (typingElement && introIndex < introText.length) {
        typingElement.innerHTML += introText.charAt(introIndex);
        introIndex++;
        setTimeout(typeIntro, 80);
    }
}

window.onload = () => {
    typeIntro();
    startHearts();
    typeLoveText();
};

/********************
 * Typing – begin.html
 ********************/
const loveText = "Every moment with you feels special. I made this little space just to remind you how much you mean to me… 💖";
const loveElement = document.getElementById("loveTyping");
let loveIndex = 0;

function typeLoveText() {
    if (loveElement && loveIndex < loveText.length) {
        loveElement.innerHTML += loveText.charAt(loveIndex);
        loveIndex++;
        setTimeout(typeLoveText, 60);
    }
}

/********************
 * Buttons
 ********************/
function yesClicked() {
    window.location.href = "begin.html";
}

function noClicked() {
    document.body.innerHTML = `
        <div class="container">
            <h2 style="color:red;">How dare you 😡</h2>
            <img src="images/cute.gif" class="teddy">
            <br><br>
            <button onclick="tryAgain()">Try Again 😤</button>
        </div>
    `;
}

function tryAgain() {
    window.location.href = "index.html";
}

/********************
 * No button escape (desktop + mobile)
 ********************/
const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", moveNoBtn);
    noBtn.addEventListener("touchstart", moveNoBtn);
    noBtn.addEventListener("click", noClicked);
}

function moveNoBtn() {
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

function openEnvelope() {
    const envelope = document.querySelector(".envelope");
    const letter = document.getElementById("letter");

    envelope.classList.add("open");

    setTimeout(() => {
        letter.style.display = "block";
    }, 600);
}

function goNext() {
    window.location.href = "next.html";
}
