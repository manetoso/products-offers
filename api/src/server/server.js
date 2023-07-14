import cors from 'cors'
import express from 'express'
import 'dotenv/config'

import databaseConnect from '../database/DatabaseConfig.js'

import {
  Offers,
  OffersDetails,
  OffersProductsTypes,
  PoductTypesRoutes,
  Poducts
} from '../routes/index.routes.js'

const app = express()
const port = process.env.PORT
const routesArray = [
  {
    path: '/api/offers',
    route: Offers
  },
  {
    path: '/api/offers-details',
    route: OffersDetails
  },
  {
    path: '/api/offers-products-types',
    route: OffersProductsTypes
  },
  {
    path: '/api/product-types',
    route: PoductTypesRoutes
  },
  {
    path: '/api/products',
    route: Poducts
  }
]

async function conectDB() {
  await databaseConnect()
}

function middlewares() {
  // CORS
  app.use(cors())
  // Read and Parse of request from body
  app.use(express.json())
}

function routes() {
  routesArray.forEach((route) => {
    app.use(route.path, route.route)
  })
}

export function listen() {
  app.listen(port, () => {
    console.log(`App Listening at http://localhost:${port}`)
  })
}

conectDB()

middlewares()

routes()
