const { emailuser, emailPassword } = process.env
const nodemailer = require("nodemailer")


const mails = async (name, email, password) => {
    try {
      const mailoption = {
        from: emailuser,
        to: email,
        subject: 'CONGRATES! YOUR Account is Created',
        html:'<h1> Hi '+name+' your password for the account is '+password+' </h>'
    //  text:'otp='+token+''
        // text: '<p>Hi ' + name + ',Please copy the link <a href="http://localhost:5000/api/reset-password?password=' + password + '"> and reset password</a></P>'
  
      }
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        service: 'gmail',
        auth: {
          user: emailuser,
          pass: emailPassword
        }
      }).sendMail(mailoption, function (err, inform) {
        if (err) {
          console.log(err);
        } else {
          console.log("Mail has been sent:-", inform.response);
        }
      })
    }
    catch (error) {
      res.status(400).send(error.message)
    }
  
  }

  module.exports=mails