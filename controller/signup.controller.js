const SignupModel = require('../model/signup.model')
const mails=require('../config/nodemailer')
const bcrypt=require('bcrypt')





const signup=async(req,res)=>{
  
  try{
    const { name, email, password,phone,confirmpassword } = req.body;
    if(!(name,email,password,confirmpassword,phone)){
     res.status(400).send('please enter details')
    }
    if(!(password===confirmpassword)){
     res.status(400).send(' password & confirm-password mismatch ')
 
    }else{
    const user=new SignupModel({
      name,
      email,
      phone,
      password: await bcrypt.hash(password, 10),
      confirmpassword
      
    })
   const find =await SignupModel.findOne({email});
   if(find){
    res.status(200).send("This email already exist")
   }else{
    let result = await user.save()
    mails(name,email,password)
    res.status(200).send(result)
   }
  }}
  catch(error){
    console.log(error);
  }
}

   
   










module.exports = {
  signup,
}