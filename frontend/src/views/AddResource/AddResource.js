import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import {
  Button,
  FormGroup,
  TextField
} from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { PageHeader } from '../../ui/PageHeader';
import { AddSkills } from './components/AddSkills';
import { AddTechnologies } from './components/AddTechnologies';
import { postOneEmployee } from '../../API/resources/resourcesAPI';

export const AddResource = () => {
  let history = useHistory();

  const [formData, setFormData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  const [formValues, handleInputChange] = useForm({
    name: '',
    //surname: '',
    email: '',
    profile: '',
    enrol_date: '',
  });
  const { name, email, profile, enrol_date } = formValues;

  const postEmployee = async (employeeData) => { //Send form data to the API
    const response = await postOneEmployee(employeeData);
    if (response) {
      //console.log("response: ", response.data.employee._id);
      history.push('/resource', response.data.employee._id);
    }
  };

  useEffect(() => {
    //console.log("formData", formData)
    if (formData) {
      postEmployee(formData);
      setFormData(null);
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      name,
      email,
      profile,
      enrol_date,
      skills,
      technologies
    });
  };

  return (
    <div>
      <PageHeader title="Add a new resource" />

      <form onSubmit={handleSubmit} className="add_resource_form">

        <FormGroup row className='formRow'>
          <TextField
            label="Full name"
            name="name"
            value={name}
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            variant="standard"
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup row className='formRow'>
          <TextField
            label="Profile"
            name="profile"
            value={profile}
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            label="Hiring date"
            name="enrol_date"
            value={enrol_date}
            variant="standard"
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup row
          sx={{
            p: 2,
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '98%',
          }}>

          <AddSkills skills={skills} setSkills={setSkills} />
          <AddTechnologies technologies={technologies} setTechnologies={setTechnologies} />

        </FormGroup>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}
