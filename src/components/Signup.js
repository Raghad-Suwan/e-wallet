
import  React from 'react';
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
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';


const Signup =() => {
  const paperStyle={padding:'60px 60 px' , width:500 , margin:"150px auto"};
  const headerStyle={margin:0};
const avatarStyle ={backgroundColor:'#9e9e9e'};
const genderStyle ={margin:'1px' , display:'initial'};
const buttonStyle={margin:'5px'}

  return (
<Grid>
  <Paper  elevation={20}  style={paperStyle}>
    <Grid  align='center'>
      <Avatar style={avatarStyle}>
<PersonAddAlt1Icon/>
      </Avatar>

<h2 style={headerStyle}>Sign up</h2>
<Typography variant='caption' gutterBottom>Please fill this form if you do not have account !</Typography>

</Grid>
<form>
<TextField   id="standard-basic" label="First name" variant="standard"  placeholder='Enter your first name' required fullWidth autoFocus/>
<TextField   id="standard-basic" label="Last name" variant="standard"  placeholder='Enter your last name'  required  fullWidth/>
<TextField  id="standard-basic" label="Email" variant="standard"  placeholder='Enter your email'   required  fullWidth/>
<TextField  id="standard-basic" label="Country" variant="standard"   placeholder='Enter your country'  required  fullWidth/>
<TextField  id="standard-basic" label="Phone number" variant="standard"   placeholder='Enter your phone number'    required  fullWidth/>

<FormControl>
  <FormLabel id="legend" style={genderStyle}>Gender</FormLabel>
  <RadioGroup
    aria-labelledby="gender"
    defaultValue="female"
    name="gender1"  style={{display:'initial'}}>

    <FormControlLabel value="female" control={<Radio />} label="Female"  />
    <FormControlLabel value="male" control={<Radio />} label="Male"   />
    
  </RadioGroup>

</FormControl> 


<TextField  id="standard-basic" label="Password" variant="standard"  placeholder='Enter your password'  fullWidth   required/>
<TextField  id="standard-basic" label="Confirm password" variant="standard"  placeholder='confirm password'  fullWidth  required/>

<FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="I accept to all terms and condition " />
    </FormGroup>

<Button type='Submit' variant='contained' color='primary' style={buttonStyle}>Sign up</Button>




</form>


</Paper>

</Grid>


  );
}

export default Signup;