import { Request, Response } from 'express';
import Product from '../../models/admin/productmodel.model';


class ProductupdateController {
    async updateProduct(req: Request, res: Response) {
        try {
            const product = await Product.findById(req.params.id);

            if (!product) {
                res.status(400);
                throw new Error('Product not found');
            }

        
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json({
                message: "Product updated Successfully",
                productlist: updatedProduct,
              });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }
}

export default ProductupdateController;
