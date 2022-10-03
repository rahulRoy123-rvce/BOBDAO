import React from 'react';
import { useState, useEffect } from 'react';
import UAuth from '@uauth/js';
import { Button } from "react-bootstrap"

export const UDomain = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();
  const [walletAddress, setWalletAddress] = useState();

  useEffect(() => {
    // uauth();
    return () => {};
  }, [isLogin]);

  const uauth = new UAuth({
    clientID: "5d8ef622-e570-43cb-99e4-e71b12167526",
    redirectUri: "https://bob-dao.vercel.app/",
  });

  const loginHandler = async () => {
    setIsLogin(true);
    try {
      await uauth.loginWithPopup().then(() => uauth.user().then(setUser));
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log(accounts);

      setIsLogin(true);
      // setWalletAddress(user.wallet_address);
      console.log(walletAddress);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
          <Button  onClick={loginHandler}>Login
                {UAuth != null ? UAuth["sub"] : "Login with UDomain"}
            </Button>
    </>
  );
};



export default UDomain