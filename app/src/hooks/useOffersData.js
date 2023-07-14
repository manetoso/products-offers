import { useEffect, useState, useMemo } from 'react'

import {
  fetchActiveOffers,
  fetchOffersDetails,
  fetchProducts
} from '@/services/apiServices'

export function useOffersData() {
  const [selectedItems, setSelectedItems] = useState([])
  const [activeOffers, setActiveOffers] = useState([])
  const [offersDetails, setOffersDetails] = useState([])
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [globalDiscount, setGlobalDiscount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const handleAddItem = (item) => {
    const itemExists = selectedItems.find((i) => i._id === item._id)
    let updatedItem
    if (itemExists) {
      updatedItem = {
        ...itemExists,
        quantity: itemExists.quantity + 1,
        hasDiscount: false
      }
      const itemAfterOffer = searchForAnOffer(updatedItem)
      setSelectedItems(
        selectedItems.map((i) => (i._id === item._id ? itemAfterOffer : i))
      )
      setTotal(total + item.unit_price)
      return
    }
    updatedItem = {
      ...item,
      quantity: 1,
      hasDiscount: false
    }
    const itemAfterOffer = searchForAnOffer(updatedItem)
    // console.log({ itemAfterOffer })
    setSelectedItems([...selectedItems, itemAfterOffer])
    setTotal(total + itemAfterOffer.unit_price)
  }

  const handleRemoveItems = async () => {
    setIsLoading(true)
    setSelectedItems([])
    setTotal(0)
    setDiscount(0)
    const offers = await fetchActiveOffers()
    setActiveOffers(offers)
    setIsLoading(false)
  }

  const searchForAnOffer = (item) => {
    if (item.hasDiscount === true) return item
    const availiableOffers = activeOffers.filter(
      (offer) =>
        offer.id_product_type._id === item.id_product_type._id &&
        offer.id_offer.type !== 'global'
    )
    if (availiableOffers.length > 0) {
      availiableOffers.sort((a, b) => a.id_offer.priority - b.id_offer.priority)
      availiableOffers.forEach((activeOffer) => {
        if (item.hasDiscount === true) return item
        activeOffer = {
          ...activeOffer,
          details: offersDetails.filter(
            (item) => item.id_offer === activeOffer.id_offer._id
          )[0]
        }
        const possibleProducts = [...selectedItems, item]
        const productsAvailables = possibleProducts.filter(
          (item) =>
            item.id_product_type._id === activeOffer.id_product_type._id &&
            item.hasDiscount === false
        )
        if (item.quantity >= activeOffer.details.minimum_quantity) {
          if (activeOffer.id_offer.type === 'porcentage') {
            const calculatedTotal = item.unit_price * item.quantity
            // console.log({ calculatedTotal, discount: activeOffer.details.discount });
            const discount =
              (calculatedTotal * activeOffer.details.discount) / 100
            item.hasDiscount = true
            item.discount = discount
            setDiscount((oldValue) => oldValue + discount)
            if (activeOffer.details.maximum_quantity === 1) {
              setActiveOffers((oldValue) =>
                oldValue.filter(
                  (offer) => offer.id_offer._id !== activeOffer.id_offer._id
                )
              )
            } else {
              setActiveOffers((oldValue) =>
                oldValue.map((offer) => {
                  if (offer.id_offer._id === activeOffer.id_offer._id) {
                    offer.details.maximum_quantity =
                      offer.details.maximum_quantity - 1
                  }
                  return offer
                })
              )
            }
          }
          if (activeOffer.id_offer.type === 'combo') {
            if (activeOffer.details.id_free_product !== null) {
              let freeProduct = products.find(
                (i) => i._id === activeOffer.details.id_free_product
              )
              freeProduct = {
                ...freeProduct,
                quantity: 1,
                hasDiscount: true,
                discount: freeProduct.unit_price
              }
              selectedItems.push(freeProduct)
              return item
            }
            const discount = activeOffer.details.discount * item.unit_price
            // console.log({ discount })
            item.hasDiscount = true
            item.discount = discount
            setDiscount((oldValue) => oldValue + discount)
            if (activeOffer.details.maximum_quantity === 1) {
              setActiveOffers((oldValue) =>
                oldValue.filter(
                  (offer) => offer.id_offer._id !== activeOffer.id_offer._id
                )
              )
            }
          }
        }
        if (item.discount !== undefined) return item

        return item
      })
    }
    return item
  }

  const calculateGlobalOffers = () => {
    const availiableOffers = activeOffers.filter(
      (offer) => offer.id_offer.type === 'global'
    )
    availiableOffers.forEach((activeOffer) => {
      activeOffer = {
        ...activeOffer,
        details: offersDetails.filter(
          (item) => item.id_offer === activeOffer.id_offer._id
        )[0]
      }
      const calculatedTotal = total
      if (calculatedTotal >= activeOffer.details.minimum_quantity) {
        const times = Math.floor(
          calculatedTotal / activeOffer.details.minimum_quantity
        )
        const discount = times * activeOffer.details.discount
        setGlobalDiscount(discount)
        setDiscount((oldValue) => oldValue - globalDiscount + discount)
      }
    })
  }

  // FETCHING DATA FROM THE API
  const getData = useMemo(async () => {
    const products = await fetchProducts()
    const offers = await fetchActiveOffers()
    const offersDetails = await fetchOffersDetails()
		setProducts(products)
		setActiveOffers(offers)
		setOffersDetails(offersDetails)
    setIsLoading(false)
  }, [])

  // SETTING THE DATA TO THE STORE
  useEffect(() => {
    getData
  }, [])

  useEffect(() => {
    calculateGlobalOffers()
  }, [total])

  return {
    selectedItems,
    handleAddItem,
    handleRemoveItems,
    total,
    discount,
    products,
		isLoading
  }
}
