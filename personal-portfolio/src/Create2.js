import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const Create = ({ marketplace, nft }) => {
 
  
   
   const mintThenList = async () => {
    const uri = `https://ipfs.infura.io/ipfs/QmNbnDgaU7zG5mxbCL4HZah32qxV9swZDKb8Z4kZuY734f`
    // mint nft 
    await(await nft.mint(uri)).wait()
    // get tokenId of new nft 
    const id = await nft.tokenCount()
   
  }


}



  return (
    
                <Button onClick={mintThenList} variant="primary" size="lg">
                  Create & List NFT!
                </Button>
              
  );


export default Create