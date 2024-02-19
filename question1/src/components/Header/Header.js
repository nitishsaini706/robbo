import React from 'react';
import './header.css'; // Make sure to create a corresponding Header.css file with your styles

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                {/* Replace with your logo */}
                ROBA
            </div>
            <nav className="header__nav">
                <ul>
                    <li><a href="#opportunities">Opportunities</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#about-us">About Us</a></li>
                </ul>
            </nav>
            <div className="header__signin">
                <button>Sign in</button>
            </div>
        </header>
    );
};

export default Header;
