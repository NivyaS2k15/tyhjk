import { Request, Response } from 'express';
import Product from '../../models/admin/productmodel.model';

export default class ProductveiwController {
  getProducts(req: Request, res: Response) {
    Product.find()
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Server error' });
      });
  }
}
