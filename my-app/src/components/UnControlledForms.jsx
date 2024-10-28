import React, { useState } from 'react';

export default function UnControlledForms() {

    // Create refs for each form input
    const nameInput = React.useRef();
    const categoryInput = React.useRef();
    const commentsInput = React.useRef();


    // Submit handler to log form data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: nameInput.current.value,
            category: categoryInput.current.value,
            comments: commentsInput.current.value
        })
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
                        ref={nameInput}
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select
                        id="id-category"
                        name="category"
                        defaultValue="general"
                        ref={categoryInput}
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
                        ref={commentsInput}
                    />
                </div>
                <input type="submit" value="Send Inquiry" />
            </form>
        </div>
    );
}
