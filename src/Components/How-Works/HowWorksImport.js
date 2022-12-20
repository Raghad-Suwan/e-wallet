import React from 'react';
import HowWorks from './HowWorks';
import './HowWorks.css';
import HowWorksReverse from './HowWorksReverse';


const HowWorksImport = () => {
    return (
        <>
          <div className='container howWorks '>
                <div className='row d-sm-flex m-0 p-0'>
            <HowWorks
                text1="need to enter your information in our signup form"
                text2="  sign up first"
<<<<<<< HEAD
                src={require('../../images/Sign in-pana.png')}
=======
                src={require('../../images/Sign-in-pana.png')}
>>>>>>> 5614bf6ce15524c72759a189bb3a2af9a9f208d8
                alt="sing up image"
            />

            <HowWorksReverse
                text1="start with deposite money to wallet"
                src={require('../../images/image-animationi-wallet.gif')}
                alt="animation wallet"
            />

            <HowWorks
                text1="can transfer & pay your bills"
                src={require('../../images/E-Wallet-bro.png')}
                alt="transfer"
            />
            </div>
            </div>
        </>
    )
}
export default HowWorksImport;