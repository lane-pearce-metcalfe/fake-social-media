import { Router } from 'express'

import * as db from '../db/users.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  try {
    const user = await db.getUserData(id)

    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong grabbing user data' })
  }
})

export default router
