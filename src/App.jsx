import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AuthForm from './pages/AuthForm';

// Placeholder Components (to be implemented later)
const HomePage = () => (
  <div className="p-8 text-center text-gray-700">
    <h1 className="text-4xl font-bold mb-4">Welcome to Sender!</h1>
    <p className="text-lg">Item feed will be displayed here.</p>
  </div>
);
const ItemDetailsPage = () => (
  <div className="p-8 text-center text-gray-700">
    <h1 className="text-4xl font-bold mb-4">Item Details</h1>
    <p className="text-lg">Specific item information and seller contact.</p>
  </div>
);
const CreateItemPage = () => (
  <div className="p-8 text-center text-gray-700">
    <h1 className="text-4xl font-bold mb-4">Create New Listing</h1>
    <p className="text-lg">Form for new listings will go here.</p>
  </div>
);
const EditItemPage = () => (
  <div className="p-8 text-center text-gray-700">
    <h1 className="text-4xl font-bold mb-4">Edit Item</h1>
    <p className="text-lg">Form to modify existing listings.</p>
  </div>
);
const UserProfilePage = () => (
  <div className="p-8 text-center text-gray-700">
    <h1 className="text-4xl font-bold mb-4">User Profile</h1>
    <p className="text-lg">View user's listings and info.</p>
  </div>
);
const DashboardPage = () => (
  <div className="p-8 text-center text-gray-700">
    <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
    <p className="text-lg">Current user's items, messages, profile settings.</p>
  </div>
);
const MessagesPage = () => (
  <div className="p-8 text-center text-gray-700">
    <h1 className="text-4xl font-bold mb-4">Messages Inbox</h1>
    <p className="text-lg">Inbox for direct chats.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/register" element={<AuthForm isRegister={true} />} />
            <Route path="/items/new" element={<CreateItemPage />} />
            <Route path="/items/:id" element={<ItemDetailsPage />} />
            <Route path="/items/:id/edit" element={<EditItemPage />} />
            <Route path="/users/:id" element={<UserProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/messages" element={<MessagesPage />} />
          </Routes>
        </main>
        {/* Footer component would go here */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2023 Sender. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;