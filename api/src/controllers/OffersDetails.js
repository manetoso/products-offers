import { request, response } from 'express'
import { OFFERTS_DETAILS } from '../models/index.js'
import { serverErrorMessage, serverOkMessage } from './ControllerGlobal.js'

export const findOffersDetails = async (req = request, res = response) => {
  try {
    const actionDB = await OFFERTS_DETAILS.find()
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const createOfferDetails = async (req = request, res = response) => {
  try {
    const {
      minimum_quantity,
      maximum_quantity,
      discount,
      description,
      id_offer,
      id_free_product
    } = req.body
    const offer = {
      minimum_quantity,
      maximum_quantity,
      discount,
      description,
      id_offer,
      id_free_product
    }
    const actionDB = await OFFERTS_DETAILS.create(offer)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const updateOfferDetails = async (req = request, res = response) => {
  try {
    const id = req.params.id
    const data = req.body
    const actionDB = await OFFERTS_DETAILS.findByIdAndUpdate(id, data, {
      new: true
    })
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const deleteOfferDetails = async (req = request, res = response) => {
  try {
    const id = req.params.id
    const actionDB = await OFFERTS_DETAILS.findByIdAndDelete(id)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}
