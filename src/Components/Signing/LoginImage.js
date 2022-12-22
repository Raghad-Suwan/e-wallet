
import React from "react";
import image from "../../images/logIn.photo.jpg"; 
import Grid from '@mui/material/Grid';
import './Login.css';

function LoginImage() {
  return (
   
    <Grid className='image-login img-responsive img-fluid' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:1000,width:700,
    }}>
    </Grid>
 
  );
}

export default LoginImage ;