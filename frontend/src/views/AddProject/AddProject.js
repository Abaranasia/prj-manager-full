import React, { useEffect, useState } from 'react';

import {
  Button,
  FormGroup,
  MenuItem,
  Paper,
  TextField
} from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { PageHeader } from '../../ui/PageHeader';
import { getEmployees } from '../../API/resources/resourcesAPI';

export const AddProject = () => {

  const [formData, setFormData] = useState(null);
  const [status, setStatus] = useState('nostarted');
  const [owner, setOwner] = useState('');
  const [availableOwners, setAvailableOwners] = useState([]);
  const [resources, setResources] = useState([]);


  const getOwners = async () => {
    const response = await getEmployees();
    if (response) {
      const { employees } = response.data;
      const ownersList = employees.map((emp => {
        return {
          label: emp.name,
          value: emp.name,
        }
      }));
      setAvailableOwners(ownersList)
    }
  };

  useEffect(() => {
    getOwners();
  }, []);

  const [formValues, handleInputChange] = useForm({
    name: '',
    desc: '',
    type: '',
    create_date: '',
    start_date: '',
    end_date: '',
  });

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  
  const { name, desc, type, create_date, start_date, end_date } = formValues;

  const statusTypes = [
    {
      label: 'Ongoing',
      value: 'ongoing',
    },
    {
      label: 'Not started',
      value: 'nostarted',
    },
    {
      label: 'Finished',
      value: 'finished',
    },
    {
      label: 'Stalled',
      value: 'stalled',
    },
  ];

  useEffect(() => {
    if (formData) {
      console.log("formData", formData)
      //postEmployee(formData);
      //setFormData(null);
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      name,
      desc,
      type,
      create_date,
      start_date,
      end_date,
      owner,
      status,
      //resources
    });
  };

  const handleOwnerChange = (e) => {
    setOwner(e.target.value)
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  };

  return (
    <div>
      <PageHeader title="Add a new project" />
      <form onSubmit={handleSubmit} className="add_resource_form">

        <FormGroup row className='formRow'>
          <TextField
            label="Name"
            name="name"
            value={name}
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            label="Type"
            name="type"
            value={type}
            variant="standard"
            onChange={handleInputChange}
          />
        </FormGroup>


        <FormGroup row className='formRow'>
          <TextField
            select
            label="Owner"
            name="owner"
            value={owner}
            variant="standard"
            onChange={handleOwnerChange}
          >
            {availableOwners.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Status"
            name="status"
            value={status}
            variant="standard"
            onChange={handleStatusChange}
          >
            {statusTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormGroup>


        <FormGroup row className='formRow'>
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            label="Creation date"
            name="create_date"
            value={create_date}
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            label="Start date"
            name="start_date"
            value={start_date}
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            label="End date"
            name="end_date"
            value={end_date}
            variant="standard"
            onChange={handleInputChange}
          />
        </FormGroup>


        <FormGroup row className='formDesc'>
          <TextField
            sx={{ m: 0, p: 0 }}
            multiline
            rows={2}
            label="Description"
            name="desc"
            value={desc}
            variant="standard"
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}
