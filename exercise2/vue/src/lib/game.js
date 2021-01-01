function getRandomInt() {
  let num = Math.floor(Math.random() * 100000);
  return num;
}

export function game(number) {
  const interval = setInterval(() => {
    number.value = getRandomInt();
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    if (number > 0 && number <= 1000) {
      alert("You win!");
    } else {
      alert("Too bad! You've lost!");
    }
  }, 5000);
}