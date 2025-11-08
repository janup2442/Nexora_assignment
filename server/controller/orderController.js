import Order from "../models/orderModel.js";

const testUserId = '690e44483bb7a7ec9a75fcc4'
const createOrder = async (req,res) => {
    try {
        const {total,address,phone,email,items} = req.body

        const newOrder = new Order({
            userId:testUserId,total,address,phone,email,items
        })

        await newOrder.save();
        res.status(201).json({
            message:"New Order Created",
            result:{
                orderId : newOrder._id,
                totalAmount: total,
                date:newOrder.createdAt,
                items:items?.length
            }
        })
        
    } catch (error) {
        console.log(error.message);
        res.end();
    }
}


export {
    createOrder
}