import React, { useState, useEffect } from 'react';

import {
  Divider,
  Paper,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';

import { PageHeader } from '../../ui/PageHeader';
import { getOneEmployee } from '../../API/resources/resourcesAPI';

export const Resource = ({ location }) => {
  const [staff, setStaff] = useState({});

  const getResource = async (id) => {
    const response = await getOneEmployee(id);
    if (response.data?.employee) {
      setStaff(response.data.employee)
    };
  };

  useEffect(() => {
    location.state && getResource(location.state);
  }, []);

  return (
    <div>
      <PageHeader title="Staff" />

      <Box
        sx={{
          m: 2,
          p: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `
          "name name main main"
          "skills skills tech tech"
          `,
        }}
      >
        <Box sx={{ gridArea: 'name', mb: 2 }}>
          <Typography variant="h5" >
            {staff.name}
          </Typography>
          <Typography variant="h6" sx={{ my: 1 }}>
            {staff.profile}
          </Typography>
        </Box>

        <Box sx={{ gridArea: 'main', my: 2 }}>
          <Typography variant="subtitle1">
            {staff.email}
          </Typography>

          <Typography variant="subtitle2">
            <strong>Hired date:</strong> {staff.enrol_date}
          </Typography>
        </Box>

        <Box sx={{ gridArea: 'skills' }}>
          <Typography variant="h6">Skills</Typography>
          <ul>
            {staff.skills?.map(skill => {
              return (<li key={skill}> {skill}</li>)
            })}
          </ul>
        </Box>

        <Box sx={{ gridArea: 'tech' }}>
          <Typography variant="h6">Technologies</Typography>
          <ul>
            {staff.technologies?.map(tech => {
              return (<li key={tech}> {tech}</li>)
            })}
          </ul>
        </Box>
      </Box>
    </div>

  )
}
