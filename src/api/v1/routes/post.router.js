import * as express from 'express';
import PostController from '../controllers/post.controller'

export default express
  .Router()
  .get('/', PostController.getAllPosts)
  .post('/', PostController.createPost)
  .get('/:id', PostController.getPost)
  .patch('/:id', PostController.updatePost)
  .delete('/:id', PostController.deletePost)
  