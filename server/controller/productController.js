import Product from "../models/productModel.js";

const getAllProducts = async (req, res)=>{
    try {
        const result = await Product.find();
        if(result){
            console.log("responce sent");
            
            res.status(200).json(result);
        }
    } catch (error) {
        console.log({
            message:error.message
        });
        res.status(400).end();
    }
}


export {
    getAllProducts
}