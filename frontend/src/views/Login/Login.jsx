import React, { useState, useEffect, useContext } from 'react';

import {
  Button,
  FormGroup,
  TextField,
} from '@mui/material';
import { PageHeader } from '../../ui/PageHeader';
import { AuthContext } from '../../contexts';


const Login = () => {
  const authContext = useContext(AuthContext);

  const handleSubmit = () => {
    authContext.setAuth({ token: 1 })
  };

  const handleInputChange = () => {

  };

  return (
    <div>
      <PageHeader title="I-Synth login" />
      <form onSubmit={handleSubmit} className="add_resource_form">

        <FormGroup row className='formRow'>
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