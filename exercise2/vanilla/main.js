const button = document.querySelector("#play");
const numberSpan = document.querySelector("#number");

// Helper to get a random integer between 0 and 100,000 
function getRandomInt() {
  let num = Math.floor(Math.random() * 100000);
  return num;
}

// Helper to set the text within the number span on the page
function setNumberSpan(number) {
  numberSpan.textContent = number;
}

button.addEventListener("click", () => {
  let num = 0;
  const interval = setInterval(() => {
    num = getRandomInt();
    setNumberSpan(num);
  }, 50);
  setTimeout(() => {
    clearInterval(interval);
    if (num > 0 && num <= 1000) {
      alert("You win!");
    } else {
      alert("Too bad! You've lost!");
    }
  }, 5000);
});