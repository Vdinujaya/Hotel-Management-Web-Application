const mongoose=require('mongoose');
const schema=mongoose.Schema;

const InventoryShema = new schema({


    itemName:{
        type:String,
        required: true
    },

    description:{
        type:String,
        required: true
    },

    Quantity:{
        type:Number,
        required: true
    },

    price:{
        type:Number,
        required: true
    },
    Supplier:{
        type:String,
        required: true
    }


});

const InventoryShema1=new mongoose.model('inventorydetail',InventoryShema);
module.exports=InventoryShema1;