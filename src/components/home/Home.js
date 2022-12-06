
import React, { Component } from 'react';

import './Home.css';
//import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import PicCard from '../piccard/PicCard';


function Home(){
    return(
      <>
        <Navbar/>
        <PicCard/>
      </>
);
}
export default Home;