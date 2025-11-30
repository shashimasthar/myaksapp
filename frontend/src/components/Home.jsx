import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section - Split Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '500px' }}>
                <div style={{ backgroundColor: '#1b365d', color: 'white', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1', color: 'white' }}>We invest in<br />changing lives</h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '500px', lineHeight: '1.6' }}>
                        We promote the transition to open, market-oriented economies and promote private and entrepreneurial initiative.
                    </p>
                    <Link to="/portal">
                        <button className="btn btn-accent" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>Apply for a Loan</button>
                    </Link>
                </div>
                <div style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>
            </div>

            {/* Stats Ribbon */}
            <div style={{ backgroundColor: '#f4f4f4', padding: '3rem 0', borderBottom: '1px solid #ddd' }}>
                <div className="container">
                    <div className="grid-3" style={{ textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1b365d' }}>€210bn</div>
                            <div style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', marginTop: '0.5rem' }}>Invested</div>
                        </div>
                        <div style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1b365d' }}>7,500+</div>
                            <div style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', marginTop: '0.5rem' }}>Projects</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1b365d' }}>40+</div>
                            <div style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', marginTop: '0.5rem' }}>Countries</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid #1b365d', display: 'inline-block', paddingBottom: '0.5rem' }}>Latest News & Projects</h2>
                <div className="grid-3">
                    {/* Card 1 */}
                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" alt="News" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ color: '#666', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>27 Nov 2025</div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.4' }}>EBRD supports green office development in Warsaw</h3>
                            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                A new loan will fund the construction of a sustainable office complex, aiming for BREEAM Outstanding certification.
                            </p>
                            <a href="#" style={{ color: '#1b365d', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                READ MORE <span>&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="News" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ color: '#666', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>26 Nov 2025</div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.4' }}>Boosting renewable energy in Central Asia</h3>
                            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Significant investment in solar and wind power projects to help the region transition away from fossil fuels.
                            </p>
                            <a href="#" style={{ color: '#1b365d', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                READ MORE <span>&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80" alt="News" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ color: '#666', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>25 Nov 2025</div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.4' }}>Digital transformation for small businesses</h3>
                            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                New credit line launched to help SMEs adopt digital technologies and improve their competitiveness.
                            </p>
                            <a href="#" style={{ color: '#1b365d', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                READ MORE <span>&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
