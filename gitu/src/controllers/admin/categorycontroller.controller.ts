import { Request, Response } from 'express';
import CategoryModel from '../../models/admin/categorymodel.model';

export default class CategoryController {
 
    async addCategory(req: Request, res: Response) {
        try {
          const { categoryname } = req.body;
     
         const createcat = await CategoryModel.create({
            categoryname
          });
     
          res.status(201).json({
            message: "catorgy  Entered Successfully",
            category: createcat,
          });
        } catch (err) {
          console.error('Error creating category:', err);
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
  
}
