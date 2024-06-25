const mongoose=require('mongoose');
const schema=mongoose.Schema;

const roomSchema=new schema({
    
    image: {
        type:String,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    bathCount: {
        type: String,
        required: true
    },
    bedDetails: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    isAvailable: {
        type: String,
        default: true
    }

});

const roomShema1=new mongoose.model('roomDetail',roomSchema);
module.exports=roomShema1;