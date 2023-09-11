// var nodemailer = require('nodemailer');

// var transportObj = nodemailer.createTransport({
//     service:'outlook',
//     auth:{
//         user:'tsbitza@outlook.com',
//         pass: 'r00tw0rd@oohay'
//     }
// })

// var mailOpt = {
//     from:'tsbitza@outlook.com',
//     to:'techserv20@gmail.com',
//     subject:'nodemailer DEMO',
//     text : 'working demo'
// }

// transportObj.sendMail(mailOpt, function(error, info){
//     if (error){
//         console.log(error);

//     }else{
//         console.log('emaiil sent')
//     }
// })

console.log("Running");
// Fetch subID var
var tSubID = localStorage.getItem("subID");
// Fetch person var
var oPerson = localStorage.getItem("person");
// Fetch subscriberInfoDB
var subscriberInfo = localStorage.getItem("subscriberInfoDB");

console.log("subscriber ID: "+tSubID);
console.log("person object: "+oPerson);
console.log("subscriber object: "+subscriberInfo);

// Contextualize the string
var oCP = subscriberInfo.includes("@");
console.log(oCP);
if (oCP == true){
    console.log("true=1");
}else{
    console.log("false=0");
}


var sigma = {

};
