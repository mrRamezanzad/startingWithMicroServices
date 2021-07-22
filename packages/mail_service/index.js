const {getFromMessageQ} = require('./messageQ/consume.js')
const {mail: {publicKey, secretKey}} = require('./config')
// const mailjet = require('node-mailjet')(publicKey, secretKey)
// "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
//   Generate test SMTP service account from ethereal.email
//   Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

//   create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'mohammadrezaramezanzad@gmail.com',
        clientId: '"973702886440-tim75g5dnfr0r3tfguc713vd8isahorm.apps.googleusercontent.com"',
        clientSecret: "TYbzg14IqRRuIQuoGYUEl1z8"
    }
  });

//   send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'mohammadrezaramezanzad@gmail.com', // sender address
    to: "keystar1other@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}
main().catch(console.error)