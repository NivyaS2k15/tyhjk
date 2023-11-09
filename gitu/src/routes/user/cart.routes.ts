import { Router } from 'express';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware'
import CartController from '../../controllers/user/cart.controller';
import cartusergetbyidController from '../../controllers/user/cartview.contoller';

import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';

 
class CartRoutes {
  router = Router();

 cartget = new CartController();
 cartview =new cartusergetbyidController();

   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post('/',userAuthenticateMiddleware,this.cartget.createCart);
    this.router.get('/viewcart',userAuthenticateMiddleware,this.cartview.findAll)
    //this.router.get('/:id', adminAuthenticateMiddleware,uploadMiddleware.array("image",10), this.productoneview.getbyidProduct);

  }
}
 
export default new CartRoutes().router;