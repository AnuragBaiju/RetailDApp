# Retail DApp: A Blockchain-Based E-Commerce Solution

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black)](https://soliditylang.org/)
[![AWS](https://img.shields.io/badge/AWS-S3_%26_CloudFront-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=FF9900)](https://aws.amazon.com/s3/)
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)](https://ethereum.org/)

[cite_start]Welcome to the **Retail Store DApp**, a decentralized e-commerce platform designed to create a secure, transparent, and trustless marketplace[cite: 324, 335]. [cite_start]By leveraging Ethereum smart contracts, this project eliminates intermediaries, allowing users to list and purchase products directly with ETH payments[cite: 325, 341].


<p align="center">
</p>

---
## ✨ Core Features

* [cite_start]**Decentralized Marketplace**: All transactions are peer-to-peer and recorded on the Ethereum Sepolia testnet's immutable ledger[cite: 325, 332].
* [cite_start]**Smart Contract Automation**: Product listings, purchases, and ownership transfers are handled securely by a Solidity smart contract, eliminating the need for third-party oversight[cite: 340, 397].
* [cite_start]**Secure Wallet Integration**: Users connect and authenticate using their MetaMask wallet, which is also used to sign and approve all transactions[cite: 353, 362].
* [cite_start]**Global Accessibility**: The React.js frontend is hosted globally on Amazon S3 and distributed via AWS CloudFront for high performance and availability[cite: 327, 354].

---
## 🛠️ Technology Stack

[cite_start]The DApp integrates blockchain, frontend, and cloud technologies to create a seamless user experience[cite: 346].

| Category | Tool | Purpose |
| :--- | :--- | :--- |
| **Smart Contract** | `Solidity` | [cite_start]Defines the on-chain logic for the marketplace[cite: 349]. |
| **Blockchain** | `Ethereum (Sepolia)` | [cite_start]The test network where the smart contract is deployed and executed[cite: 348]. |
| **Dev Framework**| `Hardhat` | [cite_start]Used to compile, debug, and deploy the smart contracts[cite: 350]. |
| **Frontend** | `React.js` | [cite_start]Builds the interactive and intuitive user interface[cite: 352]. |
| **Web3 Library** | `Web3.js` | [cite_start]Facilitates communication between the React app and the Ethereum blockchain[cite: 351]. |
| **Cloud Hosting**| `AWS S3 & CloudFront`| [cite_start]Hosts the static website and optimizes delivery with a global CDN[cite: 354]. |
| **Wallet** | `MetaMask` | [cite_start]Manages user authentication and transaction signing[cite: 353]. |

---
## 🏗️ System Architecture

[cite_start]The application's architecture is composed of a frontend UI, a blockchain layer for logic execution, and a cloud hosting solution for delivery[cite: 367]. [cite_start]The user interacts with the React app, which uses Web3.js to send requests to the smart contract on the Ethereum network via their MetaMask wallet[cite: 368, 371].

<p align="center">
</p>

---
## 🚀 Getting Started Locally

To set up and run this project on your local machine, follow these steps:

1.  **Prerequisites**
    * Node.js & npm installed.
    * MetaMask browser extension installed.

2.  **Clone the Repository**
    ```sh
    git clone [https://github.com/AnuragBaiju/RetailDApp.git](https://github.com/AnuragBaiju/RetailDApp.git)
    cd RetailDApp
    ```

3.  **Install Dependencies**
    ```sh
    npm install
    ```

4.  **Set Up Environment Variables**
    * Create a `.env` file in the root directory.
    * Add your Sepolia RPC URL and your private key (from MetaMask):
        ```env
        SEPOLIA_RPC_URL="YOUR_SEPOLIA_RPC_URL"
        PRIVATE_KEY="YOUR_METAMASK_PRIVATE_KEY"
        ```

5.  **Compile & Deploy Smart Contract**
    * Run the Hardhat deployment script. [cite_start]This will compile your contracts and deploy them to the Sepolia testnet[cite: 350, 376].
        ```sh
        npx hardhat run scripts/deploy.js --network sepolia
        ```
    * After deployment, copy the new contract address from the console.

6.  **Update Frontend**
    * Open `src/App.js` in the frontend code.
    * Paste the new contract address into the appropriate variable.

7.  **Run the Application**
    ```sh
    npm start
    ```
    Open `http://localhost:3000` in your browser to interact with the DApp.

---
## Acknowledgments
[cite_start]This project was developed as a requirement for the **Blockchain Concepts** module in the **Msc in Cloud Computing** program at the National College of Ireland[cite: 272].
