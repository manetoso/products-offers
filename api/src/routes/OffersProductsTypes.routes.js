import { Router } from 'express'
import {
  findOfferProductsTypes,
  findActiveOfferProductsTypes,
  createOfferProductsTypes,
  deleteOfferProductsTypes,
  updateOfferProductsTypes
} from '../controllers/OffersProductsTypes.js'

const router = Router()

router.get('/', findOfferProductsTypes)
router.get('/active', findActiveOfferProductsTypes)
router.post('/', createOfferProductsTypes)
router.put('/:id', updateOfferProductsTypes)
router.delete('/:id', deleteOfferProductsTypes)

export default router
