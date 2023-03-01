import userRouter from './user.router'
import postRouter from './post.router'
import registerRouter from './register.router'
import commentRouter from './comment.router'

export default function routes(app) {
  app.use('/api/v1/users', userRouter)
  app.use('/api/v1/posts', postRouter)
  app.use('/api/v1/comments', commentRouter)
  // app.use('/api/v1/signup', registerRouter)
}
