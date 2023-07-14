import { Router } from 'express'
import {
  findOffersDetails,
  createOfferDetails,
  deleteOfferDetails,
  updateOfferDetails
} from '../controllers/OffersDetails.js'

const router = Router()

router.get('/', findOffersDetails)
router.post('/', createOfferDetails)
router.put('/:id', updateOfferDetails)
router.delete('/:id', deleteOfferDetails)

export default router
