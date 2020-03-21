const SET_USER_DATA = 'spring/loginPage/SET_USER_DATA'
const SET_SOME_STATUS = 'spring/loginPage/SET_SOME_STATUS'

const initialState = {
  isAuth: false,
  login: null,
  password: null,
  status: ''
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

export const setUserData = (login, password, isAuth) => ({
  type: SET_USER_DATA,
  payload: { login, password, isAuth }
})

export const setSomeStatus = (status) => ({
  type: SET_SOME_STATUS,
  payload: { status }
})

export const signIn = (login, password) => dispatch => {
  if (login === 'admin' && password === '1234') {
    dispatch(setUserData(login, password, true))
    dispatch(setSomeStatus(''))
  } else {
    dispatch(setSomeStatus('invalid email or password'))
  }
}

export const loginOut = () => dispatch => {
  dispatch(setUserData(null, null, false))
}

export default loginPageReducer
