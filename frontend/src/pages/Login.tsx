import LoginForm from '../components/forms/login.form';

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
              <main className="flex-grow container mx-auto px-4 py-6 justify-content-center" style = {{ marginTop: '50px' }}>
                  <h1 className="text-2xl font-bold">Login Page</h1>
                  <p>Please enter your credentials to login.</p>
                  <LoginForm/>
              </main>
          </div>
  );
}
