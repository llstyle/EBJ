import { useState } from "react";
import AdminMenu from "../components/adminMenu";
import UserAdmin from "../components/admin/userAdmin";
import ProductAdmin from "../components/admin/productAdmin";
import CategoryAdmin from "../components/admin/categoryAdmin";

export default function Admin() {
  const [selectedBlock, setSelectedBlock] = useState<string>('user');

  const renderContent = () => {
    switch (selectedBlock) {
      case 'user':
        return <UserAdmin/>
      case 'product':
        return <ProductAdmin/>;
      case 'category':
        return <CategoryAdmin/>
      default:
        return <div>Please select a menu item</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Page</h1>
        <AdminMenu onSelect={setSelectedBlock} /> {}
        <div className="mt-5 p-4 border rounded bg-light shadow">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
