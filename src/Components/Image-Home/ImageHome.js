import React from 'react';
import '../Pages/Home/Home.css'
 const ImageHome=()=>{
return(
<div className=' cover-container d-flex flex-column h-100 w-100 parentImg '>
          <img className='img-fluid img-responsive ' src={require('../../images/finaaaaaal.png')} alt='phone cover' />
          {/* <div className="textoverlay text-capitalize ">
           make life easier with wallet</div> */}
        </div>
);
 }
 export default ImageHome;