import  React from 'react';
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
import {Link} from 'react-router-dom';
 import LoginImage from './LoginImage';



export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
 <Grid>
      <Container item xs={6} lg={4} md={6} sm={6}>
        <CssBaseline />
        <Box
          sx={{
            marginTop:20,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
      marginLeft:90,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'chocolate' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography>
            Log in
          </Typography>

      
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="warning" />}
              label="Remember me"
            />

            <Button
             onClick={ handleSubmit }
             fullWidth
              type="submit" 
              variant="contained" color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
               <Link to='/wallet'>Log In</Link> 
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to="/forgotPassword">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/sign">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
       

        </Box>
      </Container>


      </Grid>
        
        <Grid  item xs={6} lg={4} md={6} sm={6}>
        <LoginImage/>
        </Grid> 


        </>
     
  );
        }