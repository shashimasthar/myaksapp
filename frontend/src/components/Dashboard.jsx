import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = ({ apiUrl }) => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/api/loans`)
            .then(res => res.json())
            .then(data => setLoans(data))
            .catch(err => console.error(err));
    }, [apiUrl]);

    // Data for Pie Chart (Status Distribution)
    const statusData = [
        { name: 'Approved', value: loans.filter(l => l.status === 'APPROVED').length },
        { name: 'Pending', value: loans.filter(l => l.status === 'PENDING').length }
    ].filter(d => d.value > 0);

    const COLORS = ['#004F9F', '#FFBB28']; // EBRD Blue and Warning Yellow

    // Data for Bar Chart (Loan Amounts)
    const amountData = loans.map((l, index) => ({
        name: `Loan ${index + 1}`,
        amount: l.amount,
        emi: l.monthlyEmi
    })).slice(-10); // Show last 10 loans

    return (
        <div className="dashboard-container" style={{ marginBottom: '2rem' }}>
            <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                    <h2>Loan Portfolio Status</h2>
                    <div style={{ height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={statusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {statusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div>
                    <h2>Recent Loan Amounts</h2>
                    <div style={{ height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={amountData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="amount" fill="#002A54" name="Loan Amount (€)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
