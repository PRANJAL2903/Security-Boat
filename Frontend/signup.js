// frontend/pages/signup.js

import { useState } from 'react';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (formData) => {
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (!response.ok) {
                setMessage(data.message);
            } else {
                setMessage('');
                // Redirect or do something after successful signup
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to signup');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <SignupForm onSubmit={handleSubmit} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignupPage;
