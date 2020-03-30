import React, { useState } from 'react'
import style from './Register.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { register } from '../../redux/registerPageReducer'

const Register = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const isRegistered = useSelector(state => state.registerPage.isRegistered)

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
  return (
    <div className={style.wrapper}>
      <form className={style.loginForm}>
        <h2>Registration</h2>
        <input type="text" placeholder="login" value={login} onChange={onLoginChange}/>
        <input type="password" placeholder="password" value={password} onChange={onPasswordChange}/>
        <div>
          <button className={style.loginBtn} onClick={onSubmit}>Registration</button>
          <NavLink to='/login'><button className={style.loginBtn}>Cancel</button></NavLink>
        </div>
      </form>
    </div>
  )
}

export default Register
