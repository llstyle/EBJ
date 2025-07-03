import AuthLayout from "../layouts/AuthLayout.tsx";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthLayout />
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold">Register Page</h1>
        <p>Please fill out the form to create a new account.</p>
      </main>
    </div>
  );
}