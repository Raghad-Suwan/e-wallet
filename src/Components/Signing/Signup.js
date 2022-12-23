import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useRef,useState} from 'react';
import { Link } from 'react-router-dom';

 function Signup() {
  const data=useRef();
  const [country,setcountry]=useState("")
  const [firstName,setfirstName]=useState("")
  const [email,setemail]=useState("")
  const [lastName,setlastName]=useState("")

function onchange_country(value){
  console.log(value)
  setcountry(value)
}
function onchange_firstName(value){
  console.log(value)
  setfirstName(value)
}
function onchange_email(value){
  console.log(value)
  setemail(value)
}
function onchange_lastName(value){
  console.log(value)
  setlastName(value)
}
  const handleSubmit = () => {
  console.log(data.current.value,"phone")
  localStorage.setItem("phone",data.current.value)
  localStorage.setItem("country",country)
  localStorage.setItem("firstName",firstName)
  localStorage.setItem("email",email)
  localStorage.setItem("lastName",lastName)
  };
  


  return (
    
      <Container  maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            display:'flex',
            alignItems:'center',
            marginTop: 4,
            flexDirection:'column'
          }}
        >
          <Avatar sx={{ m:3, bgcolor:'chocolate'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography>
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt:2}}>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  autoFocus
                  onChange={(e)=>{
                    onchange_firstName(e.target.value)
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e)=>{
                    onchange_lastName(e.target.value)
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  onChange={(e)=>{
                    onchange_email(e.target.value)
                  }}
                /> 
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                 inputRef={data}
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  variant="outlined"
                  onChange={(e)=>{
                    onchange_country(e.target.value)
                  }}
                /> 
              </Grid>

              <Grid item xs={12}>
                <TextField
                inputRef={data}
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="phone"
                  id="phone-num"
                  autoComplete="phone"
                  variant="outlined"
                  
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="warning" />}
                  label="I agree to all Terms privacy policy and fees "
                />
              </Grid>
            </Grid>

            <Button
            onClick={ handleSubmit }
            fullWidth
              type="submit"
            variant="contained" color="warning"

              sx={{ mt:3, mb: 3}}
            >
             <Link to='/wallet'>Sign Up</Link> 
            </Button>

            <Grid container justifyContent="center">
              <Grid item>
                <Link to ="/login" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    
      </Container>
  
  );
}

export default Signup;