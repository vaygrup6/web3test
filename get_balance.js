// Import ethers library
const { ethers } = require("ethers");

// Connect to Ethereum mainnet via public RPC
const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");

// Check ETH balance of an address
async function getBalance() {
  const address = "0x0000000000000000000000000000000000000000";

  // Fetch balance in wei
  const balanceWei = await provider.getBalance(address);

  // Convert to readable ETH
  const balanceEth = ethers.formatEther(balanceWei);

  console.log(`Balance of ${address}: ${balanceEth} ETH`);
}

getBalance();
