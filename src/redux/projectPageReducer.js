import springBoot from '../image/spring-boot.svg'
import springFramework from '../image/spring-framework.svg'
import springData from '../image/spring-data.svg'
import springCloud from '../image/spring-cloud.svg'
import springPlatform from '../image/logo-io-platform.png'
import springEd from '../image/spring-ed.svg'
import { projectsAPI } from '../api/api'

export const SET_PROJECTS = 'spring/projectsPage/SET_PROJECTS'

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

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects
})

export const getProjects = () => async (dispatch) => {
  const projects = await projectsAPI.getProjects()
  dispatch(setProjects(projects.data))
}

export const searchProjects = (inputValue) => async (dispatch) => {
  const projects = await projectsAPI.searchProjects(inputValue)
  dispatch(setProjects(projects.data))
}

export default projectPageReducer
