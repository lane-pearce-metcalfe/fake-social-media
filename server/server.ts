import express from 'express'
import * as Path from 'node:path'

import commentRoutes from './routes/comments.ts'
import userRoutes from './routes/user.ts'
import userSettingRoutes from './routes/userSettings.ts'
import userProfileRoutes from './routes/userProfile.ts'
import postsRoutes from './routes/posts.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/comments', commentRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/userSettings', userSettingRoutes)
server.use('/api/v1/userProfile', userProfileRoutes)
server.use('/api/v1/posts', postsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
