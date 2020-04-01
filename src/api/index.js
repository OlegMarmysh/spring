import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3001/'
  baseURL: 'https://banana-tart-40503.herokuapp.com//'
})

export const projectsAPI = {
  getProjects () {
    return instance.get('projects')
  },
  searchProjects (inputValue) {
    return instance.get(`search-projects?value=${inputValue}`)
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
