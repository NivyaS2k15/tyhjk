import { Router } from 'express';

import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import Userlogin from '../../controllers/user/loginuser.controller';

 
 
class loginuserRoutes {
  router = Router();
  userloginController = new Userlogin();
   
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post('/', this.userloginController.login);
    //this.router.get('/usernames',adminAuthenticateMiddleware, this.adminViewController.findAll);
    //this.router.post('/',adminAuthenticateMiddleware, this.CategoryCreatecontroller.create);
  }
}
 
export default new loginuserRoutes().router;