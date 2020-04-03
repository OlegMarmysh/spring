import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://banana-tart-40503.herokuapp.com//'
})
const getToken = () => {
  return { Authorization: `Bearer ${localStorage.getItem('token')}` }
}
export const projectsAPI = {
  getProjects () {
    return instance.get('projects', {
      headers:
          getToken()
    })
  },
  searchProjects (inputValue) {
    return instance.get(`projects?value=${inputValue}`, {
      headers:
          getToken()
    })
  }
}

export const authAPI = {
  login (login, password) {
    return instance.post('login', { login, password })
  },
  register (login, password) {
    return instance.post('register', { login, password })
  }
}
