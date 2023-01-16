

const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,

    },
    email: {
      type: String,
      // required: true,
      // trim: true,
      // lowercase: true,
      // unique: true,
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "Please fill a valid email address",
      // ],
    },
    password: {
      type: String,
      // required: [true, "Enter your password"],

    },
    // confirmpassword: {
      // type: String,
      // required: true, 
    // },
    phone: {
        type: String,
        // required: true, 
      },
    // image: {
    //   type: String,
    //   required: true

    // },
    // address: {
    //   data:Buffer,
    //   contenttype: String,
      
      // required: true, 
    // },
    // phone: {
    //   type: String,
    //   // required: true, 
    // },
//     country: {
//       type: String,
//       // required: true, 
//     },
//     pincode: {
//       type: String,
//       // required: true, 
//     },
//     state: {
//       type: String,
//       // required: true, 
//     },
//     token:{
//       type:String,
//       default:''
//     },
  },
  
  
  
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("signup", loginSchema);
