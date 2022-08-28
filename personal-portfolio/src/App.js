import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


import Create from './Create'

// import MarketplaceAbi from '../contractsData/Marketplace.json'
// import MarketplaceAddress from '../contractsData/Marketplace-address.json'
// import NFTAbi from '../contractsData/NFT.json'
// import NFTAddress from '../contractsData/NFT-address.json'
// import { useState } from 'react'
// import { ethers } from "ethers"
 

function App() {
  // const [loading, setLoading] = useState(true)
  // const [account, setAccount] = useState(null)
  // const [nft, setNFT] = useState({})
  // const [marketplace, setMarketplace] = useState({})
  // // MetaMask Login/Connect
  // const web3Handler = async () => {
  //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //   setAccount(accounts[0])
  //   // Get provider from Metamask
  //   const provider = new ethers.providers.Web3Provider(window.ethereum)
  //   // Set signer
  //   const signer = provider.getSigner()

  //   window.ethereum.on('chainChanged', (chainId) => {
  //     window.location.reload();
  //   })

  //   window.ethereum.on('accountsChanged', async function (accounts) {
  //     setAccount(accounts[0])
  //     await web3Handler()
  //   })
  //   loadContracts(signer)
  // }
  // const loadContracts = async (signer) => {
  //   // Get deployed copies of contracts
  //   const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
  //   setMarketplace(marketplace)
  //   const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
  //   setNFT(nft)
  //   setLoading(false)
  // }
  return (
    <div className="App">
      <NavBar />
      {/* <UDomain/> */}
      <Banner />
      <Skills />
      <Projects />
      <Create/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App