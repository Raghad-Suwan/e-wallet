import React from 'react';
import Cards1 from './CardsFirstPage1';
 import CardBarDemo from './CardOfBar';
import CardLine from './CardsOfLine';
import './ChartsAndDraw.css';

const ChartToPage= () => {
return (
<>

<div className="container-fluid  malakContainer">
  <div className="row">
 
<Cards1 header="Todays Fee" title="$0.0000000"/>
<Cards1 header="Total Fee" title="$0.00000000"/> 
<Cards1 header="current balance"  title="$500.00"/>

<CardBarDemo/>
<CardLine/>
</div> 
</div> 

</>

);

}

export default ChartToPage;