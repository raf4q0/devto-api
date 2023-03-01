import * as express from 'express';
import PostController from '../controllers/post.controller'

export default express
  .Router()
  .get('/', PostController.getAllUsers)
  .post('/', PostController.createUser)
  .get('/:id', PostController.getUser)
  .patch('/:id', PostController.updateUser)
  .delete('/:id', PostController.deleteUser)
  