

// src/web3Config.js
import Web3 from "web3";
import contractABI from "./RetailStoreABI.json"; // Ensure the ABI file is in src/

// Update with your deployed contract address
const CONTRACT_ADDRESS = "0xe2352f93D1B5cf3f9Ff1dc4bd271ECa878B33b41";

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: "eth_requestAccounts" });
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.error("No Ethereum browser extension detected. Please install MetaMask.");
}

const RetailStoreContract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

export { web3, RetailStoreContract };
