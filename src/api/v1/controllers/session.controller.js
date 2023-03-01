import bcrypt from 'bcrypt'
import User from '../models/User'
import JwtServices from '../services/JwtServices'


export class SessionController {
  login(request, response) {
    response.json({ message: 'login Controller' })
  }

  logout(request, response) {
    response.json({ message: 'Logout Controller' })
  }
}

export default new SessionController()