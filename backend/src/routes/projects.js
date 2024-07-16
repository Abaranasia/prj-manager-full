const { Router } = require('express');
//const { check } = require('express-validator');

const { projectsGet, projectGet, projectPost } = require('../controllers/projects');

const router = Router();


router.get('/', projectsGet); // Lists all projects

router.get('/:id', projectGet); // Lists one specific project by id

router.post('/', projectPost); // Adds a new project to the DB

module.exports = router;