function login() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Aditya Logged successfully");
      resolve();
    }, 5000);
  });
}

function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Aditya 2300320100015 Data fetched");
      resolve();
    }, 5000);
  });
}

function displayData() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Aditya Data displayed successfully");
      resolve();
    }, 5000);
  });
}

function attemptTest() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Attempted test successfully");
      resolve();
    }, 5000);
  });
}

function logout() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Logged out Aditya successfully");
      resolve();
    }, 5000);
  });
}

function main() {
  login()
    .then(getData)
    .then(displayData)
    .then(attemptTest)
    .then(logout)
    .then(() => {
      console.log("Other application work");
    });
}

main();