const { ethers } = require("ethers");

// Use a testnet RPC endpoint (e.g., Sepolia)
const provider = new ethers.JsonRpcProvider("https://rpc.sepolia.org");

// Your private key (⚠️ Do NOT expose real private keys in production)
const privateKey = "0xYOUR_PRIVATE_KEY_HERE";

// Create wallet instance
const wallet = new ethers.Wallet(privateKey, provider);

async function sendTx() {
  // Build transaction
  const tx = {
    to: "0x1111111111111111111111111111111111111111",
    value: ethers.parseEther("0.001"), // Send 0.001 ETH
  };

  // Sign and send transaction
  const sentTx = await wallet.sendTransaction(tx);

  console.log("Transaction sent. Hash:", sentTx.hash);

  // Optional: Wait for confirmation
  const receipt = await sentTx.wait();
  console.log("Transaction confirmed in block:", receipt.blockNumber);
}

sendTx();
