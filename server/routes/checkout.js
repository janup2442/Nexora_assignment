import express from 'express'
import Product from '../models/productModel.js';
import { createOrder } from '../controller/orderController.js';
const checkOutHandler = express.Router();


// checkOutHandler.get('/',)
checkOutHandler.post('/',createOrder)



export default checkOutHandler;