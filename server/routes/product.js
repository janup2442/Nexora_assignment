import express from 'express'
import Product from '../models/productModel.js';
import { getAllProducts } from '../controller/productController.js';
const productHandler = express.Router();


productHandler.get('/',getAllProducts)



export default productHandler;