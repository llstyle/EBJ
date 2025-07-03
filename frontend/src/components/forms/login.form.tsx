import React, { useState } from 'react';
import store from '../../store/store.ts';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.dispatch({
      type: 'user/login',
        payload: { email, password, rememberMe }
    });
    console.log('Logining:' + { email, password, rememberMe });
  };

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
