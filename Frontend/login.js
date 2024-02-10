// frontend/pages/login.js

import { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (formData) => {
        try {
            const response = await fetch('/api/auth/login', {
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
                // Redirect or do something after successful login
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to login');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={handleSubmit} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginPage;
