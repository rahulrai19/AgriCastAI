import { useState } from 'react'

function DataUpload() {
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('')

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    setStatus('File selected: ' + e.target.files[0]?.name)
  }

  const handleUpload = () => {
    // Placeholder logic
    setStatus('Upload successful (placeholder)')
  }

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>Upload</button>
      <div>{status}</div>
    </div>
  )
}

export default DataUpload 