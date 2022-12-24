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
            <Cards1 header="Todays Fee" title="$0.0000000" />
            <Cards1 header="Total Fee" title="$0.00000000" />
            <Cards1 header="current balance" title="$0.0000000" />
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