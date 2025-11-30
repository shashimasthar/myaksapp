import React, { useState } from 'react';

const EmiCalculator = ({ apiUrl }) => {
    const [amount, setAmount] = useState(10000);
    const [rate, setRate] = useState(5.5);
    const [months, setMonths] = useState(12);
    const [emi, setEmi] = useState(null);

    const calculate = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${apiUrl}/api/loans/calculate-emi`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, rate, months })
            });
            const data = await res.json();
            setEmi(data.emi);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="card">
            <h2>EMI Calculator</h2>
            <form onSubmit={calculate}>
                <div className="form-group">
                    <label>Loan Amount (€)</label>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Interest Rate (%)</label>
                    <input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Duration (Months)</label>
                    <input type="number" value={months} onChange={e => setMonths(e.target.value)} />
                </div>
                <button type="submit" className="btn">Calculate EMI</button>
            </form>
            {emi && (
                <div className="result-box">
                    <div>Monthly Payment</div>
                    <div className="result-value">€{emi.toFixed(2)}</div>
                </div>
            )}
        </div>
    );
};

export default EmiCalculator;
