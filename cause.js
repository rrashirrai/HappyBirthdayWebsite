document.addEventListener("DOMContentLoaded", () => {

const reasons = [
"So today is not just any random day 👀",
"It’s the day someone pretty amazing was born 🎂",
"Yes… that someone is me 😌",
"Another year older, but definitely cooler 😏",
"Grateful for everything I have in life 💕",
"And excited for everything coming next 🚀",
"More memories, more fun, more growth 🌱",
"And obviously… more cake 🎂😋",
"This is MY journey 💫",
"And it’s only getting better from here 💖"
];

let index = 0;
const container = document.getElementById("reasons-container");
const button = document.querySelector(".shuffle-button");

button.addEventListener("click", () => {


if (index < reasons.length) {

  const card = document.createElement("div");
  card.className = "reason-card";
  card.textContent = reasons[index];

  container.appendChild(card);
  index++;

} else {
  // Final step → go to next page
  window.location.href = "last.html";
}


});

});
