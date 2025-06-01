function ActionableRecommendations() {
  const recommendations = [
    'Apply nitrogen fertilizer after 3 weeks of sowing.',
    'Monitor soil moisture and irrigate if rainfall is low.',
    'Use pest-resistant crop varieties.'
  ]
  return (
    <ul className="list-disc pl-6 space-y-1 text-green-900">
      {recommendations.map((rec, idx) => <li key={idx}>{rec}</li>)}
    </ul>
  )
}

export default ActionableRecommendations 