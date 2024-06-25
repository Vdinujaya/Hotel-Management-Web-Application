const mongoose=require('mongoose');
const schema=mongoose.Schema;

const adminSchema=new schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

const adminSchema1=new mongoose.model('adminDetail',adminSchema);
module.exports=adminSchema1;