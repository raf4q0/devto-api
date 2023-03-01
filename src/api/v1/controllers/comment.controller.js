

export class CommentController {
  getAllComments(request, response) {
    // logica de modelos para hacer queries
    response.json({ message: 'todos lo commentarios' })
  }

  getComment(request, response) {
    response.json({ message: 'Get Comment OK' })
  }

  createComment(request, response) {
    response.json({ message: 'Create Comment OK' })
  }

  updateComment(request, response) {
    response.json({ message: 'Update Comment OK' })
  }

  deleteComment(request, response) {
    response.json({ message: 'Delete Comment OK' })
  }
}

export default new CommentController()