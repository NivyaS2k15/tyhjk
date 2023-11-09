import { Router } from "express";
import SignupController from "../../controllers/user/signup.controller";
//import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
 
class signupRoutes {
  router = Router();
  controller = new SignupController();
 
  constructor() {
    this.intializeRoutes();
  }
 
  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/", this.controller.create);
    this.router.get('/fetchsignupdetails', this.controller.fetchSignupDetails);
 
  }
}
 
export default new signupRoutes().router;