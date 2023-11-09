import { Router } from 'express';
import adminSignIn from '../../controllers/admin/login.controller';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import admin from '../../controllers/admin/admin.controller';
//import categorycontroller from '../../controllers/admin/categorycont.controller';

 
 
class SignInRoutes {
  router = Router();
  signInController = new adminSignIn();
   adminViewController= new admin();
   

 
  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post('/', this.signInController.login);
    this.router.get('/usernames',adminAuthenticateMiddleware, this.adminViewController.findAll);
    //this.router.post('/',adminAuthenticateMiddleware, this.CategoryCreatecontroller.create);
  }
}
 
export default new SignInRoutes().router;