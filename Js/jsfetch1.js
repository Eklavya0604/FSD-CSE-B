const url = "https://dummyjson.com/users?limit=30";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.users.forEach((user) => {
      console.log("Name =", user.firstName);
      console.log("Email =", user.email);
      console.log("IP =", user.ip);
      console.log("Mac Address =", user.macAddress);
      console.log("----------");
    });
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });