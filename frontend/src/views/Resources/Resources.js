import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { PageHeader } from '../../ui/PageHeader';
import { getEmployees, deleteOneEmployee } from '../../API/resources/resourcesAPI';


const headerStyle = {
  color: "white",
  backgroundColor: "#436f83",
  fontWeight: 'bold',
  "& .MuiTableCell-head": { color: "white" }
};

export const Resources = () => {
  let history = useHistory();

  const [resources, setResources] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [resourceToDelete, setResourceToDelete] = useState(null);

  const tableHeader = ['name', 'profile', 'email', 'hiring date', ''];

  const getResources = async () => {
    const response = await getEmployees();
    if (response) {
      const { employees } = response.data;
      setResources(employees)
    }
  };

  useEffect(() => {
    getResources();
  }, []);



  const handleClick = (e, id) => { // Display detailed information of the resource (employee)
    history.push('/resource', id);
  }

  const deleteEmployee = async () => {
    setOpenDialog(false);
    if (resourceToDelete) {
      console.log("Deleting... ", resourceToDelete)
      const response = await deleteOneEmployee(resourceToDelete);
      if (response) console.log("response: ", response);
      getResources(); // Reload resources list
    };
  };

  const delDialogOpen = (e, id) => {
    e.stopPropagation();
    setOpenDialog(true);
    setResourceToDelete(id);
  };

  const delDialogClose = () => {
    setOpenDialog(false);
    setResourceToDelete(null);
  };

  return (
    <div>
      <PageHeader title="Resources" />
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
            {resources.map(res => {
              return (<TableRow
                sx={{ cursor: "pointer" }}
                key={res._id}
                id={res._id}
                hover
                onClick={e => handleClick(e, res._id)}
              >
                <TableCell>{res.name}</TableCell>
                <TableCell>{res.profile}</TableCell>
                <TableCell>{res.email}</TableCell>
                <TableCell>{res.enrol_date}</TableCell>
                <TableCell>
                  <HighlightOffIcon
                    onClick={e => delDialogOpen(e, res._id)}
                    sx={{ color: '#CCC', '&:hover': { color: 'red' } }}
                  />
                </TableCell>
              </TableRow>)
            })}

          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={openDialog}
        onClose={delDialogClose}
      >
        <DialogTitle>
          Delete resource
        </DialogTitle>
        <DialogContent>
          All the information of this resource will be lost. Are you sure to proceed?
        </DialogContent>
        <DialogActions>
          <Button onClick={delDialogClose}>Disagree</Button>
          <Button onClick={deleteEmployee} autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
