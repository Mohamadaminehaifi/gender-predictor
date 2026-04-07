// components/GenderPredictor.jsx
// Composant principal — saisie + affichage du résultat

import { useState } from 'react'
import { useGender } from '../hooks/useGender'
import ResultCard from './ResultCard'
import './GenderPredictor.css'

export default function GenderPredictor() {
  const [name, setName] = useState('')
  const { result, loading, error, predict, reset } = useGender()

  const handlePredict = () => predict(name)

  const handleChange = (e) => {
    setName(e.target.value)
    reset()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handlePredict()
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Prédicteur de genre</h1>
        <p className="subtitle">
          Saisissez un prénom pour prédire le genre probable via l'API Genderize.io
        </p>

        <div className="input-row">
          <input
            type="text"
            placeholder="Ex: Alex, Marie, Jordan..."
            value={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handlePredict} disabled={loading}>
            {loading ? '...' : 'Analyser ↗'}
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {result && <ResultCard result={result} name={name} />}
      </div>
    </div>
  )
}
