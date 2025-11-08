

import express from 'express'
import productHandler from './product.js';
import cartHandler from './cart.js';
import checkOutHandler from './checkout.js';

const mainRouter = express.Router();

mainRouter.use('/products',productHandler);
mainRouter.use('/cart',cartHandler);
mainRouter.use('/checkout',checkOutHandler)
// mainRouter.use('/',)


export default mainRouter