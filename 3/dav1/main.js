function nCalculate(n) {
    if (n <= 2) {
      throw new Error("Null");
    }
  
    let sum = 1 + 2;
    let product = 1;
  
    for (let i = 3; i <= n; i++) {
      product *= i;
    }
  
    return [sum, product];
  }
  
  
  const n = 20; 
  const result = nCalculate(n);
  console.log(result); 