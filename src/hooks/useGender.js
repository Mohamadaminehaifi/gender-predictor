// hooks/useGender.js
// Hook personnalisé pour gérer l'appel API et l'état

import { useState } from 'react'
import { fetchGender } from '../services/genderApi'

export function useGender() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const predict = async (name) => {
    if (!name.trim()) return

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const data = await fetchGender(name.trim())
      setResult(data)
    } catch (e) {
      setError("Erreur : impossible de contacter l'API. Vérifiez votre connexion.")
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setResult(null)
    setError('')
  }

  return { result, loading, error, predict, reset }
}
