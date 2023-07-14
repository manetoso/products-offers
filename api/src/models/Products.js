import { Schema, model } from 'mongoose'

const PRODUCTS = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    unit_price: {
			type: Number,
		},
		id_product_type: {
			type: Schema.Types.ObjectId,
			ref: 'PRODUCTS_TYPES',
			required: true
		}
  },
  { timestamps: true }
)
PRODUCTS.methods.toJSON = function () {
  const { __v, ...products } = this.toObject()
  return products
}
export default model('PRODUCTS', PRODUCTS)
