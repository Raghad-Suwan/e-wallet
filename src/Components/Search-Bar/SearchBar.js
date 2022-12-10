import React from 'react';
import'./SearchBar.css';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
export default function SearchBar() {
  return (
    <div className='box'>
      <form className='search'>
        <input type="text" name='' placeholder='search... '/>
        <button type='submit'><div className='search icon'>
          <ManageSearchIcon />
        </div>
        </button>
      </form>
    </div>
  )
}