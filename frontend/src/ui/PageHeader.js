import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const PageHeader = ({ title }) => {
  return (

    <Box sx={{
      bgcolor: "#E7EBF0",
      borderBottom: "solid orange 2px",
      height: "30px",
      p: 1.5,
      margin: '0px -10px 10px -10px',
    }}>
      <Typography
        variant="overline"
        sx={{ fontWeight: 'bold', fontSize: "0.80em" }}
      >
        {title}
      </Typography >
    </Box>
  )
}
