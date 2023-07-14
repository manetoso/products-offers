import { request, response } from 'express'
import { PRODUCTS } from '../models/index.js'
import { serverErrorMessage, serverOkMessage } from './ControllerGlobal.js'

export const findProducts = async (req = request, res = response) => {
  try {
    const actionDB = await PRODUCTS.find().populate({
      path: 'id_product_type',
      select: 'name'
    })
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const createProduct = async (req = request, res = response) => {
  try {
    const { name, unit_price, id_product_type } = req.body
    const product = { name, unit_price, id_product_type }
    const actionDB = await PRODUCTS.create(product)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const updateProduct = async (req = request, res = response) => {
  try {
    const id = req.params.id
    const data = req.body
    const actionDB = await PRODUCTS.findByIdAndUpdate(id, data, {
      new: true
    })
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}

export const deleteProduct = async (req = request, res = response) => {
  try {
    const id = req.params.id
    const actionDB = await PRODUCTS.findByIdAndDelete(id)
    return serverOkMessage(res, actionDB)
  } catch (error) {
    return serverErrorMessage(res)
  }
}
