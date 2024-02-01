import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

productsRouter.get('/');
