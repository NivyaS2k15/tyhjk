import { Request, Response } from 'express';
import  Product, { ProductDocument } from '../../models/admin/productmodel.model';
 
export default class SearchController {
  public async searchTasks(req: Request, res: Response): Promise<void> {
    try {
      const query = req.query.q as string; // Get the search query from the request
 
      // Use a regular expression to find tasks with names similar to the query (case-insensitive)
      const results:ProductDocument[] = await Product.find({
        title: { $regex: query, $options: 'i' },
       
      });
      


    

      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}