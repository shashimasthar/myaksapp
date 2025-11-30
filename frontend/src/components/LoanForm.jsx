import React, { useState } from 'react';

const LoanForm = ({ apiUrl }) => {
    const [formData, setFormData] = useState({
        applicantName: '',
        amount: 10000,
        interestRate: 5.5,
        tenureMonths: 12
    });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${apiUrl}/api/loans`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('Application Submitted Successfully!');
                setFormData({ ...formData, applicantName: '' });
            } else {
                setStatus('Error submitting application.');
            }
        } catch (err) {
            setStatus('Network Error');
        }
    };

    return (
        <div className="card">
            <h2>Apply for a Loan</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Applicant Name</label>
                    <input
                        type="text"
                        value={formData.applicantName}
                        onChange={e => setFormData({ ...formData, applicantName: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Loan Amount (€)</label>
                    <input
                        type="number"
                        value={formData.amount}
                        onChange={e => setFormData({ ...formData, amount: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Interest Rate (%)</label>
                    <input
                        type="number" step="0.1"
                        value={formData.interestRate}
                        onChange={e => setFormData({ ...formData, interestRate: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (Months)</label>
                    <input
                        type="number"
                        value={formData.tenureMonths}
                        onChange={e => setFormData({ ...formData, tenureMonths: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn">Submit Application</button>
            </form>
            {status && (
                <div className="result-box" style={{ marginTop: '1rem', color: status.includes('Error') ? 'red' : 'green' }}>
                    {status}
                </div>
            )}
        </div>
    );
};

export default LoanForm;
