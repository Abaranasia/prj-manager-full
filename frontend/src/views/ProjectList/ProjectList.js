import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { getProjects } from '../../API/projects/projectsAPI';
import { PageHeader } from '../../ui/PageHeader';


const headerStyle = {
  color: "white",
  backgroundColor: "#436f83",
  fontWeight: 'bold',
  "& .MuiTableCell-head": { color: "white" }
}

export function ProjectList() {
  const [projects, setProjects] = useState([]);

  let history = useHistory();

  const tableHeader = ['name', 'type', 'owner', 'start date', 'end date'];

  const getPrj = async () => {
    const response = await getProjects();
    if (response) {
      const { projects } = response.data;
      setProjects(projects)
    }
  };

  useEffect(() => {
    getPrj();
  }, []);

  const handleClick = (e, id) => {
    console.log("_id: ", id)
    history.push('/project', id);
  }

  return (
    <>
      <PageHeader title="List of current projects" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ ...headerStyle }}>
              {tableHeader.map(title => {
                return (<TableCell key={title} className="">
                  {title}
                </TableCell>)
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {projects?.map(prj => {
              return (<TableRow
                sx={{ cursor: "pointer" }}
                key={prj._id}
                id={prj._id}
                hover
                onClick={e => handleClick(e, prj._id)}
              >
                <TableCell>{prj.name}</TableCell>
                <TableCell>{prj.type}</TableCell>
                <TableCell>{prj.owner}</TableCell>
                <TableCell>{prj.start_date}</TableCell>
                <TableCell>{prj.end_date}</TableCell>
              </TableRow>)
            })}

          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
