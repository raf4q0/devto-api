import * as express from 'express';
import PostController from '../controllers/user.controller'

export default express
  .Router()
  .get('/', UserController.getAllUsers)
  .post('/', UserController.createUser)
  .get('/:id', UserController.getUser)
  .patch('/:id', UserController.updateUser)
  .delete('/:id', UserController.deleteUser)
  