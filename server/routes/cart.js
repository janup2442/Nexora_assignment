// importing for cart routes

import express from 'express'
import { addCartItem, deleteCartItem, getCartItems } from '../controller/cartController.js';

const cartHandler = express.Router();

cartHandler.post('/',addCartItem);
cartHandler.get('/',getCartItems);
cartHandler.delete('/:id',deleteCartItem);



export default cartHandler