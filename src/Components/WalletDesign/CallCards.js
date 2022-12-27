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
      <header >
        <Menue />
        <div className="container-fluid  malakContainer">
          <div className="row">

            <Cards1 header="The amount of money deposited" title="$0.00" />
            <Cards1 header="The amount of money withdrawn" title="$0.00" />
            <Cards1 header="current balance" title="$0.00" />
            <CardBarDemo />
            <CardLine />
          </div>
          <TableCard />

        </div>
      </header>
    </>
  );

}
export default CallCards;