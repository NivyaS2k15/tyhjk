import { Router } from 'express';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import ProductController from '../../controllers/admin/product.controller';
import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware'
import ProductveiwController from '../../controllers/admin/productview.controller';
import  ProductupdateController from '../../controllers/admin/productupdate.controller';
import productDeletefn from '../../controllers/admin/productdelete.controller';
 
 
class productroutes {
  router = Router();
 productcreatecontroller= new  ProductController();
 productview = new ProductveiwController();
 productupdate = new  ProductupdateController();
 productdeleted = new  productDeletefn();
   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post('/',adminAuthenticateMiddleware,uploadMiddleware.array("image",10),this.productcreatecontroller.setProduct);
    this.router.get('/viewproduct',adminAuthenticateMiddleware,uploadMiddleware.array("image",10),this.productview.getProducts);
    this.router.put('/:id', adminAuthenticateMiddleware,uploadMiddleware.array("image",10), this.productupdate.updateProduct);
    this.router.delete('/:id', adminAuthenticateMiddleware,uploadMiddleware.array("image",10),this.productdeleted.prodelete);
   
  }
}
 
export default new productroutes().router;