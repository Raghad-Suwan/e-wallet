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
                src={require('../../images/sign_in-pana.png')}
                alt="sing up image"
            />

            <HowWorksReverse
                text1="start with deposite money to wallet"
                src={require('../../images/image-animationi-wallet.gif')}
                alt="animation wallet"
            />

            <HowWorks
                text1="can transfer & pay your bills"
                src={require('../../images/e-wallet-bro.png')}
                alt="transfer"
            />
             </div>
             </div>
        </>
    )
}
export default HowWorksImport;