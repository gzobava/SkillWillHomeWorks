function copyObject(obj) {
    return { ...obj };
  }
  
   const obj = {
    name: "Pavle",
    age: 21,
    address: {
      country: "Georgia",
      city: "Surami",
      contacts: {
        mail: "Pavle111@gmail.su",
        nom: "511443355"
      }
      
    }
  };
  
  const copiedObj = copyObject(obj);
  console.log(copiedObj);