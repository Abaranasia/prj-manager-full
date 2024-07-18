import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';

export const ResourceCard = ({ resource }) => {
  const { name, tasks } = resource;

  //console.log(name)
  return (
    <Card sx={{ m: 1, bgcolor: '#E7EBF0' }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        {tasks.map(task => {
          return (<Typography variant="body2" key={task}>
            * {task}
          </Typography>)
        })
        }
      </CardContent>
    </Card>
  );
}
