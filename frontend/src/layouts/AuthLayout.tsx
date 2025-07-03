import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-lg rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to EBJ
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please choose an option below
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link to="/login" className="text-blue-600 hover:text-blue-800">
              Login
            </Link>
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              Register
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
