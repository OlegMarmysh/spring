import {
  SET_LOGIN_ERROR, SET_PASS_ERROR,
  SET_ERROR_MESSAGE,
  setErrorMessage,
  setLoginError, setPassError
} from './registerAction'
import { authAPI } from '../api'

const initialState = {
  errorMessage: '',
  loginError: {},
  passError: {}
}

const registerPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
    case SET_LOGIN_ERROR:
    case SET_PASS_ERROR: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

export const register = (login, password) => async dispatch => {
  try {
    await authAPI.register(login, password)
    dispatch(setErrorMessage(''))
    dispatch(setLoginError({}))
    dispatch(setPassError({}))
  } catch (error) {
    dispatch(setErrorMessage(error.response.data.error))
    dispatch(setLoginError({}))
    dispatch(setPassError({}))
    if (error.response.data.errors) {
      dispatch(setLoginError(error.response.data.errors.find(error => error.param === 'login') || { msg: '' }))
      dispatch(setPassError(error.response.data.errors.find(error => error.param === 'password') || { msg: '' }))
    }
    console.log(error)
    return error
  }
}

export default registerPageReducer
