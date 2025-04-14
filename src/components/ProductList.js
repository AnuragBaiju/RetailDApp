// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import { RetailStoreContract, web3 } from "../web3Config";
import { toast } from "react-toastify";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the smart contract
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

  // Handle the buying of a product
  const handleBuyProduct = async (productId, price) => {
    try {
      const accounts = await web3.eth.getAccounts();
      await RetailStoreContract.methods.buyProduct(productId).send({
        from: accounts[0],
        value: price,
      });
      toast.success("Product purchased!");
      fetchProducts(); // Refresh product list after purchase
    } catch (error) {
      console.error("Error buying product:", error);
      toast.error("Error buying product.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={fetchProducts} className="refresh-btn btn btn-secondary">
        Refresh Product List
      </button>
      {loading ? (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : products.length === 0 ? (
        <p>No products found. Try adding one from the smart contract.</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="card mb-3"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="card-body">
              <p>
                <strong>ID:</strong> {product.id}
              </p>
              <p>
                <strong>Name:</strong> {product.name}
              </p>
              <p>
                <strong>Price:</strong> {product.price} wei
              </p>
              <button
                onClick={() => handleBuyProduct(product.id, product.price)}
                className="btn btn-success"
              >
                Buy Product
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
