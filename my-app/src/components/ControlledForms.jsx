import React, { useState } from 'react';

export default function ControlledForms() {
    // Using useState hooks to handle form values
    const [formData, setFormData] = useState({
        name: '',
        category: 'order',
        comments: ''
    });

    // Unified handleChange function for all input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Submit handler to log form data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h2>Please fill out the form below:</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        id="id-name"
                        name="name"
                        type="text"
                        placeholder="First and last name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select
                        id="id-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        id="id-comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value="Send Inquiry" />
            </form>
        </div>
    );
}
