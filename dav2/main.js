console.log ("Davaleba2")

function confahrToCel(fahrenheit) { 
    if(typeof fahrenheit === "number" ) {
        let celsius  = (fahrenheit-32)*5/9
        return celsius 
    } else {
        return false;
    }
}

    
console.log (confahrToCel (87))
console.log (confahrToCel (12))
console.log (confahrToCel ("seven"))