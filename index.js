// function subscriberStyle() {
//   document.getElementById("nav").style.backgroundColor = "crimson";
// }

//  ------------------------------------------------------------------------------------------------------------------------
//  ------------------------------------------------------------------------------------------------------------------------

console.log("'success factors in mistakes'- Tyrone Maasdorp");
acpuserID = Date.now();
// var localID = localStorage.setItem("userID", acpuserID);
var tSubID = localStorage.getItem("subID");
var tUserID = localStorage.getItem("userID");
var jvar = localStorage.getItem("userDB");
var eAllocation= 0.0001;
// console.log("tSubId=" +tSubID+" ,tUserID="+tUserID);

// Verify email first in from
// 	TODO

// START app
console.log("acp-blog webapp");

console.log("acpuser: " + acpuserID);
// error starts from here
console.log("DB info: " + jvar);

console.log(tSubID, eAllocation)
sPerson = {ACPuserID:tUserID, eAllocation:eAllocation, number:"0843679037", email:"techerv-bit.co.za"};
localStorage.setItem("person",sPerson)
console.log("Number on file: "+sPerson.number, " current balance of e-token: " + eAllocation)
