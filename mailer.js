const sender = require("nodemailer");
console.log(sender);
const transport = sender.createTransport({
  service: "gmail",
  auth: {
    user: "ahmednasrigeo@gmail.com",
    pass: "Mypassword",
  },
});

var mailOptions = {
  from: "ahmednasrigeo@gmail.com",
  to: "myfriend@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "Hello !",
};

transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
