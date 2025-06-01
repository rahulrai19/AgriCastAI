import CropYieldPrediction from './CropYieldPrediction'
import WeatherImpactForecast from './WeatherImpactForecast'
import LLMAdvisoryChat from './LLMAdvisoryChat'
import ActionableRecommendations from './ActionableRecommendations'

function FarmerDashboard() {
  return (
    <div className="bg-green-50 p-6 rounded-lg shadow mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-green-800">👨‍🌾 Farmer Dashboard</h2>
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">📈 Crop Yield Prediction</h3>
        <CropYieldPrediction />
      </section>
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">🌦️ Weather Impact Forecast</h3>
        <WeatherImpactForecast />
      </section>
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">💬 LLM Advisory Chat</h3>
        <LLMAdvisoryChat />
      </section>
      <section>
        <h3 className="text-lg font-bold mb-2">🧾 Actionable Recommendations</h3>
        <ActionableRecommendations />
      </section>
    </div>
  )
}

export default FarmerDashboard 