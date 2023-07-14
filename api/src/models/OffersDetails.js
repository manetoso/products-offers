import { Schema, model } from 'mongoose'

const OFFERS_DETAILS = new Schema(
  {
    minimum_quantity: {
      type: Number,
      default: 2
    },
    maximum_quantity: {
      type: Number,
      default: 1
    },
    discount: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      required: true
    },
    id_offer: {
      type: Schema.Types.ObjectId,
      ref: 'OFFERS',
      required: true
    },
    id_free_product: {
      type: Schema.Types.ObjectId,
      ref: 'PRODUCTS',
      null: true
    },
  },
  { timestamps: true }
)
OFFERS_DETAILS.methods.toJSON = function () {
  const { __v, ...offersDetails } = this.toObject()
  return offersDetails
}
export default model('OFFERS_DETAILS', OFFERS_DETAILS)
