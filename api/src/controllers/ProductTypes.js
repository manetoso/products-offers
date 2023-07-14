import { request, response } from 'express'
import { PRODUCTS_TYPES } from '../models/index.js'
import { serverErrorMessage, serverOkMessage } from './ControllerGlobal.js'

export const findProductTypes = async (req = request, res = response) => {
  try {
    const actionDB = await PRODUCTS_TYPES.find()
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const createProductTypes = async (req = request, res = response) => {
  try {
    const { name } = req.body
    const productType = { name }
    const actionDB = await PRODUCTS_TYPES.create(productType)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const updateProductTypes = async (req = request, res = response) => {
  try {
    const id = req.params.id
    const data = req.body
    const actionDB = await PRODUCTS_TYPES.findByIdAndUpdate(id, data, {
      new: true
    })
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const deleteProductTypes = async (req = request, res = response) => {
  try {
    const id = req.params.id
    const actionDB = await PRODUCTS_TYPES.findByIdAndDelete(id)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}
