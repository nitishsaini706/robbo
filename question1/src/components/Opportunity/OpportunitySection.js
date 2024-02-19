import React from 'react';
import "./style.css"

const OpportunitySection = () => {
    const opportunities = [
        { name: 'Greensteps I', location: 'Alwar, Rajasthan', image: '/path-to-image-1.jpg' },
        { name: 'Greensteps II', location: 'Location II', image: '/path-to-image-2.jpg' },
        { name: 'Greensteps III', location: 'Location III', image: '/path-to-image-3.jpg' },
    ];

    return (
        <section style={{ padding: '50px', color: 'white', backgroundColor: '#000', display: 'flex' ,flexDirection:"column"}}>
            <div style={{ display: 'flex',justifyContent:"space-around"}}>

                <div style={{maxWidth:"500px"}}>

                    <div style={{ backgroundColor: '#000', color: '#fff', padding: '50px' }}>
                        <h2 style={{ marginBottom: '30px', color: '#fff' }}>Discover Prime Opportunities</h2>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '30px'
                        }}>
                            <div style={{ borderBottom: '2px solid blue', paddingBottom: '10px' }}>
                                <h3>Greensteps I</h3>
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <h3>Greensteps II</h3>
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <h3>Greensteps III</h3>
                            </div>
                        </div>
                        <p style={{ marginBottom: '30px' }}>
                            In a world where the hustle and bustle of a metropolitan city
                            can wear you down, everyone deserves a place to escape to
                            — a real 'home away from home.'
                        </p>
                        <p>
                            That's precisely what we're here to offer you. Our carefully
                            curated real estate opportunities provide you with the perfect
                            retreat from the urban chaos, all while potentially securing a
                            solid investment in your future.
                        </p>
                        <button style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            marginTop: '30px'
                        }}>
                            Learn More
                        </button>
                    </div>
                </div>
                
                    <div className="card">
                        <div className="card-header">
                            <h1>Greensteps I</h1>
                            <p className="location">Alwar, Rajasthan</p>
                            <p className="agent">Ariba Rehman</p>
                        </div>
                        <img src="/assets/acr.png" alt="Greensteps I" className="card-image" />
                        <div className="card-content">
                            <div className="tags">
                                <span className="tag">Regular plot</span>
                                <span className="tag">2,970 Sq ft²</span>
                                <span className="tag">Fractional Ownership</span>
                            </div>
                            <div className="tags">
                                <span className="tag">Electricity</span>
                                <span className="tag">Agricultural Land</span>
                                <span className="tag">Maintenance Inclusive</span>
                                <span className="tag">Fence</span>
                            </div>
                                    <p style={{color:"grey"}}>Price</p>
                            <div className="price">
                                <div className='price-inside'>
                                <p><b>INR</b></p>
                                    <p>1.75 Cr</p>
                                </div>
                            <div className='price-inside'>
                                    <p>2900/ Sq yd</p>
                                </div>
                            <div className='price-inside'>
                                    <p><b>INR</b></p>
                                    <p>5,00,000</p>
                                </div>
                            </div>
                            <div className="card-actions">
                                <button className="btn invest">Invest Now</button>
                                <button className="btn contact">Contact Us</button>
                            </div>
                        </div>
                    </div>

                

            </div>
            <div style={{ display: 'flex', justifyContent: "space-around",alignItems:"center" }}>


                <div >
                    <img style={{ maxWidth: "500px", maxHeight: "500px" }} src="/assets/rect.png"></img>
                </div>
                <div className="alternativeInvestments" style={{ maxWidth: "500px", maxHeight: "500px" }}>
                    <h1 className="title">Access Alternative Investments</h1>
                    <p className="description">
                        Unleashing the untapped potential of the alternative markets through
                        Rooba.Finance - Your gateway to superior returns and exclusive opportunities.
                        <br /><br />
                        Discover the advantages of alternative market investments, unlock new
                        horizons, and embark on a journey towards financial prosperity with our
                        platform as your trusted partner.
                    </p>
                    <div className="buttonGroup">
                        <button className="button">Private Equity</button>
                        <button className="button">Private Debt</button>
                        <button className="button">Investment Management Firms</button>
                    </div>
                    <button className="learnMoreButton">Learn More →</button>
                </div>
            </div>
        </section>
    );
};

export default OpportunitySection;
