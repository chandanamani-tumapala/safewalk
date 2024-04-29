const mongoose= require('mongoose');

const EscortSchema= new mongoose.Schema({
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
    aadhar: {
        type: String, 
        required: true
    },
    pancard: {
        type: String, 
        required: true
    }
})

const EscortModel = mongoose.model('escortdetails', EscortSchema);
module.exports=EscortModel;