function waitForFiveSeconds() {
  return new Promise(resolve => {
    setTimeout(resolve, 5000); 
  });
}

async function login() {
  await waitForFiveSeconds();
  console.log("Aditya Logged successfully");
}

async function getData() {
  await waitForFiveSeconds();
  console.log("Aditya 2300320100015 Data fetched");
}

async function displayData() {
  await waitForFiveSeconds();
  console.log("Aditya Data displayed successfully");
}

async function attemptTest() {
  await waitForFiveSeconds();
  console.log("Attempted test successfully");
}

async function logout() {
  await waitForFiveSeconds();
  console.log("Logged out Aditya successfully");
}

async function main() {
  await login();
  await getData();
  await displayData();
  await attemptTest();
  await logout();
  console.log("Other application work");
}

main();