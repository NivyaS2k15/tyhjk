

import { Request, Response } from 'express';
import Product from '../../models/admin/productmodel.model';

export default class ProductgetbyidController {
    async getbyidProduct(req: Request, res: Response) {
        try {
            const product = await Product.findById(req.params.id);

            if (!product) {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.status(200).json({
                    message: " single Product get  Successfully",
                    getoneproduct: product,
                  });
            }
        } catch (error) {
            res.status(500).json({ error: "error"});
        }
    }
}

