function customReplace(inputString, valueToReplace, valueToReplaceWith) {
    let result = '';
    let currentIndex = 0;
  
    while (currentIndex < inputString.length) {
      if (inputString.substring(currentIndex, currentIndex + valueToReplace.length) === valueToReplace) {
        result += valueToReplaceWith;
        currentIndex += valueToReplace.length;
      } else {
        result += inputString[currentIndex];
        currentIndex++;
      }
    }
  
    return result;
  }
  
  // Пример использования функции
  const originalString = "Hello, valueToReplace this is a valueToReplace test.";
  const newString = customReplace(originalString, "valueToReplace", "REPLACED");
  console.log(newString);