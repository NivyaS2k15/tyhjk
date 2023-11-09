
import Product from '../../models/admin/productmodel.model';
import { Request,Response } from "express";
 
export default class productDeletefn {
        async prodelete(req: Request, res: Response) {
            try {
              const { id } = req.params; // Get the ID from the request params
       
              const deletedpro = await Product.findByIdAndUpdate(id, { deleted: true }, { new: true });
       
              if (!deletedpro) {
                return res.status(404).json({ message: 'product not found' });
              }
       
              res.status(200).json({
                message: 'product soft-deleted successfully',
                deletedpro,
                
                
              });
            } catch (err) {
              res.status(500).json({
                message: 'Internal Server Error',
                error: 'error!!!'
              });
            }
          }
    }