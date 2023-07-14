import { response } from 'express'

/**
 * 
 * @param {response} res
 * @param {object} body
 * @param {number} status
 * @returns {response}
 */
export const serverErrorMessage = (res = response, body = {}, status = 500) => {
  if (body !== {}) {
    return res.status(status).json({
      msg: 'Hubo un error',
      error: body
    })
  } else {
    return res.status(status).json({
      msg: 'Hubo un error'
    })
  }
}

/**
 * 
 * @param {response} res
 * @param {object} body
 * @param {number} status
 * @returns {response}
 */
export const serverOkMessage = (res = response, body = {}, status = 200) => {
  if (body !== {}) {
    return res.status(status).json({
      body
    })
  } else {
    return res.status(status).json({
      ok: true
    })
  }
}