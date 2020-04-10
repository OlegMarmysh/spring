import { SET_ERROR_MESSAGE, SET_USER_DATA, setErrorMessage, setUserData } from './loginAction'
import { authAPI } from '../api'

const initialState = {
  login: null,
  errorMessage: ''
}

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

export const signIn = (login, password) => async dispatch => {
  try {
    const response = await authAPI.login(login, password)
    localStorage.setItem('token', response.data.token)
    dispatch(setUserData(login))
    dispatch(setErrorMessage(''))
  } catch (error) {
    dispatch(setErrorMessage(error.response.data.error))
    console.log(error)
  }
}

export const logOut = () => dispatch => {
  dispatch(setUserData(null))
}

export default loginPageReducer
