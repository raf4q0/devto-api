import bcrypt from 'bcrypt'
import logger from '../../middlewares/logger'
import User from '../models/user.model'

export class RegisterController {
  async createAccount(request, response, next) {
    try {
      const { name, email, password, role } = request.body
      const hashedPassword = await bcrypt.hash(password, 10) // SaltRound
      const user = new User({
        name,
        email,
        role,
        password: hashedPassword
      })

      const createdUser = await user.save()

      response.status(201).send(createdUser)
    } catch (error) {
      logger.error(error)
      next(error)
    }
    
  }
}

export default new RegisterController()