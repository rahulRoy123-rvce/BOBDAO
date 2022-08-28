import TokenItem from './TokenItem'
import Spinner from './Spinner';
import React, {useEffect, useState} from 'react'
// import { useMoralis } from "react-moralis"
import PropTypes from 'prop-types'


//0x0A90B83884870046B73441AF03b76c35C1d21763
//0x797eF74d45DaAEbD7ad0567E4b1BB5a03F51b31d
//0x06012c8cf97BEaD5deAe237070F9587f8E7A266d


const Dashboard1 = (props) => {
    const API_KEY = "ckey_cfe778e4677b4483b5b6211ec61"
    // const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, account, Moralis, deactivateWeb3 } = useMoralis()
    const [arr, setArr] = useState([])
    const [loading, setLoading] = useState(true)

    const getPortfolio = async () => {
     
        // props.setProgress(10);
        const url = `https://api.covalenthq.com/v1/1/address/demo.eth/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${API_KEY}` ;
     

        setLoading(true)
let response = await fetch(url);
// props.setProgress(30);
        let data = await response.json()
        // props.setProgress(70);
setArr(data.data.items)
setLoading(false)
// props.setProgress(100);
    }
        useEffect(() => {
            // if () {
               getPortfolio()
            // }
        }, [])

    return (
        <>
            <h1 className="text-black font-bold text-3xl flex justify-center items-center pt-4 pb-4">
                PORTFOLIO
            </h1>
            {loading && <Spinner />}
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-12">
                        {arr.filter((element) => element.contract_decimals===0).map((element) => {
                          
                                return (
                                    
                                    <div className="grid-cols-4" key={element.logo_url}>
                                        <TokenItem
                                            ticker={
                                                element.contract_ticker_symbol
                                                    ? element.contract_ticker_symbol
                                                    : ""
                                            }
                                            value={(element.balance / Math.pow(10, 18)).toFixed(4)}
                                            imageUrl={
                                                element.logo_url
                                                    ? element.logo_url
                                                    : "www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png"
                                            } iurl={ element.filter((e) => e.nft_data!==0)}
                                        />
                                    </div>
                                )
                            
                           
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard1;