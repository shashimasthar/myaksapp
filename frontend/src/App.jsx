import React from 'react'
import EmiCalculator from './components/EmiCalculator'
import LoanForm from './components/LoanForm'

function App() {
    // Use environment variable or default to backend service
    const apiUrl = import.meta.env.VITE_API_URL || 'http://172.193.177.12'

    return (
        <div className="app">
            <header className="header">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h1>EBRD Loan Portal</h1>
                </div>
            </header>

            <div className="container">
                <EmiCalculator apiUrl={apiUrl} />
                <LoanForm apiUrl={apiUrl} />
            </div>
        </div>
    )
}

export default App
