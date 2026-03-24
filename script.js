const cursor = document.querySelector('.cursor');

// Custom cursor
document.addEventListener('mousemove', (e) => {
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';
});

// Typing effect (customized)
const greetingText = "Hey… it's my day today 🎉 And honestly, I deserve all the happiness 💖";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
if (charIndex < greetingText.length) {
greetingElement.textContent += greetingText.charAt(charIndex);
charIndex++;
setTimeout(typeGreeting, 80);
}
}

// Floating elements
const floatingElements = ['💖', '✨', '🎉', '🌸', '⭐'];

function createFloating() {
const element = document.createElement('div');
element.className = 'floating';
element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];

```
element.style.left = Math.random() * 100 + 'vw';
element.style.top = '100vh';
element.style.fontSize = (Math.random() * 15 + 20) + 'px';

document.body.appendChild(element);

gsap.to(element, {
    y: -600,
    x: Math.random() * 100 - 50,
    rotation: Math.random() * 360,
    duration: Math.random() * 4 + 4,
    opacity: 1,
    ease: "power1.out",
    onComplete: () => element.remove()
});
```

}

// On load animations
window.addEventListener('load', () => {

```
gsap.from('h1', {
    opacity: 0,
    y: -40,
    duration: 1
});

gsap.from('.cta-button', {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.3
});

typeGreeting();

setInterval(createFloating, 1200);
```

});

// Button hover + click
const button = document.querySelector('.cta-button');

button.addEventListener('mouseenter', () => {
gsap.to(button, { scale: 1.1, duration: 0.3 });
});

button.addEventListener('mouseleave', () => {
gsap.to(button, { scale: 1, duration: 0.3 });
});

button.addEventListener('click', () => {
gsap.to('body', {
opacity: 0,
duration: 0.8,
onComplete: () => {
window.location.href = 'cause.html';
}
});
});
