import { Schema, model } from 'mongoose'

const OFFERS_PRODUCT_TYPES = new Schema(
  {
    id_offer: {
      type: Schema.Types.ObjectId,
      ref: 'OFFERS',
      required: true
    },
    id_product_type: {
      type: Schema.Types.ObjectId,
      ref: 'PRODUCTS_TYPES',
      required: true
    }
  },
  { timestamps: true }
)
OFFERS_PRODUCT_TYPES.methods.toJSON = function () {
  const { __v, ...offersProductTypes } = this.toObject()
  return offersProductTypes
}
export default model('OFFERS_PRODUCT_TYPES', OFFERS_PRODUCT_TYPES)
