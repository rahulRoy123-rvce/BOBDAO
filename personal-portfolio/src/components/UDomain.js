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
    clientID: "1dbe95d7-dc99-443b-a07c-b7cc09da2e0a",
    redirectUri: "http://localhost:3000",
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
          <Button variant="primary"  onClick={loginHandler}>
                {UAuth != null ? UAuth["sub"] : "Login with UDomain"}
            </Button>
    </>
  );
};



export default UDomain