interface MapAreaProps {
  isCompact: boolean
}

export function MapArea({ isCompact }: MapAreaProps) {
  return (
    <div className={`map-area ${isCompact ? 'compact' : 'full'}`}>
      <div className="map-placeholder">
        <div className="map-label">Oregon County Map</div>
        <div className="map-subtitle">(Interactive map placeholder)</div>
      </div>
    </div>
  )
}
