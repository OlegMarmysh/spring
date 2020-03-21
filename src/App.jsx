import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Projects from './projects/Projects'
import Footer from './footer/Footer'
import { HashRouter, Redirect, Route } from 'react-router-dom'
import Login from './login/Login'
import { useSelector } from 'react-redux'

const App = () => {
  const { isAuth } = useSelector(state => ({ isAuth: state.loginPage.isAuth }))
  if (!isAuth) {
    return <Redirect to={'/login'}/>
  }
  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Footer />
    </>
  )
}

const SpringApp = () => {
  return (
    <HashRouter>
      <Route exact path='/' render={() => <Redirect to={'/spring'}/>}/>
      <Route path="/spring" render = {() => <App/>}/>
      <Route path="/login" render = {() => <Login/>}/>
    </HashRouter>
  )
}

export default SpringApp
