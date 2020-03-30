import { SET_IS_REGISTERED, setIsRegistered } from './registerAction'
import { authAPI } from '../api'

const initialState = {
  isRegistered: false
}

const registerPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_REGISTERED: {
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
    dispatch(setIsRegistered(true))
  } catch (error) {
    console.log(error)
  }
}

export default registerPageReducer
