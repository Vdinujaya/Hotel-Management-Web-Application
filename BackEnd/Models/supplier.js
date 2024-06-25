const mongoose=require('mongoose');
const schema=mongoose.Schema;

const supplierSchema=new schema({

    name : {
        type: String,
        unique: true 
    },
    contactPerson : {
        type: String,
    },
    email : {
        type: String,
        unique: true
    },
    contactNo: {
        type: String,
    },
    address : {
        type: String,
    }
})

const supplierSchema1=new mongoose.model('supplierDetail',supplierSchema);
module.exports=supplierSchema1;