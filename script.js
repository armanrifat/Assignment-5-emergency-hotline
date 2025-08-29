// script.js

// navbar counters
const heartCount = document.getElementById("heart-img");
const coinCount = document.getElementById("coin-img");
const copyCount = document.getElementById("copy-count");

// history container
const historyContainer = document.getElementById("history-container");
const clearBtn = document.getElementById("clear-btn");

// ❤️ Heart icon click
document.querySelectorAll(".card-heart").forEach((heart) => {
  heart.addEventListener("click", () => {
    let current = parseInt(heartCount.textContent);
    heartCount.textContent = current + 1;
  });
});