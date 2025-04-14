// src/pages/ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RetailStoreContract } from "../web3Config";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProductDetail = async () => {
    setLoading(true);
    try {
      const detail = await RetailStoreContract.methods.products(id).call();
      setProduct(detail);
    } catch (error) {
      console.error("Error fetching product detail", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <div className="mt-5">
      <h2>Product Detail</h2>
      {loading ? (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : product ? (
        <div className="card">
          {product.imageURL && (
            <img src={product.imageURL} className="card-img-top" alt={product.name}/>
          )}
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text"><strong>ID:</strong> {product.id}</p>
            <p className="card-text"><strong>Price:</strong> {product.price} wei</p>
            {product.description && (
              <p className="card-text"><strong>Description:</strong> {product.description}</p>
            )}
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
