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

  // call btn click
  

  callBtn.addEventListener("click", function () {
    const serviceName = singleCard.querySelector(".service-name").innerText;
  const serviceNumber = singleCard.querySelector(".service-number").innerText;
  const setAlert = `📞Calling-${serviceName}-${serviceNumber}`;

  const historyContainer = document.getElementById("history-container");
  const newDiv = document.createElement("div");
  



    let coinImg = document.getElementById("coin-img");
    let currentCoin = parseInt(coinImg.innerText);

     const setSecondAlert = `❌ You don't have enough coins; You need at least 20 coins to make a call`
    if(currentCoin > 0){
        const totalCoin = currentCoin - 20;
        coinImg.innerText = totalCoin;
    }
    else{
        alert(setSecondAlert)
        return
    }

    alert(setAlert);
    newDiv.innerHTML = `
        <div class="flex justify-between items-center bg-gray-100 mt-2 p-2 rounded-lg">
                <div>
                  <h2 class="font-semibold">${serviceName}</h2>
                  <p class="text-gray-500">${serviceNumber}</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
              </div>
        `;
    historyContainer.appendChild(newDiv);

   
  });