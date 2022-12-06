import React from 'react';
import PicCard from './PicCard';
import './Pic.css';


const Pic=(props)=>{
    return (

<div className="all container-fluid  justify-content-center w-100">
<div  className=" row">
        <PicCard src={require('../../image/businessman.jpg')} title="you’r our special client"
        content="" footer="know more about"/>
        <PicCard src={require('../../image/computer-laptop.jpg')} title="You know E-Wallet?"
        content=""  footer="know more about"/>
        <PicCard src={require('../../image/mid-businessman.jpg')} title="Its the future"
        content=""  footer="know more about"/>
</div>
</div>
 );
}
export default Pic;
