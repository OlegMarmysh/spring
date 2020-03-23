import { SET_SOME_STATUS, SET_USER_DATA, setErrorMessage, setUserData } from './loginAction'

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

export const signIn = (login, password) => dispatch => {
  if (login === 'admin' && password === '1234') {
    dispatch(setUserData(login, password, true))
    dispatch(setErrorMessage(''))
  } else {
    dispatch(setErrorMessage('invalid email or password'))
  }
}

export const logOut = () => dispatch => {
  dispatch(setUserData(null, null, false))
}

export default loginPageReducer
