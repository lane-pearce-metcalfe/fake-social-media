import { Router } from 'express'

import * as db from '../db/comments.ts'

const router = Router()

router.get('/post/:id', async (req, res) => {
  const id = Number(req.params.id)

  try {
    const comments = await db.getCommentsOnPost(id)

    res.json(comments)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Something went wrong grabbing comments from post' })
  }
})

export default router
