function waitforfiveseconds() {
    const ms = new Date().getTime() + 500;
    while (new Date().getTime() < ms) ;
}
function login(){
    waitforfiveseconds();
    console.log("Aditya Logged succesfully");
}
function getData(){
    waitforfiveseconds();
    console.log("ADitya 2300320100015 Data fetched");
}   
function displayData(){
    waitforfiveseconds();
    console.log("Aditya Data displayed succesfully");
}
function attemptest()
{
    waitforfiveseconds();
    console.log("Attempted test successfully");
}
function logout(){
    waitforfiveseconds();
    console.log("Logged out Aditya successfully");
}
login();
getData();
displayData();
attemptest();
logout();   
console.log("Other application work");