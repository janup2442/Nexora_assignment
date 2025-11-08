import mongoose from "mongoose";
import Product from "../models/productModel.js";
// import Cart from "../models/cartModel.js";
import User from "../models/userModel.js";

// assuming testUser for now
const testUserId = "690e44483bb7a7ec9a75fcc4";
const addCartItem = async (req,res)=>{
    const {productId,qty} = req.body;

    try {
        const isProductExist = await Product.findById(productId);
        if(isProductExist){
            //checking here if Product is already exists in users cart
            console.log("yes product exists");
            
            const isUserExists =await User.findById(testUserId)
            if(isUserExists){
                const isProductAdded = isUserExists.cart.filter(item=>item.productId == productId)
                if(isProductAdded?.length == 0){
                    isUserExists.cart.push({
                        productId:productId,
                        qty:qty
                    })

                    await isUserExists.save();
                    res.status(201).json({
                        message:"Product added to cart"
                    })
                }else{
                    res.status(200).json({
                        message:"Product already added to cart"
                    })
                }
            }
        }else{
            res.status(404).json({
                message:"Product not found"
            })
        }
    } catch (error) {
        console.log({
            message:"Error occured",
            error:error.message
        });
        res.status(500).json({
            message:"Internal Server error"
        })
        
    }
}

const getCartItems = async (req,res) => {
    try {
        const result = await User.findById(testUserId).populate('cart.productId');
        if(result){
            res.status(200).json(result.cart)
        }else{
            res.status(404).json({
                message:"Not found. Error Occured"
            })
        }
        
    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

const deleteCartItem = async (req,res) => {
    
    try {
        const {id} = req.params;

        const result  = await User.findById(testUserId)
        result.cart = result.cart.filter(item=>item.productId != id)
        result.save();
        res.status(201).json({
            message:"Product deleted from cart"
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:"Internal server error"
        })
        
    }
}





export {
    addCartItem,
    getCartItems,
    deleteCartItem
}