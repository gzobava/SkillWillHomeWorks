function capitalizeWordsInString(inputString) {
    const words = inputString.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toUpperCase();
    }
  
    return words.join(' ');
  }
  
  
  let inputString = "helo world from georgia";
  let newString = capitalizeWordsInString(inputString);
  console.log(newString);