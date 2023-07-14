import { Router } from 'express'
import {
  findOffers,
  createOffer,
  deleteOffer,
  updateOffer
} from '../controllers/Offers.js'

const router = Router()

router.get('/', findOffers)
router.post('/', createOffer)
router.put('/:id', updateOffer)
router.delete('/:id', deleteOffer)

export default router
