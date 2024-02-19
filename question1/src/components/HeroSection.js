// HeroSection.js
import React from 'react';

const HeroSection = () => {
    return (
        <section style={{
            textAlign: 'center', paddingTop: "250px", padding: '50px', backgroundImage: `url("/assets/bg.png")`, height: "700px", color: "white", display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column", backgroundColor:"#131212"}}>
            <h1 style={{ fontWeight: "100", fontSize: "50px", fontFamily: "cursive" }}>Overcome <b><i>Investment</i></b> Barriers,<br /> Build <b> <i>Sustainable</i></b> Wealth</h1>
            <p>Dive into alternative markets with us and <br/>set your capital on the path of unparalleled growth.</p>
        </section>
    );
};

export default HeroSection;
