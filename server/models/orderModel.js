import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default:'690e44483bb7a7ec9a75fcc4'
    },
    total: {
        type: Number
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    email:{
        type:String
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            },
            qty: {
                type: Number,
                default: 1
            }
        }
    ]
},{
    timestamps:true
})


const Order = mongoose.model('order',orderSchema)
export default Order