import { OregonMap } from './OregonMap'

interface MapAreaProps {
  isCompact: boolean
  selectedCounty: string | null
  hoveredCounty: string | null
  onSelectCounty: (countyName: string) => void
  onHoverCounty: (countyName: string | null) => void
}

export function MapArea({ isCompact, selectedCounty, hoveredCounty, onSelectCounty, onHoverCounty }: MapAreaProps) {
  return (
    <div className={`map-area ${isCompact ? 'compact' : 'full'}`}>
      {hoveredCounty && (
        <div className="county-hover-label">
          {hoveredCounty} County
        </div>
      )}
      <OregonMap
        selectedCounty={selectedCounty}
        hoveredCounty={hoveredCounty}
        onSelectCounty={onSelectCounty}
        onHoverCounty={onHoverCounty}
      />
    </div>
  )
}
