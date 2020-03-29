import { SET_SOME_STATUS, SET_USER_DATA, setErrorMessage, setUserData } from './loginAction'
import { authAPI } from '../api/api'

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
  const response = await authAPI.login(login, password)
  if (response.data.resultCode === 0) {
    dispatch(setUserData(login, password, true))
    dispatch(setErrorMessage(''))
  } else {
    dispatch(setErrorMessage(response.data.error))
  }
}

export const logOut = () => dispatch => {
  dispatch(setUserData(null, null, false))
}

export default loginPageReducer
