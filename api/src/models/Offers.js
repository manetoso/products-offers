import { Schema, model } from 'mongoose'

const OFFERS = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    is_active: {
			type: Boolean,
      default: true
		},
    type: {
      type: String,
      default: 'porcentage' // porcentage | global | combo
    },
    priority: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
)
OFFERS.methods.toJSON = function () {
  const { __v, ...offers } = this.toObject()
  return offers
}
export default model('OFFERS', OFFERS)
