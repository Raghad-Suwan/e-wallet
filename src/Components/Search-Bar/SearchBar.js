import React from 'react';
import'./SearchBar.css';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export default function SearchBar() {
  return (
    <div className='box'>
      <div className='search-box'>
      <input type="text" name='' placeholder='type... '/>
        <label for ='' className='icon'>
          <i className='search'>
            <ManageSearchIcon />
          </i>
        </label>
      </div>  
    </div>
  )
}