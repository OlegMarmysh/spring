import { SET_SOME_STATUS, SET_USER_DATA, setErrorMessage, setUserData } from './loginAction'
import { authAPI } from '../api'

const initialState = {
  isAuth: false,
  login: null,
  password: null,
  errorMessage: ''
}

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_SOME_STATUS: {
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
    await authAPI.login(login, password)
    dispatch(setUserData(login, password, true))
    dispatch(setErrorMessage(''))
  } catch (error) {
    dispatch(setErrorMessage(error.response.data.error))
    console.log(error)
  }
}

export const logOut = () => dispatch => {
  dispatch(setUserData(null, null, false))
}

export default loginPageReducer
