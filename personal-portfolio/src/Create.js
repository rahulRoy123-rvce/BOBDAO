import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const Create = ({ marketplace, nft }) => {
  
   const mintThenList = async () => {
    const uri = `https://ipfs.infura.io/ipfs/QmeyBpTQSuAUZeJGXVRuaxgRGXqZeo8ECNawCG6JDBxA9c`
    // mint nft 
    
    await(await nft.mint(uri)).wait()
    // get tokenId of new nft 
    const id = await nft.tokenCount()
    // approve marketplace to spend nft
   // await(await nft.setApprovalForAll(marketplace.address, true)).wait()
    // // add nft to marketplace
    // const listingPrice = ethers.utils.parseEther(price.toString())
     //await(await marketplace.makeItem(nft.address, id, listingPrice)).wait()
  }

  

  





  return (
  
              <div className="d-grid px-0">
                <Button onClick={mintThenList} variant="primary" size="sm">
                  Create & List NFT!
                </Button>
              </div>
    
  );
}

export default Create