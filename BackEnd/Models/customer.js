const mongoose=require('mongoose');
const schema=mongoose.Schema;

const CustomerShema = new schema({


    firstName:{
        type:String,
        required: true
    },

    lastName:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },

    phone:{
        type:String,
        required: true
    },

    address:{
        type:String,
        required: true
    },

    password:{
        type:String,
        required: true
    }


});

const CustomerShema1=new mongoose.model('customerdetail',CustomerShema);
module.exports=CustomerShema1;