// AboutSection.js
import React from 'react';
import "./style.css";

const AboutSection = () => {
    return (
        <section className='about-section'>
            <div className='about-content'>
                <div style={{ marginBottom: "15px", display: 'flex', fontFamily: "cursive",height:"50px" }}>

                    <h2 style={{ marginRight: "10px",fontWeight:"bold" }}><b>We're more</b></h2>
                    <h2 style={{ fontWeight: "200" }}>than an </h2> 
                </div>
                <h2 style={{ marginTop: "0", marginLeft: "150px", fontWeight: "200" }}>investment club</h2>
                <p>Our state-of-the-art platform ensures provenance through an unbroken chain of custody, and rigorous independent due diligence, both legal and financial. We're not just helping you invest; we're revolutionizing how investments are made, offering a dynamic approach that transcends traditional boundaries. Connect with a community of visionaries, and embark on an exclusive journey where innovation meets your financial aspirations.</p>
            </div>
            <div className='partners'>
                <h3>Our Partners</h3>
                <div className='partner-logos'>
                    <img src="/assets/1.png" alt="Panag & Babu" />
                    <img src="/assets/2.png" alt="Legalentity" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
