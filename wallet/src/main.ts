import "./style.css";
import { ethers } from "ethers";
import WalletArtifact from "../../artifacts/contracts/Wallet.sol/Wallet.json";
import { hexZeroPad } from "ethers/lib/utils";

const contractAddress = "";
const HARDHAT_NETWORK_ID = "31337";
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;
let userAddress = "";
let walletContract: ethers.Contract;
let provider: ethers.providers.Web3Provider;
let membersCount = 0;

// htmlElements

const memberCountHtml = document.getElementById("MemberCount");
const historyListHtml = document.getElementById("historyList");

// const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
if ((window as any).ethereum === undefined) {
	alert("Please install metamask extension");
}

async function connectWalletAndSetUserAddress() {}

async function initContract() {}

async function setMembersCount() {}

async function setPollingData() {}

async function listenToEvents() {}

await connectWalletAndSetUserAddress();
await initContract();
await setPollingData();
await setMembersCount();
await listenToEvents();
