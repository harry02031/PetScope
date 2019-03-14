import { Router } from 'express'

import users from './users'
import lost from './lost'
import main from './main'
import shelters from './shelters'

const router = Router()

router.use(users)
router.use(lost)
router.use(main)
router.use(shelters)

export default router
