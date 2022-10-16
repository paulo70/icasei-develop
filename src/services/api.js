import axios from 'axios'

const API = axios.create()

API.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/'

API.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export default API
