const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
/*   id: {
    type: Number,
    required: true,
    unique: true
  }, */
  name: {
    type: String,
    required: [true, 'Name is a required field']
  },
/*   surname: {
    type: String,
    required: true,
  }, */
  email: {
    type: String,
    required: true,
    default: "An Email is required"
  },
  profile: {
    type: String,
    required: true,
    default: "No profile available"
  },
  enrol_date: String,
  skills: [],
  technologies: [],
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;