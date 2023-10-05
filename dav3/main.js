console.log ("Davaleba3")

function MinCalculator(a, b, operation) {
    if (typeof a === 'number' && typeof b === 'number') {
        switch (operation) {
            case '+':
              return a + b;
            case '-':
              return a - b;
            case '*':
              return a * b;
            case '/':
             
              if (b !== 0) {
                return a / b;
              } else {
                return 'ნულზე გაყოფა არ შეიძლება';
              }
            default:
              return false; 
          }
    } else {
        return false ;
    }
     
   
    
  }
  
  
  console.log(MinCalculator(10, 2, '+')); 
  console.log(MinCalculator(21, 11, '-')); 
  console.log(MinCalculator(3, 7, '*'));
  console.log(MinCalculator(30, 10, '/'));
  console.log(MinCalculator(25, 0, '/')); 
  console.log(MinCalculator(100, 43, '%')); 
  console.log(MinCalculator( 4, 'გია', '+')); 
  