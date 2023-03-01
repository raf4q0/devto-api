import userRouter from './user.router'
import postRouter from './post.router'

export default function routes(app) {
  app.use('/api/v1/users', userRouter)
  app.use('/api/v1/posts', postRouter)
}
