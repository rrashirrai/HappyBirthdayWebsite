document.addEventListener("DOMContentLoaded", () => {

// Typing effect
const greetingText = "Hey… it's my day today 🎉 And honestly, I deserve all the happiness 💖";
const greetingElement = document.querySelector('.greeting');

let index = 0;

function typeText() {
if (index < greetingText.length) {
greetingElement.textContent += greetingText[index];
index++;
setTimeout(typeText, 60);
}
}

typeText();

});
