const mongoose=require('mongoose');
const schema=mongoose.Schema;

const eventSchema=new schema({

    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    startDateTime: {
        type: String,
        required: true
    },
    endDateTime: {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    organizer : {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
    }
})

const eventShema1=new mongoose.model('eventDetail',eventSchema);
module.exports=eventShema1;