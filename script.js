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

// 📋 Copy button click
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const number = card.querySelector(".service-number").textContent.trim();

 // copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
      alert(`Hotline number ${number} copied to clipboard!`);
