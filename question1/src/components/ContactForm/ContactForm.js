import React, { useState } from 'react';
import './contact.css'; // Ensure you have this CSS file in your project

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.phone) errors.phone = 'Phone number is required';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Data:', formData);
            // Handle form submission here
        }
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form-left">
                <h1>Ready to transcend the ordinary?</h1>
            </div>
            <div className="contact-form-right">
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name here"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <div className="error">{formErrors.name}</div>}

                    <label htmlFor="email">Email ID</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email here"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <div className="error">{formErrors.email}</div>}

                    <label htmlFor="phone">Phone no.</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your phone number here"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {formErrors.phone && <div className="error">{formErrors.phone}</div>}

                    <label htmlFor="query">Your Query (if any)</label>
                    <textarea
                        id="query"
                        name="query"
                        placeholder="Your query here"
                        value={formData.query}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
