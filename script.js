const cards = document.getElementsByClassName("card");

for (let singleCard of cards) {
  const cardsHeart = singleCard.querySelector(".card-heart");
  const callBtn = singleCard.querySelector(".call-btn");
  const copyBtn = singleCard.querySelector(".copy-btn")

   // heart count
  cardsHeart.addEventListener("click", function () {
    let clickCount = parseInt(document.getElementById("heart-img").innerText);
    clickCount++;
    document.getElementById("heart-img").innerText = clickCount;
  });