const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    mobilenumber: {
        type: String, 
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    emergcontact1: {
        type: String, 
        required: true
    },
    emergcontact2: {
        type: String, 
        required: true
    }
})
const UserModel= mongoose.model("userdetails", UserSchema);
module.exports=UserModel;