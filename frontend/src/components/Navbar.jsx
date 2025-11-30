import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <h1>EBRD Loan Portal</h1>
                </Link>
                <div>
                    <Link to="/" style={{ color: 'white', marginRight: '2rem', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
                    <Link to="/portal" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Loan Portal</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
