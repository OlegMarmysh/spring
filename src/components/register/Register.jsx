import React, { useState } from 'react'
import style from './Register.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { register } from '../../redux/registerPageReducer'
import { setErrorMessage, setLoginError, setPassError } from '../../redux/registerAction'

const Register = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const errorMessage = useSelector(state => state.registerPage.errorMessage)
  const loginError = useSelector(state => state.registerPage.loginError)
  const passError = useSelector(state => state.registerPage.passError)

  const onLoginChange = (e) => {
    setLogin(e.currentTarget.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await dispatch(register(login, password))
      if (!res) {
        history.push('/login')
      }
    } catch (e) {
      console.log(e)
    }
  }
  const onCancelRegistration = () => {
    dispatch(setErrorMessage(''))
    dispatch(setLoginError({}))
    dispatch(setPassError({}))
  }

  return (
    <div className={style.wrapper}>
      <form onSubmit={onSubmit} className={style.loginForm}>
        <h2>Registration</h2>
        <input type="text" placeholder="login" value={login} onChange={onLoginChange} required/>
        <div>
          <span>{loginError.msg}</span>
        </div>
        <input type="password" placeholder="password" value={password} onChange={onPasswordChange} required/>
        <div>
          <span>{passError.msg}</span>
        </div>
        <div>
          <span>{errorMessage}</span>
        </div>
        <div>
          <button className={style.loginBtn}>Registration</button>
          <NavLink to='/login'><button className={style.loginBtn} onClick={onCancelRegistration}>Cancel</button></NavLink>
        </div>
      </form>
    </div>
  )
}

export default Register
