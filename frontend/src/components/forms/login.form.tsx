import React, { useState } from 'react';
import store, { RootState } from '../../store/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../features/users/userSlice.ts';
import axios from '../../api/axios.ts';


export default function LoginForm() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.user.isAuth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          try {
              const response = await axios.post('http://localhost:3000' + '/auth/signup', {
                email,
                password,
              });

          const { user, token } = response.data;

          dispatch(login({ user, token }));
          setError('');
          } catch (err: any) {
              console.error(err);
              setError(err.response?.data?.message || 'Помилка при вході');
          }
      };

      if (isAuth) return <Navigate to="/" replace />;

      return (
        <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2 className="mb-4 text-center">Увійти</h2>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email адреса</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="form-text">Ми ніколи не передамо вашу електронну адресу стороннім.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="form-check-label" htmlFor="rememberMe">Запамʼятати мене</label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Увійти</button>
        </form>
    );
}
