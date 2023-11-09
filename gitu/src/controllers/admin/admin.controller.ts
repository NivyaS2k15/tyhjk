import { Request, Response } from "express";
import adminModel from '../../models/admin/adminmodel.model';

export default class admin {
        async findAll(req: Request, res: Response) {
              //   try {
              //     const admins = await adminModel.find({}, 'username').exec();
              //     const usernames: string[] = admins.map((admin) => admin.username);
              //     res.send(usernames);
              //   } catch (error) {
              //     console.error('Error fetching admin usernames:', error);
              //     res.status(500).json({ message: 'Internal Server Error' });
              //   }
              // }

              try {
                // Modify the query to include an email constraint
                const admins = await adminModel.find({}, 'username email').exec();
                const adminData = admins.map((admin) => ({ username: admin.username, email: admin.email }));
          
                res.send(adminData);
              } catch (error) {
                console.error('Error fetching admin data:', error);
                res.status(500).json({ message: 'Internal Server Error' });
              }
            }
}
