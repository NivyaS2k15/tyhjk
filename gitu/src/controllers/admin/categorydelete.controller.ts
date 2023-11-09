import Express from "express";
import CategoryModel from '../../models/admin/categorymodel.model';
import { Request,Response } from "express";
 
export default class categoryDelete {
        async catdelete(req: Request, res: Response) {
            try {
              const { id } = req.params; // Get the ID from the request params
       
              const deletedcat = await CategoryModel.findByIdAndUpdate(id, { deleted: true }, { new: true });
       
              if (!deletedcat) {
                return res.status(404).json({ message: 'category not found' });
              }
       
              res.status(200).json({
                message: 'category soft-deleted successfully',
                deletedcat,
              });
            } catch (err) {
              res.status(500).json({
                message: 'Internal Server Error',
                error: 'error!!!'
              });
            }
          }
    }