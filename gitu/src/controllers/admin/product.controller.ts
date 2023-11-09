import { Request, Response } from 'express';
import Product from '../../models/admin/productmodel.model';

export default class ProductController {
  // Create a product
  setProduct = async (req: Request, res: Response) => {
    try {
      if (!req.body.title || !req.body.price) {
        res.status(400).json({ error: 'Both title and price of the product are required, please, add them both!' });
        return;
      }

      const files = req.files as Express.Multer.File[];

      // Extracting the filename or path to store in the database
      const images = files.map((file: Express.Multer.File) => file.filename);

      // Check if user has rights to create products
      // You can add your rights-checking logic here

      const product = await Product.create({
        title: req.body.title,
        price: req.body.price,
        categories: req.body.categories,
        image: images, // Store the array of image file paths in the database
      });

      res.status(201).json({
        message: "Product Entered Successfully",
        productlist: product,
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
}
