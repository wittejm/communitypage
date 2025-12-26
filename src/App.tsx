import { useState } from 'react'
import './App.css'
import { MapArea } from './components/MapArea'
import { CountySidebar } from './components/CountySidebar'
import { CountyContent } from './components/CountyContent'
import { oregonCounties } from './data/counties'

function App() {
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null)

  const handleSelectCounty = (countyName: string) => {
    setSelectedCounty(countyName)
  }

  const selectedCountyData = oregonCounties.find(
    (county) => county.name === selectedCounty
  )

  return (
    <div className="app">
      <header className="app-header">
        <h1>Oregon Record Expungement Community</h1>
      </header>

      <main className="main-content">
        <MapArea isCompact={selectedCounty !== null} />

        {selectedCountyData && (
          <CountyContent county={selectedCountyData} />
        )}

        <CountySidebar
          selectedCounty={selectedCounty}
          onSelectCounty={handleSelectCounty}
        />
      </main>
    </div>
  )
}

export default App
