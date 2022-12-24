import React from 'react';
import '../Pages/Home/Home.css'
 const ImageHome=()=>{
return(

      
<div className=' cover-container d-flex flex-column h-100 w-100 parentImg '>
          <img className='img-fluid img-responsive ' src={require('../../images/ewallet-cover-home.png')} alt='phone cover' />
        </div>
);
 }
 export default ImageHome;