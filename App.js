var nodemailer = require('nodemailer');

var transportObj = nodemailer.createTransport({
    service:'outlook',
    auth:{
        user:'tsbitza@outlook.com',
        pass: 'r00tw0rd@oohay'
    }
})

var mailOpt = {
    from:'tsbitza@outlook.com',
    to:'techserv20@gmail.com',
    subject:'nodemailer DEMO',
    text : 'working demo'
}

transportObj.sendMail(mailOpt, function(error, info){
    if (error){
        console.log(error);

    }else{
        console.log('emaiil sent')
    }
})