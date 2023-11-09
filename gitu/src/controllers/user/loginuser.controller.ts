import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import userloginModel from '../../models/user/loginuser.model';
import jwt from 'jsonwebtoken';
import signup from '../../models/user/signup.model';
 
 
export default class UserSignIn {
  async login(req: Request, res: Response) {
    const {username, email, password } = req.body;
 
    try {
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username,Email and password are required' });
      }
 
      const user = await signup.findOne({ email });
     
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
 
      // const passwordMatch = await bcrypt.compare(password, user.password);
 
      // if (!passwordMatch) {
      //   return res.status(401).json({ message: 'Invalid password' });
      // }
 
      // Store login details in the new collection (LoginModel)
      const hashedPassword = await bcrypt.hash(password, 10);
     
      // Generate a JWT token with user information
 
      const token = jwt.sign({ email:user.email ,userId:user.id}, '#gdey78', { expiresIn: '3000h' });
      res.status(201).json({ token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}