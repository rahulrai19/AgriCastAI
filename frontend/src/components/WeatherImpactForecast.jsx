import { useState } from 'react'

function WeatherImpactForecast() {
  const [region, setRegion] = useState('')
  const [forecast, setForecast] = useState(null)

  const handleForecast = () => {
    // Placeholder logic
    setForecast({ risks: 'Flood risk: Low, Drought risk: Moderate', rainfall: '120mm', temp: '28°C' })
  }

  return (
    <form className="flex flex-col gap-3 max-w-md" onSubmit={e => {e.preventDefault(); handleForecast();}}>
      <input className="border rounded px-3 py-2" placeholder="Region/Location" value={region} onChange={e => setRegion(e.target.value)} />
      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Get Forecast</button>
      {forecast && (
        <div className="mt-2 bg-blue-50 p-3 rounded">
          <p>Upcoming risks: <span className="font-semibold">{forecast.risks}</span></p>
          <p>Rainfall forecast: <span className="font-semibold">{forecast.rainfall}</span></p>
          <p>Temperature forecast: <span className="font-semibold">{forecast.temp}</span></p>
        </div>
      )}
    </form>
  )
}

export default WeatherImpactForecast 