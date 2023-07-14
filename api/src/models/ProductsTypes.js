import { Schema, model } from 'mongoose'

const PRODUCTS_TYPES = new Schema(
  {
    name: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)
PRODUCTS_TYPES.methods.toJSON = function () {
  const { __v, ...productsTypes } = this.toObject()
  return productsTypes
}
export default model('PRODUCTS_TYPES', PRODUCTS_TYPES)
