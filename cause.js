alert("JS is working");
document.addEventListener("DOMContentLoaded", () => {

const reasons = [
{ text: "So today is not just any random day 👀", emoji: "✨" },
{ text: "It’s the day someone pretty amazing was born 🎂", emoji: "💖" },
{ text: "Yes… that someone is me 😌", emoji: "😎" },
{ text: "Another year older, but definitely cooler 😏", emoji: "🔥" },
{ text: "Grateful for everything I have in life 💕", emoji: "🌸" },
{ text: "And excited for everything coming next 🚀", emoji: "⭐" },
{ text: "More memories, more fun, more growth 🌱", emoji: "🦋" },
{ text: "And obviously… more cake 🎂😋", emoji: "🍰" },
{ text: "This is MY journey 💫", emoji: "💫" },
{ text: "And it’s only getting better from here 💖", emoji: "🌟" }
];

let index = 0;
const container = document.getElementById("reasons-container");
const button = document.querySelector(".shuffle-button");
const counter = document.querySelector(".reason-counter");

button.addEventListener("click", () => {
if (index < reasons.length) {


    const card = document.createElement("div");
    card.className = "reason-card";

    const text = document.createElement("div");
    text.className = "reason-text";
    text.innerHTML = `${reasons[index].emoji} ${reasons[index].text}`;

    card.appendChild(text);
    container.appendChild(card);

    gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6
    });

    index++;
   

    createFloatingElement();

} else {
    showEnding();
}


});

function showEnding() {
const endingText = document.querySelector(".ending-text");
const teddy = document.querySelector(".teddy-hug");


endingText.style.opacity = "1";
endingText.style.transform = "translateY(0)";

gsap.from(teddy, {
    scale: 0,
    duration: 1
});

button.innerText = "Go to Final Page 💖";
button.disabled = false;

button.onclick = () => {
    window.location.href = "last.html";
};

}

function createFloatingElement() {
const elements = ['💖', '✨', '🎉', '🌸', '⭐'];
const element = document.createElement('div');


element.className = 'floating';
element.textContent = elements[Math.floor(Math.random() * elements.length)];
element.style.left = Math.random() * window.innerWidth + 'px';
element.style.top = Math.random() * window.innerHeight + 'px';
element.style.fontSize = (Math.random() * 20 + 15) + 'px';

document.body.appendChild(element);

gsap.to(element, {
    y: -400,
    opacity: 0,
    duration: 6,
    onComplete: () => element.remove()
});


}

setInterval(createFloatingElement, 2000);

});
