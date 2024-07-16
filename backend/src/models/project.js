const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
/*   id: {
    type: Number,
    required: true,
    unique: true
  }, */
  name: {
    type: String,
    required: [true, 'Name is a required field']
  },
  desc: {
    type: String,
    required: true,
    default: "No description available"
  },
  type: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: [true, 'Owner is a required field']
  },
  create_date: String,
  start_date: String,
  end_date: String,
  status: {
    type: String,
    required: true,
  },
  resources: [{
    name: String,
    tasks: [],
    availability: String
  }]

});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;