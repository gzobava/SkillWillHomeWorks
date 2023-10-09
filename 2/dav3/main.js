function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function playGame() {
    let rollsA = 0;
    let rollsB = 0;
  
    while (true) {
      const resultA = rollDice();
      const resultB = rollDice();
  
      rollsA++;
      rollsB++;
  
      if (resultA === 3 || resultB === 3) {
        break;
      }
    }
  
    if (resultA === 3 && resultB === 3) {
      console.log(" ფრეე !!! ორივე მოთამაშემ თანაბარ ცდაში გააგორეს 3 ");
    } else if (resultA === 3) {
      console.log(`გამარჯვებულია მოთამაშე ა ! მას დასჭირდა ${rollsA} გაგორება , როდესაც მოთამაშე ბ დასჭირდა ${rollsB} გაგორება.`);
    } else {
      console.log(`გამარჯვებულია მოთამაშე ბ ! მას დასჭირდა ${rollsB} გაგორება , როდესაც მოთამაშე ა დასჭირდა ${rollsA} გაგორება.`);
    }
  }
  
  playGame();