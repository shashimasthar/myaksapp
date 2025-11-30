import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import EmiCalculator from './components/EmiCalculator'
import LoanForm from './components/LoanForm'
import Dashboard from './components/Dashboard'

function App() {
    // Use environment variable or default to backend service
    const apiUrl = import.meta.env.VITE_API_URL || 'http://172.193.177.12'

    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portal" element={
                        <div className="container" style={{ display: 'block' }}>
                            <Dashboard apiUrl={apiUrl} />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <EmiCalculator apiUrl={apiUrl} />
                                <LoanForm apiUrl={apiUrl} />
                            </div>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    )
}

export default App
