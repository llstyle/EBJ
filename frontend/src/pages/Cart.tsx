import MainLayout from '../layouts/MainLayout.tsx';

export default function Cart() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold">Welcome to the Cart Page</h1>
        <p>This is the area of your cart</p>
      </main>
    </div>
  );
}