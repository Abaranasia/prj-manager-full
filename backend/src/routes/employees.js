const { Router } = require('express');
//const { check } = require('express-validator');

const { employeesGet, employeeGet, employeePost, employeeDelete } = require('../controllers/employees');

const router = Router();


router.get('/', employeesGet); // Lists all the employees

router.get('/:id', employeeGet); // Lists one specific employee by id

router.post('/', employeePost); // Add a new employee to the DB

router.delete('/:id', employeeDelete); // Delete an employee from the DB by his id

module.exports = router;