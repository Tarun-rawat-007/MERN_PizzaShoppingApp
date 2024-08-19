import express, { request, response }  from 'express';
import { addNewProd, viewAll } from '../controllers/product-controller.js';

export const productRoutes=express.Router();

productRoutes.get('/view-products',viewAll);
productRoutes.post('/add-new-product',addNewProd);
