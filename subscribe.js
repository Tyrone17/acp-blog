// create IDs
acpusubID = Date.now();
localStorage.setItem("subID", acpusubID);
var oSubID = localStorage.getItem("subID");
console.log(typeof oSubID);

function add(){
  getAtt();
  localStorage.setItem("person",person);
  
}

function getAtt(){
  // Fetch form data vars to use
  
  // Fetch user consent check
  var c = document.getElementById("tac").textContent;
  var consent = c.charAt(6)
  var e = document.getElementById("email").value;
  var n = document.getElementById("number").value;
  subscriberInfoDB = [ 
    currentUserEmail= e,
    currentUserNum= n,
    consentGiven= consent,
    oSubID= oSubID
  ];
  console.log(subscriberInfoDB)
  localStorage.setItem("subscriberInfoDB",subscriberInfoDB)
 
  return ;
}

// TODO fetch from other pages script
var user = localStorage.getItem("userID");


// TODO Verify email in from


// 	TODO Allocation user EXP for bonus system
var ecoins =0.0001; 

// START app
console.log("acp-blog webapp: v1.0.1");

// TODO create an dic
var who = oSubID;
var coins = ecoins;
var transactions =[];

person = [
  user=who,
  wallet=coins,
  tx=transactions
];

function createSubscriber (user,coins){
    // Exec the code to create incesion into app.
	subscriberDB = [ 
        currentUser= person.user,
        loggedInUser= person.user,
    ];
	
	localStorage.setItem("subscriberDB",subscriberDB);
  
}

//if (localStorage.getItem("subscriberDB") != null && document.){
//	return;
//} else{
//	createSubscriber();
//};


//function fetchDMC (){
    // exec the code to create a suture
  //  var userPro = localStorage.getItem("subID");
    //var userRootApp = localStorage.getItem("userID");
    //console.log(userPro);
    //checkTwo = true;
    
   // userDB=[ 
    //    currentUser=userPro,
     //   loginInUser=userRootApp,
       // checkTwo = true,
       // coins=siteSubID.electrons
        
    //]
    //localStorage.setItem("userDB", userDB) 
    //console.log("current MAC Address obtained: " + coins + " sigmasixsofa\n")
    //console.log(siteSubID.electrons)
//}

//fetchDMC()

// export default function DAAP (){
//     var ce = fetchDMC();
// }