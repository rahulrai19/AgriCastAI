import DataUpload from './DataUpload'
import ModelPerformanceLogs from './ModelPerformanceLogs'

function AdminAnalyticsPanel() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">🛠️ Admin/Analytics Panel</h2>
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">📁 Data Upload: Historical CSVs</h3>
        <DataUpload />
      </section>
      <section>
        <h3 className="text-lg font-bold mb-2">📡 Model Performance/Logs</h3>
        <ModelPerformanceLogs />
      </section>
    </div>
  )
}

export default AdminAnalyticsPanel 