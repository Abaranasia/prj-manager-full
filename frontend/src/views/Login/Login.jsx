import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
    Button,
    FormGroup,
    TextField,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { PageHeader } from '../../ui/PageHeader';


 function Login() {
  const location = useLocation();

const handleSubmit = () => {
    
};

const handleInputChange = () => {
    
};

  return (
<div>
      <PageHeader title="I-Synth login" />
      <form onSubmit={handleSubmit} className="add_resource_form">

        <FormGroup   row className='formRow'>
          <TextField
            label="user"
            name="user"
            value="a"
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            label="Type"
            name="password"
            value="b"
            variant="standard"
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}

export default Login;