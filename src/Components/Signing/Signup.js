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
import { Link } from 'react-router-dom';


 function Signup() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name1:data.get('firstName'),
      name2:data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      country:data.get('country'),
      phone:data.get('phone')
    });
  };

  return (
    
      <Container  maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor:'chocolate' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  autoFocus
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
                /> 
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  variant="outlined"
                /> 
              </Grid>

              <Grid item xs={12}>
                <TextField
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
            fullWidth
              type="submit"
            variant="contained" color="warning"
              sx={{ mt:3, mb: 2}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
<<<<<<< HEAD
                <Link href="/login">
=======
                <Link to ="/login">
>>>>>>> 0b1c1069724a2bafbc961a50c4cbee2030f21db1
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