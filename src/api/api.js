import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:7542/'
})

export const projectsAPI = {
  getProjects () {
    return instance.get('projects')
  }
}

export const authAPI = {
  login (login, password) {
    return instance.post('login', { login, password })
  }
}
