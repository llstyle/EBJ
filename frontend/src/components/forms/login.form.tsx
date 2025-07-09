import React, { useState } from 'react';
import store, { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../features/users/userSlice';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.user.isAuth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const toRegisterPage = () => {
        navigate("/login/register");
    };

    const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          try {
              // const response = await axios.post('/auth/signin', {
              //   email,
              //   password,
              // });
              // const { user, token } = response.data;
              const user = {
                  id: '123',
                  email: email,
                  firstName: 'Тестовий Користувач',
                  lastName: 'Тестовий',
                  role: 'admin',
              };
              const token = 'mock-token-123';

              dispatch(login({ user, token }));
              //console.log('User profile:', user);
              //console.log('Token:', token);
              setError('');
          } catch (err: any) {
              console.error(err);
              setError(err.response?.data?.message || 'Помилка при вході');
          }
      };
      if (isAuth) return <Navigate to="/" replace />;

      return (
        <>
          <form onSubmit={handleSubmit}className="w-120" style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
              <h2 className="mb-4 text-center">Sign In</h2>

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
              
                  
                
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
                <button className="btn btn-link w-100 my-2" onClick={() => toRegisterPage()} >I don't have an acount</button>
            </form>
            
            </>
        );
}
