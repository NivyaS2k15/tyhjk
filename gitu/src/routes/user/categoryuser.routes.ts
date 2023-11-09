import { Router } from 'express';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware'
import  caegoryusergetbyidController from '../../controllers/user/getallcategrories.controller';
import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';
 import getOneSpecificController from '../../controllers/user/getonecategories.controller';
 
class categoryuserroutes {
  router = Router();

 categoriesviewalluser = new caegoryusergetbyidController();
 oneCategory =new getOneSpecificController();
   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.get('/usercategory',userAuthenticateMiddleware,uploadMiddleware.array("image",10),this.categoriesviewalluser.getCATegory);
    this.router.get('/:id', userAuthenticateMiddleware,uploadMiddleware.array("image",10), this.oneCategory.getbyidCategory);

  }
}
 
export default new categoryuserroutes().router;