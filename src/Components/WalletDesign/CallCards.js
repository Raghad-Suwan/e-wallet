import React from 'react';
import CardLine from './CardOfLine';
import CardsFirts1 from './CardsFirstPage1';
import CardsFirts2 from './CardsFirstPage2';
import CardsFirts3 from './CardsFirstPage3.js';
import CardBarDemo from './CardOfBar';
import './ChartsAndDraw.css';
// import CardPie from './PieChart';


const ChartToPage= () => {
return (
<>
<div className="container-fluid malakContainer">
  <div className="row ">
<CardsFirts1/>
<CardsFirts2/> 
<CardsFirts3/>
</div> 

<div>
<CardBarDemo header="The amount of withdrawals per month from the wallet"/>
</div>

<div className='Line-malak'>
    <CardLine/>
</div>

{/* <div className='pie-malak'>
    <CardPie/>
</div> */}

</div>




</>
);

}

export default ChartToPage;