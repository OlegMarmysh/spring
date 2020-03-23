import React, { useState } from 'react'
import style from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../redux/loginPageReducer'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.loginPage.isAuth)
  const errorMessage = useSelector(state => state.loginPage.errorMessage)

  if (isAuth) {
    return <Redirect to='/spring'/>
  }
  const onLoginChange = (e) => {
    setLogin(e.currentTarget.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn(login, password))
  }
  return (
    <div className={style.wrapper}>
      <form className={style.loginForm}>
        <h2>Sign in</h2>
        <input type="text" placeholder="login" value={login} onChange={onLoginChange}/>
        <input type="password" placeholder="password" value={password} onChange={onPasswordChange}/>
        <div>
          <span>{errorMessage}</span>
        </div>
        <div>
          <button className={style.loginBtn} onClick={onSubmit}>Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default Login
