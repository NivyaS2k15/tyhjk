import { Request, Response } from 'express';
import CategoryModel from '../../models/admin/categorymodel.model';
import Cart from '../../models/user/cart.model';
import Product from '../../models/admin/productmodel.model';






export default class cartusergetbyidController  {

    async findAll(req: any, res: Response) {
        const cartData = await Cart.find({}).populate(
        {
          path: 'products.productId',
          model: Product,
        }
        )
        
        res.send(cartData);
        console.log(cartData);
      } 
}

