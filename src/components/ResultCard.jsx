// components/ResultCard.jsx
// Affiche le résultat de la prédiction

import './ResultCard.css'

const GENDER_LABELS = {
  male: 'Masculin',
  female: 'Féminin',
}

const BAR_COLORS = {
  male: '#378ADD',
  female: '#D4537E',
}

export default function ResultCard({ result, name }) {
  const { gender, probability, count } = result
  const pct = probability ? Math.round(probability * 100) : 0
  const displayName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1)

  return (
    <div className="result-card">
      <p className="result-name">{displayName}</p>

      <span className={`badge badge-${gender || 'unknown'}`}>
        {gender ? GENDER_LABELS[gender] : 'Inconnu'}
      </span>

      <p className="result-detail">
        {gender
          ? `Genre probable : ${GENDER_LABELS[gender].toLowerCase()} avec ${pct}% de probabilité`
          : 'Ce prénom est introuvable dans la base de données.'}
      </p>

      <div className="bar-wrap">
        <div
          className="bar-fill"
          style={{
            width: `${pct}%`,
            background: gender ? BAR_COLORS[gender] : '#B4B2A9',
          }}
        />
      </div>

      <div className="bar-label">
        <span>Probabilité : {gender ? `${pct}%` : 'N/A'}</span>
        {count && <span>{count.toLocaleString()} noms analysés</span>}
      </div>
    </div>
  )
}
