import userRouter from './user.router'

export default function routes(app) {
  app.use('/api/v1/users', userRouter)
}
