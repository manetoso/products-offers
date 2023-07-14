import { request, response } from 'express'
import { OFFERTS_PRODUCT_TYPES } from '../models/index.js'
import { serverErrorMessage, serverOkMessage } from './ControllerGlobal.js'

export const findOfferProductsTypes = async (req = request, res = response) => {
  try {
    const actionDB = await OFFERTS_PRODUCT_TYPES.find()
      .populate({
        path: 'id_offer',
        select: {
          name: 1,
          is_active: 1,
          type: 1,
          priority: 1
        }
      })
      .populate({
        path: 'id_product_type',
        select: 'name'
      })
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const findActiveOfferProductsTypes = async (
  req = request,
  res = response
) => {
  try {
    const actionDB = await OFFERTS_PRODUCT_TYPES.find()
      .populate({
        path: 'id_offer',
        select: {
          name: 1,
          is_active: 1,
          type: 1,
          priority: 1
        },
        match: { is_active: true }
      })
      .populate({
        path: 'id_product_type',
        select: 'name'
      })

    const offers = actionDB.filter((offer) => offer.id_offer !== null)
    return serverOkMessage(res, offers)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const createOfferProductsTypes = async (
  req = request,
  res = response
) => {
  try {
    const { id_offer, id_product_type } = req.body
    const offer = { id_offer, id_product_type }
    const actionDB = await OFFERTS_PRODUCT_TYPES.create(offer)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const updateOfferProductsTypes = async (
  req = request,
  res = response
) => {
  try {
    const id = req.params.id
    const data = req.body
    const actionDB = await OFFERTS_PRODUCT_TYPES.findByIdAndUpdate(id, data, {
      new: true
    })
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const deleteOfferProductsTypes = async (
  req = request,
  res = response
) => {
  try {
    const id = req.params.id
    const actionDB = await OFFERTS_PRODUCT_TYPES.findByIdAndDelete(id)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}
