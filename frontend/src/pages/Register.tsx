import RegisterForm from "../components/forms/registration.form";

export default function Register() {
  return (
      <div className="flex flex-col min-h-screen">
          <main className="flex-grow container mx-auto px-4 py-6 justify-content-center" style = {{ marginTop: '50px' }}>
              <h1 className="text-2xl font-bold">Register Page</h1>
              <p>Please enter your credentials to register.</p>
              <RegisterForm/>
          </main>
      </div>
  );
}