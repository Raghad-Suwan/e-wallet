import React from 'react';
import Cards1 from './CardsFirstPage1';
import CardBarDemo from './CardOfBar';
import CardLine from './CardsOfLine';
import TableCard from './CardOfTable';
import Menue from './Menue';
import './ChartsAndDraw.css';

const CallCards = () => {
  return (
    <>
<<<<<<< HEAD
    <Menue />
=======
   <Menue/>
>>>>>>> f0035381a600a688b907db3ef8d3ed4022ab1476
      <div className="container-fluid  malakContainer">
        <div className="row">
          <Cards1 header="Todays Fee" title="$0.0000000" />
          <Cards1 header="Total Fee" title="$0.00000000" />
          <Cards1 header="current balance" title="$500.00" />
          <CardBarDemo />
          <CardLine />
        </div>
        <TableCard/>
      </div>
      
    </>
  );
}
export default CallCards;