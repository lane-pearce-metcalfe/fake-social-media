import { Router } from 'express'

import * as db from '../db/userSettings.ts'

const router = Router()

router.get('/theme/:id', async (req, res) => {
  const id = Number(req.params.id)

  try {
    const theme = await db.getUserTheme(id)

    res.json(theme)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Something went wrong grabbing users theme' })
  }
})

export default router
