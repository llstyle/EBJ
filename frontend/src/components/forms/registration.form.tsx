import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

export default function RegisterForm() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('Йоська');
    const [lastName, setLastName] = useState('Верескул');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/signup', { firstName, lastName, email, password });
            console.log('Registration successful:', response.data);
            //console.log('Мок-реєстрація:', { firstName, lastName, email, password });
            setIsRegistered(true);
            setError('');
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || 'Error during registration');
        }
    };

    const toLoginPage = () => {
        navigate("/login/");
    };

    useEffect(() => {
        if (isRegistered) {
            navigate('/login', { replace: true });
        }
    }, [isRegistered, navigate]);

    return (
        <form onSubmit={handleSubmit} className="w-120" style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            <h2 className="mb-4 text-center">Sign Up</h2>

            {error && (
                <div className="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            )}

            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="form-text">We never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            <button className="btn btn-link w-100 my-2" onClick={() => toLoginPage()} >I already have an acount</button>
        </form>
    );
}
