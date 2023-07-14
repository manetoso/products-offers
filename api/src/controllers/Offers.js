import { request, response } from 'express'
import { OFFERTS } from '../models/index.js'
import { serverErrorMessage, serverOkMessage } from './ControllerGlobal.js'

export const findOffers = async (req = request, res = response) => {
  try {
    const actionDB = await OFFERTS.find()
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const createOffer = async (req = request, res = response) => {
  const POSSIBLE_TYPES = ['porcentage', 'global', 'combo']
  try {
    const { name, is_active, type, priority } = req.body
    if (!POSSIBLE_TYPES.includes(type)) {
      return res.status(400).json({
        message: `The type ${type} is not valid, the possible types are: ${POSSIBLE_TYPES.join(
          ', '
        )}`
      })
    }
    const offer = { name, is_active, type, priority }
    const actionDB = await OFFERTS.create(offer)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const updateOffer = async (req = request, res = response) => {
  try {
    const id = req.params.id
    const data = req.body
    const actionDB = await OFFERTS.findByIdAndUpdate(id, data, {
      new: true
    })
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const deleteOffer = async (req = request, res = response) => {
  try {
    const id = req.params.id
    const actionDB = await OFFERTS.findByIdAndDelete(id)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}
