import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: 'var(--ebrd-navy)',
            color: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.8rem', letterSpacing: '-1px' }}>EBRD</div>
                    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', paddingLeft: '1rem', fontSize: '0.9rem', lineHeight: '1.2' }}>
                        European Bank<br />for Reconstruction and Development
                    </div>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', textTransform: 'uppercase', fontSize: '0.9rem' }}>Who we are</Link>
                    <Link to="/portal" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', textTransform: 'uppercase', fontSize: '0.9rem' }}>What we do</Link>
                    <Link to="/portal" className="btn btn-accent" style={{ textDecoration: 'none', color: '#1b365d' }}>Loan Portal</Link>
                    <div style={{ cursor: 'pointer' }}>🔍</div>
                    <div style={{ cursor: 'pointer' }}>EN</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
