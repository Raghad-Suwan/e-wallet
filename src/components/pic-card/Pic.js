import React from 'react';
import PicCard from './PicCard';
import './Pic.css';


const Pic=(props)=>{
    return (

<div className=" container-fluid  justify-content-center">
<PicCard src={require('../../image/businessman.jpg')} title="you’r our special client"
content="jcjdchbfbbbdccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdhcdchios;skmsx" footer="know more about"/>
<PicCard src={require('../../image/computer-laptop.jpg')} title="You know E-Wallet?"
content="jcjdchbfbbbdccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdhcdchios;skmsx"  footer="know more about"/>
<PicCard src={require('../../image/mid-businessman.jpg')} title="Its the future"
content="jcjdchbfbbbdccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdhcdchios;skmsx"  footer="know more about"/>

</div>
 );
}
export default Pic;
