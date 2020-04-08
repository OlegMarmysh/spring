export const SET_IS_REGISTERED = 'spring/registerPage/SET_IS_REGISTERED'
export const SET_SOME_STATUS = 'spring/registerPage/SET_SOME_STATUS'
export const SET_LOGIN_ERROR = 'spring/registerPage/SET_LOGIN_ERROR'
export const SET_PASS_ERROR = 'spring/registerPage/SET_PASS_ERROR'

export const setIsRegistered = (isRegistered) => ({
  type: SET_IS_REGISTERED,
  payload: { isRegistered }
})

export const setErrorMessage = (errorMessage) => ({
  type: SET_SOME_STATUS,
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
