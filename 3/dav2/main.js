function giveCityFromUser(user) {
    const { address: { city } = {} } = user.banks[2];
    return city;
  }
  
  const user = {
    banks: [
      {},
      {},
      {
        address: {
          city: "Rustavi"
        }
      }
    ]
  };
  
  const city = giveCityFromUser(user);
  console.log(city); 