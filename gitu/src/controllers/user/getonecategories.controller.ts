

import { Request, Response } from 'express';
import CategoryModel from '../../models/admin/categorymodel.model';

export default class getOneSpecificController {
    async getbyidCategory(req: Request, res: Response) {
        try {
            const category = await CategoryModel.findById(req.params.id);

            if (!category) {
                res.status(404).json({ error: 'category not found' });
            } else {
                res.status(200).json({
                    message: " single category  gets  Successfully",
                    getonecategory: category,
                  });
            }
        } catch (error) {
            res.status(500).json({ error: "error"});
        }
    }
}

