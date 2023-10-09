const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];

function WhoisYoungestPerson(users) {
    let YoungestPerson = users[0];
  
    for (let i = 1; i < users.length; i++) {
      if (users[i].age < YoungestPerson.age) {
        YoungestPerson = users[i]; 
      }
    }
  
    return YoungestPerson.name; 
  }

  const YoungestPersonName = WhoisYoungestPerson(users);
  console.log(YoungestPersonName); 