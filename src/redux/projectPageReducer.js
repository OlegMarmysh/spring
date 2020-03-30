import { projectsAPI } from '../api'
import { SET_PROJECTS, setProjects } from './projectAction'

const initialState = {
  springProjects: [],
  springAtticProjects: []
}

const projectPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

export const getProjects = () => async (dispatch) => {
  try {
    const projects = await projectsAPI.getProjects()
    dispatch(setProjects(projects.data))
  } catch (error) {
    console.log(error)
  }
}

export const searchProjects = (inputValue) => async (dispatch) => {
  try {
    const projects = await projectsAPI.searchProjects(inputValue)
    dispatch(setProjects(projects.data))
  } catch (error) {
    console.log(error)
  }
}

export default projectPageReducer
