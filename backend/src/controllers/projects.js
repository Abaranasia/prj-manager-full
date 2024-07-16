const { response, request } = require('express');

const Project = require('../models/project');


// Lists all projects
const projectsGet = async (req = request, res = response) => {

  const projects = await Project.find({});
  res.status(200).json({
    projects
  });
};


// Lists one specific project by id
const projectGet = async (req = request, res = response) => {
  const { id } = req.params; // Reading URLparams with Express

  const project = await Project.findOne({ "_id": id }, {});
  res.status(200).json({
    project
  });
};


// Add a new project the database
const projectPost = async (req = request, res = response) => {
  console.log("req: ", req.body)

  const {
//    id,
    name,
    desc,
    type,
    owner,
    create_date,
    start_date,
    end_date,
    status,
    resources,
  } = req.body;

  const project = new Project({
 //   id,
    name,
    desc,
    type,
    owner,
    create_date,
    start_date,
    end_date,
    status,
    resources,
  });

  try {
    await project.save(); // This will actually save the data in the DB

  } catch (error) {
    console.log("Database Error: ", error);
    res.status(500).json({
      msg: `Server Error: ${error}`,
    });
  };

  res.status(200).json({
    msg: 'post API',
    project
  });
};

module.exports = {
  projectsGet,
  projectGet,
  projectPost
};