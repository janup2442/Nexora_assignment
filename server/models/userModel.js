import mongoose from "mongoose";
import Product from "./productModel.js";

const cartItem = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    qty:{
        type:Number,
        default:1
    }
})
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cart: [cartItem],
    default: []
}, {
    timestamps: true
})

const User = mongoose.model('user', userSchema);
export default User