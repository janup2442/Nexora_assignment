import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        default:199,
        require:true
    },
    description:{
        type:String,
        default:"This is a test description, orignal description is not provided"
    },
    category:{
        type:String
    },
    image:{
        type:String,

    },
    rating:{
        rate:{
            type:Number,
            default:4.2
        },
        count:{
            type:Number,
            default:401
        }
    }
},{timestamps:true})



const Product  = mongoose.model('product',productSchema);
export default Product;