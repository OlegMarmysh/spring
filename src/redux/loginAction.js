export const SET_USER_DATA = 'spring/loginPage/SET_USER_DATA'
export const SET_SOME_STATUS = 'spring/loginPage/SET_SOME_STATUS'

export const setUserData = (login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { login, isAuth }
})

export const setErrorMessage = (errorMessage) => ({
  type: SET_SOME_STATUS,
  payload: { errorMessage }
})
