import "./style.css"

export const Exposure = ()=>{
    const reasons = [
        {
            title: 'Access to innovation',
            description:
                'Gain early access to disruptive technologies and innovative companies not available on public markets.',
        },
        {
            title: 'Customization',
            description:
                'Innovative investment structures & strategies can be tailored more effectively in private markets.',
        },
        {
            title: 'Emerging market exposure',
            description:
                'Unlock untapped potential by investing in burgeoning markets with high growth prospects that are attainable through private market participation.',
        },
        {
            title: 'Diversification',
            description:
                'Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets.',
        },
        {
            title: 'Strategic influence',
            description:
                'Private market investments often grant investors greater control and influence over business decisions and strategies.',
        },
    ];

    return (
        <div className="exposure-container">
            <div style={{display:"flex",flexDirection:'column'}}>

                <h1 style={{ fontFamily:"cursive",fontSize:"50px"}}>Why you need exposure  <br/>to private markets</h1>
            </div>
            <div className="reasons-grid">
                {reasons.map((reason, index) => (
                    <div key={index} className="reason">
                        <h2>{reason.title}</h2>
                        <p>{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
