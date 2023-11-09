import express, { Router } from 'express';
import OrderController from '../../controllers/user/order.controller';
import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';




class OrderRoutes {
  router = Router();
 
  orderget = new OrderController();

 
  

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.use(express.json());
    this.router.post('/',userAuthenticateMiddleware,this.orderget.createOrder);

    
  }
}

export default new OrderRoutes().router;
