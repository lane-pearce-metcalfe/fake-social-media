import { Router } from 'express'

import * as db from '../db/userProfile.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  try {
    const posts = await db.getUserProfile(id)

    res.json(posts)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Something went wrong grabbing user profile' })
  }
})

export default router
