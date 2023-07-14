import { Router } from 'express'
import {
  findProducts,
  createProduct,
  deleteProduct,
  updateProduct
} from '../controllers/Products.js'

const router = Router()

router.get('/', findProducts)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router
