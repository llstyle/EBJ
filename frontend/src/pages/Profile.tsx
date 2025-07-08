import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store.ts';
import { logout } from '../features/users/userSlice.ts';

export default function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    const isAuth = useSelector((state: RootState) => state.user.isAuth);

    const handleLogout = () => {
        dispatch(logout());
        console.log('User logged out');
    };

    if (!isAuth || !user) {
        return (
            <div className="container py-5">
                <div className="alert alert-warning text-center" role="alert">
                    Ви не авторизовані. Увійдіть в обліковий запис.
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="card mx-auto" style={{ maxWidth: '500px' }}>
                <div className="card-body text-center">
                    <h3 className="card-title mb-3">User's Profile</h3>
                    <p><strong>First Name:</strong> {user.firstName}</p>
                    <p><strong>Last Name:</strong> {user.lastName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <button className="btn btn-danger mt-3" onClick={handleLogout}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
