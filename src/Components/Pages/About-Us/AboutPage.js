import React from 'react';
import './About.css';
import Navbar from '../../Navbar/Navbar';
import AboutText from "./AboutText";
import TeamMember from './TeamMember';
import Footer from '../../Footer/Footer';

function AboutPage(props) {
    return (
        <header >
            <Navbar />
            <section className="about ">
                <div className="container grid pt-4 h-100 w-100 d-flex justify-content-center">
                    <div className="header text-sm-start justify-content-center align-items-center">
                        <div className=" row p-1 m-1 d-flex justify-content-center align-items-center">
                            <div className=" aboutTitle  col-md ">
                                <h1><b>This Is</b></h1>
                                <h1><b> E-Wallet</b></h1>
                            </div>
                            <div className="aboutBeside offset-md-0  col-md " >
                                <p>
                                    Never heard of a “digital wallet”? No biggie.<br></br>
                                    Also called an e-wallet, digital wallets  can be used <br></br>
                                    to make payments right on your phone without stopping <br></br>
                                    to dig around in your purse,futz with your wallet<br></br>
                                    and then race to get your cash or card out. <br></br>
                                    Plus, it’s a great way to make payments with your phone safely.<br></br>
                                    An e-wallet is a secure money management app or online platform that <br></br>
                                    allows you to make purchases with retailers on-site, transfer or send money<br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid  d-flex  justify-content-end'>
                         <img className='imgAbout img-fluid img-responsive d-none d-sm-block w-70' src={require('../../../images/aboutusheader.png')} alt="person " />
                    </div>
                    <section className='md-mb-0 pt-1'>
                        <AboutText />
                    </section>
                    <section className='p-2  pt-1 sec3 text-center w-100'>
                        <div className='container-fluid w-100 '>
                            <div className='row '>
                                <div className='col col-sm-12  col-lg-4'>
                                    <p className='h1 text-info '>+1000</p>
                                    <p className='fs-3 lead'>users</p>
                                </div>
                                <div className='col  col-sm-12  col-lg-4'>
                                    <p className='h1 text-warning'>40</p>
                                    <p className='fs-3 lead'>country </p>
                                </div>
                                <div className='col  col-sm-12 col-lg-4 '>
                                    <p className='h1 text-success'>2022</p>
                                    <p className='fs-4 lead '>Since 2022 , grown from a team of 6 members</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='team-people'>
                        <div className='row '>
                            <h2 className='peopleHeader m-3 p-3 text-center'>Team Members</h2>
                        </div>

                        <div className='row m-3 p-2 justify-content-center text-center align-items-center'>
                            <TeamMember
                                 src={require('../../../images/user.png')}
                                alt="lara avatar "
                                name="Lara " />
                            <TeamMember
                                 src={require('../../../images/woman.png')}
                                alt="raghad avatar "
                                name="Raghad " />
                            <TeamMember
                                 src={require('../../../images/girl.png')}
                                alt="malak avatar "
                                name="Malak " />
                            <TeamMember
                                 src={require('../../../images/man.png')}
                                alt="ize avatar "
                                name="Ize " />
                            <TeamMember
                                src={require('../../../images/user (1).png')}
                                alt="hadi avatar "
                                name="Hadi " />
                            <TeamMember
                                src={require('../../../images/inas.png')}
                                alt="inas avatar "
                                name="Inas " />
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </header>

    );
}
export default AboutPage;