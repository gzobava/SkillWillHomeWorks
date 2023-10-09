function saveOldValues(userObject) {
    const oldValues = {};
  
    for (const key in userObject) {
      if (userObject.hasOwnProperty(key)) {
        oldValues[key] = userObject[key];
      }
    }
  
    return oldValues;
  }
   
  const user = {
    name: 'Spartak',
    age: 25,
    email: 'spartakus@example.com',
    nom: 599999999 ,
  };
  
  const oldUser = saveOldValues(user);
  console.log(oldUser);