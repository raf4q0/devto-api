import * as express from 'express';
import CommentController from '../controllers/comment.controller'

export default express
  .Router()
  .get('/', CommentController.getAllComments)
  .post('/', CommentController.createComment)
  .get('/:id', CommentController.getComment)
  .patch('/:id', CommentController.updateComment)
  .delete('/:id', CommentController.deleteComment)