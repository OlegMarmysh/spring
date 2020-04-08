import React, { useState } from 'react'
import style from './Register.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { register } from '../../redux/registerPageReducer'
import { setErrorMessage, setLoginError, setPassError } from '../../redux/registerAction'

const Register = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const isRegistered = useSelector(state => state.registerPage.isRegistered)
  const errorMessage = useSelector(state => state.registerPage.errorMessage)
  const loginError = useSelector(state => state.registerPage.loginError)
  const passError = useSelector(state => state.registerPage.passError)

  if (isRegistered) {
    return <Redirect to='/login'/>
  }

  const onLoginChange = (e) => {
    setLogin(e.currentTarget.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(register(login, password))
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
