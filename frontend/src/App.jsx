import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import EmiCalculator from './components/EmiCalculator'
import LoanForm from './components/LoanForm'
import Dashboard from './components/Dashboard'

function App() {
    // Use environment variable or default to backend service
    const apiUrl = import.meta.env.VITE_API_URL || 'http://172.193.177.12'

    return (
        <Router>
            <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portal" element={
                            <div className="container" style={{ display: 'block', marginTop: '2rem' }}>
                                <Dashboard apiUrl={apiUrl} />
                                <div className="grid-2">
                                    <EmiCalculator apiUrl={apiUrl} />
                                    <LoanForm apiUrl={apiUrl} />
                                </div>
                            </div>
                        } />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
