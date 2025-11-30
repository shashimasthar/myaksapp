import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f4f4f4', borderTop: '4px solid #1b365d', marginTop: '4rem', paddingTop: '3rem' }}>
            <div className="container">
                <div className="grid-4" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h4>About</h4>
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Who we are</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>What we do</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Our Strategy</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>History</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Governance</h4>
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Structure</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Leadership</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Shareholders</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Projects</h4>
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Project Database</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Procurement</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Results</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contacts</h4>
                        <p style={{ lineHeight: '1.6', color: '#555' }}>
                            One Exchange Square<br />
                            London EC2A 2JN<br />
                            United Kingdom<br />
                            <br />
                            Tel: +44 20 7338 6000
                        </p>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #ddd', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', color: '#777', fontSize: '0.9rem' }}>
                    <div>&copy; 2025 European Bank for Reconstruction and Development</div>
                    <div>
                        <span style={{ marginRight: '1rem' }}>Terms of Use</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
