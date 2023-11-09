import { Request, Response } from 'express';
import CategoryModel from '../../models/admin/categorymodel.model';


export default class caegoryusergetbyidController {
  getCATegory(req: Request, res: Response) {
    CategoryModel.find()
      .then((CATLIST) => {
        res.status(200).json(CATLIST);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Server error' });
      });
  }
}
