// src/components/WalletBalance.js
import React, { useState, useEffect } from "react";
import { web3 } from "../web3Config";

const WalletBalance = ({ account }) => {
  const [balance, setBalance] = useState("0");

  const fetchBalance = async () => {
    if (account) {
      try {
        const weiBalance = await web3.eth.getBalance(account);
        const etherBalance = web3.utils.fromWei(weiBalance, "ether");
        setBalance(etherBalance);
      } catch (error) {
        console.error("Error fetching balance", error);
      }
    }
  };

  useEffect(() => {
    fetchBalance();
    const interval = setInterval(fetchBalance, 20000);
    return () => clearInterval(interval);
  }, [account]);

  return (
    <div className="wallet-balance">
      <strong>Balance:</strong> {balance} ETH
    </div>
  );
};

export default WalletBalance;
