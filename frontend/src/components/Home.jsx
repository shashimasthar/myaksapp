import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <div style={{
                backgroundColor: '#002A54',
                color: 'white',
                padding: '4rem 2rem',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0, 42, 84, 0.8), rgba(0, 42, 84, 0.8)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Investing in Changing Lives</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    We promote the transition to open, market-oriented economies and promote private and entrepreneurial initiative.
                </p>
                <Link to="/portal">
                    <button className="btn" style={{ width: 'auto', fontSize: '1.2rem', padding: '1rem 2rem' }}>Apply for a Loan</button>
                </Link>
            </div>

            {/* About Section */}
            <div className="container" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ color: '#002A54', borderBottom: '2px solid #004F9F', paddingBottom: '0.5rem', display: 'inline-block' }}>Who We Are</h2>
                        <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#555' }}>
                            The EBRD is a unique international financial institution that supports projects in over 30 countries, from central Europe to central Asia and the southern and eastern Mediterranean. Investing primarily in private sector clients whose needs cannot be fully met by the market, the Bank promotes entrepreneurship and fosters transition towards open and democratic market economies.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                            alt="Modern Office"
                            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </div>
            </div>

            {/* Sustainability Section */}
            <div style={{ backgroundColor: 'white', padding: '4rem 0', marginTop: '4rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Sustainability"
                                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ color: '#002A54', borderBottom: '2px solid #004F9F', paddingBottom: '0.5rem', display: 'inline-block' }}>Green Economy Transition</h2>
                            <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#555' }}>
                                We are a leader in climate finance. Our Green Economy Transition (GET) approach puts green investments at the heart of our strategy. We aim to make more than 50% of our annual investment green by 2025.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
