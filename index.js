// function subscriberStyle() {
//   document.getElementById("nav").style.backgroundColor = "crimson";
// }

//  ------------------------------------------------------------------------------------------------------------------------
//  ------------------------------------------------------------------------------------------------------------------------

// START app
console.log("acp-blog webapp");
console.log("'success factors in mistakes'- Tyrone Maasdorp");
acpuserID = Date.now();
var tUserID = localStorage.getItem("userID");
console.log("acpuser: " + acpuserID);

// local wallet
var eAllocation= 0.0001;
//console.log(tSubID, eAllocation)
sPerson = {ACPuserID:tUserID, eAllocation:eAllocation, number:"", email:""};
// localStorage.setItem("person",sPerson)
// ID and Wallet info
console.log("Number on file: "+sPerson.number, " Email on file: "+sPerson.email, " current balance of e-token: " + eAllocation)


