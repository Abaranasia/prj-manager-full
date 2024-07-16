import React, { useState, useEffect } from 'react';

import {
  Typography
} from '@mui/material';
import { Box } from '@mui/system';

import { getOneProject } from '../../API/projects/projectsAPI';
import { PageHeader } from '../../ui/PageHeader';
import { ResourceCard } from './components/ResourceCard';

export function Project({ location }) {
  const [project, setProject] = useState({});

  const getPrj = async (id) => {
    const response = await getOneProject(id);
    if (response.data?.project) {
      setProject(response.data.project)
    };
  };

  useEffect(() => {
    location.state && getPrj(location.state); // sets project Id to search for
  }, []);

  return (
    <div>
      <PageHeader title={project.name} />

      <Box
        sx={{
          m: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header owner"
        "date date date status"
        "title title title title"
        "res res res res"`,
        }}
      >
        <Box sx={{ gridArea: 'header' }}>
          <Typography variant="h6">
            {project.desc}
          </Typography>
        </Box>
        <Box sx={{ gridArea: 'owner' }}><strong>Product Owner: </strong>{project.owner}</Box>
        <Box sx={{ gridArea: 'date' }}>
          <ul>
            <li><strong>Creation date: </strong>{project.create_date}</li>
            <li><strong>Start date: </strong>{project.start_date}</li>
            <li><strong>End date: </strong>{project.end_date}</li>
          </ul>
        </Box>
        <Box sx={{ gridArea: 'status', bgcolor: 'error.main' }}>
          <strong>Status: </strong>
          {/*  {(project.completed) ? "finished" : "ongoing"} */}
          {project.status}
        </Box>
        <Typography sx={{ gridArea: 'title' }} variant="h6">Asigned resources</Typography>
        <Box sx={{ gridArea: 'res', display: 'flex' }}>
          {project.resources?.map(res => <ResourceCard key={res.name} resource={res} />)}
        </Box>
      </Box>

    </div>
  )
}
