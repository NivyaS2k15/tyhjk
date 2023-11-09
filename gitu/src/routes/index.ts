import { Application } from "express";
import SignInRoutes from "./admin/login.routes"
import usersignInRoutes from "../routes/user/signup.routes";
import loginuserRoutes from "../routes/user/loginuser.routes";
import categoryRoutes from "../routes/admin/category.routes";
import productroutes from "../routes/admin/product.routes";
import productuserroutes from  "../routes/user/productuser.routes";
import categoryuserroutes from "../routes/user/categoryuser.routes";
import CartRoutes from "./user/cart.routes";
import  OrderRoutes from "./user/order.routes";
import cors from 'cors';
export default class Routes {
  constructor(app: Application) {

   app.use(cors());
    app.use("/api/login", SignInRoutes);
    app.use("/api/user/signup", usersignInRoutes);
    app.use("/api/user/login", loginuserRoutes);
    app.use("/api/category",categoryRoutes);
    app.use("/api/category/delete",categoryRoutes);
    app.use("/api/product", productroutes);
    app.use("/api/user/product", productuserroutes);
    app.use("/api/user/cat", categoryuserroutes);
    app.use("/api/cart", CartRoutes);
    app.use("/api/order", OrderRoutes);
    
    

    

   


  }
}
