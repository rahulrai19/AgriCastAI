import { useState } from 'react'

function CropYieldPrediction() {
  const [district, setDistrict] = useState('')
  const [cropType, setCropType] = useState('')
  const [sowingDate, setSowingDate] = useState('')
  const [result, setResult] = useState(null)

  const handlePredict = () => {
    // Placeholder logic
    setResult({ yield: '2.5 tons/ha', confidence: '85%' })
  }

  return (
    <form className="flex flex-col gap-3 max-w-md" onSubmit={e => {e.preventDefault(); handlePredict();}}>
      <input className="border rounded px-3 py-2" placeholder="District" value={district} onChange={e => setDistrict(e.target.value)} />
      <input className="border rounded px-3 py-2" placeholder="Crop Type" value={cropType} onChange={e => setCropType(e.target.value)} />
      <input className="border rounded px-3 py-2" type="date" value={sowingDate} onChange={e => setSowingDate(e.target.value)} />
      <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition">Predict Yield</button>
      {result && (
        <div className="mt-2 bg-green-100 p-3 rounded">
          <p>Predicted yield: <span className="font-semibold">{result.yield}</span></p>
          <p>Confidence level: <span className="font-semibold">{result.confidence}</span></p>
        </div>
      )}
    </form>
  )
}

export default CropYieldPrediction 