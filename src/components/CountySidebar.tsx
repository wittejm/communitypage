import { useRef, useEffect } from 'react'
import { oregonCounties } from '../data/counties'

interface CountySidebarProps {
  selectedCounty: string | null
  hoveredCounty: string | null
  onSelectCounty: (countyName: string) => void
}

export function CountySidebar({ selectedCounty, hoveredCounty, onSelectCounty }: CountySidebarProps) {
  const hoveredRef = useRef<HTMLLIElement>(null)

  // Auto-scroll to hovered county
  useEffect(() => {
    if (hoveredCounty && hoveredRef.current) {
      hoveredRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }, [hoveredCounty])

  const handleCountyClick = (countyName: string) => {
    // Toggle: if clicking the already selected county, deselect it
    if (selectedCounty === countyName) {
      onSelectCounty('')
    } else {
      onSelectCounty(countyName)
    }
  }

  const getClassName = (countyName: string) => {
    const classes = []
    if (selectedCounty === countyName) classes.push('selected')
    if (hoveredCounty === countyName) classes.push('hovered')
    return classes.join(' ')
  }

  return (
    <div className="county-sidebar">
      <h2>Oregon Counties</h2>
      <ul className="county-list">
        {oregonCounties.map((county) => (
          <li
            key={county.name}
            ref={hoveredCounty === county.name ? hoveredRef : null}
            className={getClassName(county.name)}
            onClick={() => handleCountyClick(county.name)}
          >
            {county.name} <span className="post-count">({county.posts.length})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
