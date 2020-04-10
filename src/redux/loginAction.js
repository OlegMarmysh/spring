export const SET_USER_DATA = 'spring/loginPage/SET_USER_DATA'
export const SET_ERROR_MESSAGE = 'spring/loginPage/SET_ERROR_MESSAGE'

export const setUserData = (login) => ({
  type: SET_USER_DATA,
  payload: { login }
})

export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  payload: { errorMessage }
})
