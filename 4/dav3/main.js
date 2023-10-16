function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
  }
  
  const users = [
    { name: 'Lasha', age: 30 },
    { name: 'sasha', age: 23 },
    { name: 'Saba', age: 20 },
  ];
  
  const sortedUsers = sortByAge(users);
  console.log(sortedUsers);