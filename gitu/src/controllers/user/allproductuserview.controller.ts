import { Request, Response } from 'express';
import Product from '../../models/admin/productmodel.model';

export default class ProductusergetbyidController {
  // getProducts(req: Request, res: Response) {
  //   Product.find()
  //     .then((products) => {
  //       res.status(200).json(products);
  //     })
  //     .catch((error) => {
  //       res.status(500).json({ error: 'Server error' });
  //     });
  // }
  async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const getProducts = await Product.find();
      res.status(200).json(getProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
