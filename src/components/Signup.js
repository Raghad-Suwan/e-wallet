
import  * as React from 'react';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { display } from '@mui/system';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Style from './Style.css';

const Signup = () => {
  const paperStyle={padding:'80 px 80 px' , width: 500, margin:"60px auto" , borderRadius:'20px'};
  const headerStyle={margin:0};
const avatarStyle ={backgroundColor:'#256D85'};
const buttonStyle={margin:'5px'};

const myStyle = {
  color: "white",
  padding: "80px",
  margin:'10px',
  fontFamily: "Sans-Serif"
}

  return (
    
<Grid>

  <h1 style={myStyle}>
    Welcome in e-wallet, please registration your information!
  </h1>
  <Paper  elevation={20}  style={paperStyle}>
    <Grid  align='center'>
      <Avatar style={avatarStyle}>
<PersonAddAlt1Icon/>
      </Avatar>

<h2 style={headerStyle}> Sign up </h2>
<Typography variant='caption' gutterBottom>Please fill this form if you do not have account !</Typography>
</Grid>

<form>
<TextField   id="standard-basic" label="First name" variant="standard"  placeholder='Enter your first name' required  autoFocus  /> <br/>
<TextField   id="standard-basic" label="Last name" variant="standard"  placeholder='Enter your last name'  required  /> <br/>
<TextField  id="standard-basic" label="Email" variant="standard"  placeholder='Enter your email'   required  /> <br/>
<TextField  id="standard-basic" label="Country" variant="standard"   placeholder='Enter your country'  required  /> <br/>
<TextField  id="standard-basic" label="Phone number" variant="standard"   placeholder='Enter your phone number'   /> <br/>
<TextField  id="standard-basic" label="Password" variant="standard"  placeholder='Enter your password'    required /> <br/> 
<TextField  id="standard-basic" label="Confirm password" variant="standard"  placeholder='confirm password'    required/> <br/>

<FormGroup>

      <FormControlLabel control={<Checkbox defaultChecked  />} label="I accept to all terms and condition " />

    </FormGroup>

<Button type='Submit' variant='contained' color='inherit' style={buttonStyle} > Sign up </Button>

</form>

</Paper>

</Grid>


  );
}

export default Signup;