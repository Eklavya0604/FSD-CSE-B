function waitForFiveSeconds(callback) {
  setTimeout(callback, 5000);
}

function login(next) {
  waitForFiveSeconds(() => {
    console.log("Aditya Logged successfully");
    next();
  });
}

function getData(next) {
  waitForFiveSeconds(() => {
    console.log("Aditya 2300320100015 Data fetched");
    next();
  });
}

function displayData(next) {
  waitForFiveSeconds(() => {
    console.log("Aditya Data displayed successfully");
    next();
  });
}

function attemptTest(next) {
  waitForFiveSeconds(() => {
    console.log("Attempted test successfully");
    next();
  });
}

function logout(next) {
  waitForFiveSeconds(() => {
    console.log("Logged out Aditya successfully");
    next();
  });
}

function main() {
  login(() => {
    getData(() => {
      displayData(() => {
        attemptTest(() => {
          logout(() => {
            console.log("Other application work");
          });
        });
      });
    });
  });
}

main();