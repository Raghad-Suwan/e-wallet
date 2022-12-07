import React from 'react';
import PicCard from './PicCard';
import './Pic.css';


const Pic=(props)=>{
    return (

<div className="all container-fluid  justify-content-center w-100">
<div  className=" row">
    <div className=" col col-4 w=100">
<PicCard src={require('../../image/businessman.jpg')} title="you’r our special client"
content="jcjdchbfbbbdccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdhcdchios;skmsx" footer="know more about"/>
</div>
 
 <div className=" col col-4 w=100">
 <PicCard src={require('../../image/computer-laptop.jpg')} title="You know E-Wallet?"
content="jcjdchbfbbbdccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdhcdchios;skmsx"  footer="know more about"/>
</div>

<div className=" col col-4 w=100">
<PicCard src={require('../../image/mid-businessman.jpg')} title="Its the future"
content="jcjdchbfbbbdccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdhcdchios;skmsx"  footer="know more about"/>
</div>
</div>

</div>
 );
}
export default Pic;
