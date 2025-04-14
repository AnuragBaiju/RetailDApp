// src/pages/AllProductDetails.js
import React, { useState, useEffect } from "react";
import { RetailStoreContract } from "../web3Config";
import { toast } from "react-toastify";

const AllProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const count = await RetailStoreContract.methods.productCount().call();
      const loadedProducts = [];
      for (let i = 1; i <= count; i++) {
        const product = await RetailStoreContract.methods.products(i).call();
        loadedProducts.push(product);
      }
      setProducts(loadedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to load products.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2>All Product Details</h2>
      {loading ? (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Product {product.id}: {product.name}</h5>
              <p className="card-text"><strong>Price:</strong> {product.price} wei</p>
              {product.description && (
                <p className="card-text"><strong>Description:</strong> {product.description}</p>
              )}
              {product.imageURL && (
                <img src={product.imageURL} alt={product.name} className="img-fluid" />
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllProductDetails;
