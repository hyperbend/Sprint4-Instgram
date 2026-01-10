export function SvgIcon({ name }) {
  if (name === 'home') return <span className="icon">🏠</span>
  if (name === 'search') return <span className="icon">🔎</span>
  if (name === 'explore') return <span className="icon">🧭</span>
  if (name === 'profile') return <span className="icon">👤</span>
  if (name === 'more') return <span className="icon">☰</span>
  return <span className="icon">?</span>
}
