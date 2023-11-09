import { Router } from 'express';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import  CategoryController from '../../controllers/admin/categorycontroller.controller';
import categoryDelete from '../../controllers/admin/categorydelete.controller';
 
 
class categoryRoutes {
  router = Router();
 categorycreatecontroller= new CategoryController();
 categorydeletecontroller = new categoryDelete();
   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post('/',adminAuthenticateMiddleware, this.categorycreatecontroller.addCategory);
    this.router.delete('/:id', adminAuthenticateMiddleware,this.categorydeletecontroller.catdelete);
   
  }
}
 
export default new categoryRoutes().router;