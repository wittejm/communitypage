import { oregonCounties } from '../data/counties'

interface CountySidebarProps {
  selectedCounty: string | null
  onSelectCounty: (countyName: string) => void
}

export function CountySidebar({ selectedCounty, onSelectCounty }: CountySidebarProps) {
  return (
    <div className="county-sidebar">
      <h2>Oregon Counties</h2>
      <ul className="county-list">
        {oregonCounties.map((county) => (
          <li
            key={county.name}
            className={selectedCounty === county.name ? 'selected' : ''}
            onClick={() => onSelectCounty(county.name)}
          >
            {county.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
