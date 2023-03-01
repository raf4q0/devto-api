import logger from './logger'
import JwtServices from '../services/jwt.services';

export class AuthErrorHandler extends Error {
  constructor(status, msg)  {
    super();
    this.status = status;
    this.message = msg;
  }

  static wrongCredentials(message = 'Wrong credentials, check your email/password') {
    return new AuthErrorHandler(401, message); //401 Wrong Credentials
  }

  static unAuthorized(message = 'Unauthorized, check your authorization token') {
      return new AuthErrorHandler(403, message); //403 Unauthorized
  }
}

export class AuthMiddleware {

  async auth(request, response, next) {
    //Step 1 - Get authorization header from request
    let authHeader = request.headers.authorization;

    // Step 2: If header not exist
    if (!authHeader) {
      return next(AuthErrorHandler.unAuthorized())
    }

    //Step 3: If header exist split bearer and token
    // Apply middleman auth in 
    const token = authHeader.split(' ')[1];

    // Step 4: Verify token
    try {
        const { _id, role } = await JwtServices.verify(token);
        const user = { _id, role }
        request.user = user; 
        // Setting user on req, so we can valid token user in usersController
        next();

    } catch(err) {
      return next(AuthErrorHandler.unAuthorized())
    }
  }
}

export default new AuthMiddleware()