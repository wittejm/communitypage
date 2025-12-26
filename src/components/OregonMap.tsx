interface OregonMapProps {
  selectedCounty: string | null
  onSelectCounty: (countyName: string) => void
}

export function OregonMap({ selectedCounty, onSelectCounty }: OregonMapProps) {
  // This is a PLACEHOLDER structure showing how the real SVG will work
  // Replace the <svg> content below with the actual Oregon county paths

  const handleCountyClick = (countyName: string) => {
    onSelectCounty(countyName)
  }

  return (
    <svg
      viewBox="0 0 800 600"
      className="oregon-map"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*
        INSTRUCTIONS:
        1. Download Oregon county SVG from one of these sources:
           - https://commons.wikimedia.org/wiki/Category:SVG_maps_of_Oregon
           - https://mapsvg.com/maps/usa-or
           - https://freevectormaps.com/united-states/oregon

        2. Open the SVG file in a text editor

        3. Find the <path> elements (one for each county)

        4. Replace this example path structure below with the real paths

        5. Make sure each path has an id matching the county name

        Example structure (replace with real paths):
      */}

      {/* Example county paths - REPLACE WITH REAL SVG PATHS */}
      <path
        id="multnomah"
        d="M 300,200 L 350,200 L 350,250 L 300,250 Z"
        className={`county-path ${selectedCounty === 'Multnomah' ? 'selected' : ''}`}
        onClick={() => handleCountyClick('Multnomah')}
      />
      <path
        id="clackamas"
        d="M 350,200 L 400,200 L 400,250 L 350,250 Z"
        className={`county-path ${selectedCounty === 'Clackamas' ? 'selected' : ''}`}
        onClick={() => handleCountyClick('Clackamas')}
      />
      <path
        id="washington"
        d="M 250,200 L 300,200 L 300,250 L 250,250 Z"
        className={`county-path ${selectedCounty === 'Washington' ? 'selected' : ''}`}
        onClick={() => handleCountyClick('Washington')}
      />

      {/*
        TODO: Add all 36 Oregon counties as path elements
        Each county path should have:
        - id="countyname" (lowercase, no spaces)
        - className with conditional 'selected' class
        - onClick handler

        You can also generate these programmatically if the SVG has
        consistent naming, but manual is often easier for ensuring
        correct county name matching.
      */}

      {/* Placeholder text - remove when real paths are added */}
      <text x="400" y="300" textAnchor="middle" fill="#666" fontSize="20">
        Replace with actual Oregon county SVG paths
      </text>
      <text x="400" y="330" textAnchor="middle" fill="#666" fontSize="14">
        See MAP_IMPLEMENTATION_GUIDE.md for instructions
      </text>
    </svg>
  )
}

/*
  ALTERNATIVE IMPLEMENTATION using mapping:

  If your SVG has all paths in an array, you can map over them:

  const countyPaths = [
    { name: 'Multnomah', path: 'M 300,200 L 350,200...' },
    { name: 'Clackamas', path: 'M 350,200 L 400,200...' },
    // ... etc
  ]

  return (
    <svg viewBox="0 0 800 600" className="oregon-map">
      {countyPaths.map((county) => (
        <path
          key={county.name}
          id={county.name.toLowerCase()}
          d={county.path}
          className={`county-path ${selectedCounty === county.name ? 'selected' : ''}`}
          onClick={() => handleCountyClick(county.name)}
        />
      ))}
    </svg>
  )
*/
