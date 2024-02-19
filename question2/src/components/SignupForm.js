import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        country: '',
        age: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const isValidEmail = email => /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password => password && password.length >= 8;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!isValidEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!isValidPassword(formData.password)) {
            errors.password = 'Password must be at least 8 characters long';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Here you would typically handle the form submission, e.g., sending it to an API.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {formErrors.email && <p>{formErrors.email}</p>}
            </div>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {formErrors.name && <p>{formErrors.name}</p>}
            </div>
            <div>
                <label>Country:</label>
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                />
                {formErrors.country && <p>{formErrors.country}</p>}
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
                {formErrors.age && <p>{formErrors.age}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {formErrors.password && <p>{formErrors.password}</p>}
            </div>
            <button type="submit" disabled={!isValidEmail(formData.email) || !isValidPassword(formData.password)}>
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
