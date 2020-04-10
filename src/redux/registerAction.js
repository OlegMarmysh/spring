export const SET_ERROR_MESSAGE = 'spring/registerPage/SET_ERROR_MESSAGE'
export const SET_LOGIN_ERROR = 'spring/registerPage/SET_LOGIN_ERROR'
export const SET_PASS_ERROR = 'spring/registerPage/SET_PASS_ERROR'

export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  payload: { errorMessage }
})

export const setLoginError = (loginError) => ({
  type: SET_LOGIN_ERROR,
  payload: { loginError }
})

export const setPassError = (passError) => ({
  type: SET_PASS_ERROR,
  payload: { passError }
})
