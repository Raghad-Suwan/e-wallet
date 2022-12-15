import React from 'react';
import './HowWorks.css'
const HowWorks = () => {
    return (
        
        <section className=' p-5 pt-5 '>
            <div className='container-fluid raaaggghhhhhh'>
                <div className='row d-sm-flex'>
                    <div className='col col-md-12 col-lg-6 col-sm-12 text-capitalize text-center needInfo'>
                        <h3>need to <span>enter</span> your information in our signup form</h3>
                        <p className='lead'>
                            sign up first 
                        </p>
                    </div>
                    <div className='col col-md-12 col-lg-6 col-sm-12'>
                        <img className='img-fluid ' src={require('../../images/Sign in-pana.png')} alt='' />
                    </div>
                </div>
                <div className='row d-sm-flex'>
                    <div className='col col-md-12 col-lg-6 col-sm-12'>
                        <img className='img-fluid ' src={require('../../images/image-animationi-wallet.gif')} alt='' />
                    </div>
                    <div className='col col-md-12 col-lg-6 col-sm-12 text-capitalize text-center needInfo'>
                        <h3>start with <span>deposite</span> money to wallet</h3>
                        <p className='lead'>
                        </p>
                    </div>
                    
                </div>
                <div className='row d-sm-flex needInfo'>
                    <div className='col col-md-12 col-lg-6 col-sm-12 text-capitalize text-center needInfo'>
                        <h3>can transfer & pay your bills</h3>
                        <p className='lead'>
                        </p>
                    </div>
                    <div className='col col-md-12 col-lg-6 col-sm-12'>
                        <img className='img-fluid ' src={require('../../images/E-Wallet-bro.png')} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HowWorks;