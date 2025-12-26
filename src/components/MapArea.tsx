import { OregonMap } from './OregonMap'

interface MapAreaProps {
  isCompact: boolean
  selectedCounty: string | null
  onSelectCounty: (countyName: string) => void
}

export function MapArea({ isCompact, selectedCounty, onSelectCounty }: MapAreaProps) {
  return (
    <div className={`map-area ${isCompact ? 'compact' : 'full'}`}>
      <OregonMap
        selectedCounty={selectedCounty}
        onSelectCounty={onSelectCounty}
      />
    </div>
  )
}
