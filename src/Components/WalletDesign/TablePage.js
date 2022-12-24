import React from 'react'
import './Table.css';
import Menue from './Menue';
import TableCard from './CardOfTable';
const TablePage = () => {
  return (      
      <div className='container'>
        <Menue />
        <TableCard />
      </div>
  );
}
export default TablePage;


