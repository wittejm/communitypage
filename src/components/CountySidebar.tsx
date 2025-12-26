import { oregonCounties } from '../data/counties'

interface CountySidebarProps {
  selectedCounty: string | null
  onSelectCounty: (countyName: string) => void
}

export function CountySidebar({ selectedCounty, onSelectCounty }: CountySidebarProps) {
  const handleCountyClick = (countyName: string) => {
    // Toggle: if clicking the already selected county, deselect it
    if (selectedCounty === countyName) {
      onSelectCounty('')
    } else {
      onSelectCounty(countyName)
    }
  }

  return (
    <div className="county-sidebar">
      <h2>Oregon Counties</h2>
      <ul className="county-list">
        {oregonCounties.map((county) => (
          <li
            key={county.name}
            className={selectedCounty === county.name ? 'selected' : ''}
            onClick={() => handleCountyClick(county.name)}
          >
            {county.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
