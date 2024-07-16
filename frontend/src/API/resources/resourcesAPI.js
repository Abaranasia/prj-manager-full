import axios from "axios";

const employeesAPI = process.env.REACT_APP_BACKEND + '/api/employees';


// Lists all employees
/**
 * This function will make a GET request to the employeesAPI, and if the response is successful, it
 * will return the response.
 * @returns The response object.
 */
const getEmployees = async () => {
  try {
    const response = await axios.get(employeesAPI)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("ERROR: ", error)
  }
};

// Lists one specific employee by id
/**
 * This function will make a GET request to the employees API and return the response if the status is
 * 200.
 * @param id - the id of the employee you want to get
 * @returns The response object.
 */
const getOneEmployee = async (id) => {
  try {
    const response = await axios.get(`${employeesAPI}/${id}`)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("ERROR: ", error)
  }
};

/**
 * It takes in an employeeData object, and then it makes a POST request to the employeesAPI endpoint,
 * and then it returns the response if the response status is 200.
 * @param employeeData - {
 * @returns The response object.
 */
const postOneEmployee = async (employeeData) => {
  try {

    const response = await axios.post(`${employeesAPI}`, employeeData)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("ERROR: ", error)
  }
};

/**
 * It takes an id as an argument, and then it makes a delete request to the API, and if the response is
 * successful, it returns the response.
 * @param id - the id of the employee you want to delete
 * @returns The response object.
 */
const deleteOneEmployee = async (id) => {
  try {
    const response = await axios.delete(`${employeesAPI}/${id}`)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("Error: ", error)
  }
}

export {
  getEmployees,
  getOneEmployee,
  postOneEmployee,
  deleteOneEmployee
};