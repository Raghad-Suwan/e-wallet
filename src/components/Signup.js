
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
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import  './Signup.css';

const Signup = () => {

  return (

<Grid>
<Grid  align='center'>

  <Grid className='avatarStyle'>
  <Avatar>
<PersonAddAlt1Icon/>
</Avatar>
  </Grid>

<h2 className='headerStyle'> Sign up </h2>

<Typography  variant='caption' gutterBottom>Please fill this form if you do not have account !</Typography>

</Grid>

<form>
<TextField   id="standard-basic" label="First name" variant="standard"  placeholder='Enter your first name' required  autoFocus  /> <br/>
<TextField   id="standard-basic" label="Last name" variant="standard"  placeholder='Enter your last name'  required  /> <br/>
<TextField  id="standard-basic" label="Email" variant="standard"  placeholder='Enter your email'   required  /> <br/>
<TextField  id="standard-basic" label="Country" variant="standard"   placeholder='Enter your country'  required  /> <br/>
<TextField  id="standard-basic" label="Phone number" variant="standard"   placeholder='Enter your phone number'   /> <br/>
<TextField  id="standard-basic" label="Password" variant="standard"  placeholder='Enter your password'    required /> <br/> 
<TextField  id="standard-basic" label="Confirm password" variant="standard"  placeholder='confirm password'    required/> <br/>

<FormGroup className='formStyle '>
      <FormControlLabel  control={<Checkbox defaultChecked  />} label="I accept to all terms and condition " />
    </FormGroup>

<Grid className='buttonStyle'>
<Button type='Submit' variant='contained' color='inherit'  > Sign up </Button>
</Grid>


</form>

</Grid>

  )
}

export default Signup;