function waitForTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

async function register() {
  try {
    await waitForTwoSeconds();
    console.log("register end");
  } catch (error) {
    console.error("Error in register:", error);
  }
}

async function sendEmail() {
  try {
    await waitForTwoSeconds();
    console.log("email end");
  } catch (error) {
    console.error("Error in sendEmail:", error);
  }
}

async function login() {
  try {
    await waitForTwoSeconds();
    console.log("login end");
  } catch (error) {
    console.error("Error in login:", error);
  }
}

async function getData() {
  try {
    await waitForTwoSeconds();
    console.log("data end");
  } catch (error) {
    console.error("Error in getData:", error);
  }
}

async function displayData() {
  try {
    await waitForTwoSeconds();
    console.log("Display end");
  } catch (error) {
    console.error("Error in displayData:", error);
  }
}

async function main() {
  try {
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
    console.log("other Application");
  } catch (error) {
    console.error("Unexpected error in main:", error);
  }
}

main();