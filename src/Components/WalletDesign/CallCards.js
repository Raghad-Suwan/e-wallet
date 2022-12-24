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
            <Cards1 header="The amount of money deposited"
            local={localStorage.getItem("amount")}></Cards1>
            <Cards1 header="The amount of money withdrawn"
              local={localStorage.getItem("withdarw")}
            ></Cards1>
            <Cards1 header="current balance"
             local={localStorage.getItem("amount")} ></Cards1>
            
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