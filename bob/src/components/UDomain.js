import React from 'react';
import { useState, useEffect } from 'react';
import UAuth from '@uauth/js';
import { Button } from "react-bootstrap"


  const uauth = new UAuth({
    clientID: "5d8ef622-e570-43cb-99e4-e71b12167526",
    redirectUri: "https://bob-dao.vercel.app/",
  });


function UDomain() {
    const [Uauth, setUauth] = useState()

    async function Connect() {
        try {
            const authorization = await uauth.loginWithPopup()
            setUauth(JSON.parse(JSON.stringify(authorization))["idToken"])

            // await authenticate()
        } catch (error) {
            console.error(error)
        }
    }

    // async function logOut() {
    //     uauth.logout()
    //     logout()
    // }

    function log() {
        if (Uauth === null || Uauth === undefined) {
            Connect()
        } 
    }

    return (
        <>
            <Button onClick={log}>
                {Uauth != null ? Uauth["sub"] : "Login with UNSD"}
            </Button>
        </>
    )
}
export default UDomain