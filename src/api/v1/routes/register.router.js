import * as express from 'express';
import RegisterController from '../controllers/register.controller'

export default express
  .Router()
  .post('/', RegisterController.createAccount)
  