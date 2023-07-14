const API_URL = import.meta.env.VITE_API_BASE_URL

export async function fetchActiveOffers() {
  const response = await fetch(`${API_URL}/offers-products-types/active`)
	const data = await response.json()
	return data.body
}

export async function fetchOffersDetails() {
  const response = await fetch(`${API_URL}/offers-details`)
	const data = await response.json()
	return data.body
}

export async function fetchProducts() {
  const response = await fetch(`${API_URL}/products`)
	const data = await response.json()
	return data.body
}
