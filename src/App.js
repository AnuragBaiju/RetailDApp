// src/App.js
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// Import your components and pages
import WalletBalance from "./components/WalletBalance";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import AllProductDetails from "./pages/AllProductDetails";
import BubbleOverlay from "./components/BubbleOverlay";

const Home = ({ account, connectWallet }) => (
  <div>
    <h1 className="text-center">Retail DApp</h1>
    {account ? (
      <div>
        <p className="alert alert-info text-center">Connected account: {account}</p>
        <WalletBalance account={account} />
      </div>
    ) : (
      <div className="text-center">
        <button className="btn btn-primary" onClick={connectWallet}>
          Connect MetaMask
        </button>
      </div>
    )}
    <hr />
    <AddProduct />
    <ProductList />
  </div>
);

const App = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      toast.success("Wallet connected successfully!");
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Failed to connect wallet.");
    }
  };

  return (
    <div className="container mt-5">
      {/* Navigation Menu */}
      <nav className="mb-4">
        <Link to="/" className="btn btn-link">Home</Link>
        <Link to="/product/1" className="btn btn-link">Product Detail</Link>
        <Link to="/all" className="btn btn-link">All Product Details</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home account={account} connectWallet={connectWallet} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/all" element={<AllProductDetails />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Add the animated bubble overlay as a background effect */}
      <BubbleOverlay />
    </div>
  );
};

export default App;
