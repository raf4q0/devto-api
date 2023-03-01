// import UserService from '../../'

export class UserController {
  getAllUsers(request, response) {
    // logica de modelos para hacer queries
    response.json({ message: 'Get All Users OK' })
  }

  getUser(request, response) {
    response.json({ message: 'Get User OK' })
  }

  createUser(request, response) {
    response.json({ message: 'Create User OK' })
  }

  updateUser(request, response) {
    response.json({ message: 'Update User OK' })
  }

  deleteUser(request, response) {
    response.json({ message: 'Delete User OK' })
  }
}

export default new UserController()