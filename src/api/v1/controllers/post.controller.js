
export class PostController {
  getAllPosts(request, response) {
    response.json({ message: 'Get All Users OK' })
  }

  getPost(request, response) {
    response.json({ message: 'Get User OK' })
  }

  createPost(request, response) {
    response.json({ message: 'Create User OK' })
  }

  updatePost(request, response) {
    response.json({ message: 'Update User OK' })
  }

  deletePost(request, response) {
    response.json({ message: 'Delete User OK' })
  }
}

export default new PostController()