import { Router } from 'express'
import {
  findProductTypes,
  createProductTypes,
  updateProductTypes,
  deleteProductTypes
} from '../controllers/ProductTypes.js'

const router = Router()

router.get('/', findProductTypes)
router.post('/', createProductTypes)
router.put('/:id', updateProductTypes)
router.delete('/:id', deleteProductTypes)

export default router
