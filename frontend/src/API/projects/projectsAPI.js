import { axiosInterceptor } from "../interceptors";

const projectsAPI = process.env.REACT_APP_BACKEND + '/api/projects';


// Lists all projects
const getProjects = async () => {
  try {
    const response = await axiosInterceptor.get(projectsAPI)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("ERROR: ", error)
  }
};

// Lists one specific project by id
const getOneProject = async (id) => {
  try {
    const response = await axiosInterceptor.get(`${projectsAPI}/${id}`)
    if (response.status === 200) return response;

  } catch (error) {
    console.log("ERROR: ", error)
  }
};

export {
  getProjects,
  getOneProject
};