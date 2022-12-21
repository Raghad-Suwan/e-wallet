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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './myStyle.module.css';
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
  const loginbutton = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       <Box>
        <img src='../../Login.jpg' alt='p'/>
       </Box>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'chocolate' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              className={styles.myField}
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
              className={styles.myField}
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
              type="submit" 
              fullWidth
<<<<<<< HEAD
              variant="contained" color="warning"
               sx={{ mt: 3, mb: 2 }}
=======
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => loginbutton('/wallet')}
>>>>>>> 71468a558fd05e72242ed55349e901949478c037
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
<<<<<<< HEAD
                <Link href="/ForgotPassword" >
=======
                <Link to="/forgotPassword">
>>>>>>> 71468a558fd05e72242ed55349e901949478c037
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
    </ThemeProvider>
  );
        }