import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import FarmerDashboard from './components/FarmerDashboard'
import AdminAnalyticsPanel from './components/AdminAnalyticsPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
        
        <div id="farmer-dashboard">
          <FarmerDashboard />
        </div>
        <hr className="my-12 border-gray-300" />
        <div id="admin-panel">
          <AdminAnalyticsPanel />
        </div>
      </div>
    </>
  )
}

export default App
