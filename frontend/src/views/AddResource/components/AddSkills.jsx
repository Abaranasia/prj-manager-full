import React, { useState } from 'react'

import {
  IconButton,
  Paper,
  TextField,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Box } from '@mui/system'

export const AddSkills = ({ skills, setSkills }) => {

  const [oneSkill, setOneSkill] = useState('')


  const handleSkillChange = (e) => {
    setOneSkill(e.target.value)
  };

  const handleAddSkill = (e) => {
    setSkills([...skills, oneSkill])
  };


  /* <FormGroup>
  <Box>
    
    <Button onClick={handleAddSkill} variant="contained">+</Button>
  </Box>

</FormGroup> */
  return (

    <Paper
      label="skills"
      sx={{
        p: 2,
        m: 1,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <Typography variant="h6">Employee skills</Typography>
      <Box>
        <TextField
          label="Skill"
          name="skill"
          value={oneSkill}
          variant="standard"
          onChange={handleSkillChange}
          sx={{ m: 1 }}
        />
        <IconButton
          color="primary"
          sx={{ p: '10px', mt: 2 }}
          variant="contained"
          onClick={handleAddSkill}
        >
          <AddCircleRoundedIcon />
        </IconButton>
      </Box>
      <List >
        {skills.map(skill => {
          return (
            <ListItem key={skill}>
              {skill}
            </ListItem>
          )
        })}


      </List>
    </Paper>

  )
}
