import * as express from 'express';
import UserController from '../controllers/user.controller'
import AuthMiddleware from '../../middlewares/auth';

export default express
  .Router()
  .get('/', AuthMiddleware.auth, UserController.getAllUsers)
  .post('/', UserController.createUser)
  .get('/:id', UserController.getUser)
  .patch('/:id', UserController.updateUser)
  .delete('/:id', UserController.deleteUser)
  