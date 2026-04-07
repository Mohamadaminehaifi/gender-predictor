// services/genderApi.js
// Appel à l'API Genderize.io

const BASE_URL = 'https://api.genderize.io'

export async function fetchGender(name) {
  const response = await fetch(`${BASE_URL}?name=${encodeURIComponent(name)}`)

  if (!response.ok) {
    throw new Error('Erreur lors de la requête API')
  }

  const data = await response.json()
  return data
}
