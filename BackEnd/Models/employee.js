const mongoose=require('mongoose');
const schema=mongoose.Schema;

const employeeSchema=new schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    age: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const employeeSchema1=new mongoose.model('employeeDetail',employeeSchema);
module.exports=employeeSchema1;