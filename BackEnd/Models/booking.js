const mongoose=require('mongoose');
const schema=mongoose.Schema;

const bookingSchema=new schema({
    roomId: {
        type: String,
        
    },
    roomNo: {
        type: String,
        required: true,
        
    },
    customerId: {
        type: String,
        
    },
    cName: {
        type: String,
        
    },
    cEmail: {
        type: String,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    sReq: {
        type: String,
    },
    boookTime: {
        type: Date,
        default: Date.now
    }
})

const bookingSchema1=new mongoose.model('bookingDetail',bookingSchema);
module.exports=bookingSchema1;