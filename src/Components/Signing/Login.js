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
import {Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

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
  
   
    <ThemeProvider theme={theme}>
      <Grid container  sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=826&t=st=1671703121~exp=1671703721~hmac=85c45190a28d00722a19474a2b96f86ce901d3a580721a720231bf44b7166496)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
          <Box
            sx={{
              my:15,
              mx:4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
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
             onClick={ handleSubmit}
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
        </Grid>
      </Grid>
    </ThemeProvider>
  );
        }


     