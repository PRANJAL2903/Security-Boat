// frontend/components/SignupForm.js

import { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ username, password, role });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="customer">Customer</option>
                <option value="owner">Owner</option>
            </select>
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupForm;
