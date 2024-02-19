import React, { useState } from 'react';
import './style.css'; // Make sure to create a corresponding CSS file

const HowToInvestSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
        setIsOpen1(false) 
        setIsOpen2(false)
    };
    const toggleOpen1 = () => {
        setIsOpen(false)
        setIsOpen1(!isOpen1)
        setIsOpen2(false)
    };
    const toggleOpen2 = () => {
        setIsOpen(false)
        setIsOpen1(false)
        setIsOpen2(!isOpen2)
    };

    return (
        <section className="how-to-invest-section">
            <div className="invest-section">
                <div className="section-header" onClick={toggleOpen}>
                    <h3 style={isOpen ? { fontWeight: "500" } : { fontWeight: "100" }}>Create Account</h3>
                    <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                </div>
                    <hr/>
                {isOpen && (
                    <div className="section-content" style={isOpen ? { borderLeft: "5px solid blue", paddingLeft: "15px" } : null}>
                        <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>
                        
                        <button className="start-now-btn">Start Now </button>
                    </div>
                )}
                <div className="section-header" onClick={toggleOpen1} >
                    <h3 style={isOpen1 ? {fontWeight:"500"} : {fontWeight:"100"}}>Discover opportunities</h3>
                    <span className="toggle-icon">{isOpen1 ? '−' : '+'}</span>
                </div>
                <hr />
                {isOpen1 && (
                    <div className="section-content" style={isOpen1 ? { borderLeft: "5px solid blue" ,paddingLeft:"15px"} : null}>
                        <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>

                        <button className="start-now-btn">Start Now </button>
                    </div>
                )}
                <div className="section-header" onClick={toggleOpen2} >
                    <h3 style={isOpen2 ? { fontWeight: "500" } : { fontWeight: "100" }}>Create Account</h3>
                    <span className="toggle-icon">{isOpen2 ? '−' : '+'}</span>
                </div>
                <hr />
                {isOpen2 && (
                    <div className="section-content" style={isOpen2 ? { borderLeft: "5px solid blue", paddingLeft: "15px" } : null}>
                        <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>

                        <button className="start-now-btn">Start Now </button>
                    </div>
                )}
            </div>
           <img src="/assets/kyc.png"></img>
        </section>
    );
};

export default HowToInvestSection;
