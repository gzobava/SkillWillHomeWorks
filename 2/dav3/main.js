function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  let playerACount = 0;
  let playerBCount = 0;

  while (true) {
      const result = rollDice();

      if (result === 3) {
          if (playerACount < playerBCount) {
              console.log("გაიმარჯვა მოთამაშემ ა !");
          } else if (playerBCount < playerACount) {
              console.log("გაიმარჯვა მოთამაშემ ბ !");
          } else {
              console.log("ფრე!");
          }
          break;
      }

      if (Math.random() < 0.5) {
          playerACount++;
      } else {
          playerBCount++;
      }
  }
}

playGame();