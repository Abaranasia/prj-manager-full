import React from 'react';
import { useHistory } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  // CardMedia,
  Typography,
} from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const ProjectCard = ({ project, prjType }) => {
  let history = useHistory();
  const { _id, name, type, owner, end_date } = project;

  const cardColors = { // TODO: class with gradient bg
    ongoing: "linear-gradient(0deg, rgba(227,253,45,1) 0%, rgba(181,218,75,1) 56%)",
    finished: "linear-gradient(0deg, rgba(255,250,250,1) 0%, rgba(232,232,231,1) 48%)",
  };

  const handleClick = (e, id) => {
    history.push('/project', id);
  }

  return (
    <Card
      onClick={e => handleClick(e, _id)}
      sx={{
        m: 1,
        minWidth: '20em',
        background: cardColors[prjType],
        ':hover': {
          cursor: 'pointer',
          boxShadow: 20, // theme.shadows[20]
        },
      }}

    >
      {(prjType === 'ongoing')
        ? <AccountTreeIcon sx={{ float: "right", fontSize: 40, p: 2 }} />
        : <DoneAllIcon sx={{ float: "right", fontSize: 40, p: 2 }} />}
      <CardHeader
        title={name}
        subheader={`Due date: ${end_date}`}
      />
      <CardContent>
        <Typography variant="body2">
          Project type: {type}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Onwer: {owner}
        </Typography>
      </CardContent>
    </Card>
  )
}
