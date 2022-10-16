import URL from './api'

const key = process.env.REACT_APP_KEY

export async function getSearchVideos(value) {
  return await URL.get(`search?part=id,snippet&q=${value}&key=${key}`, {
    params: {
      maxResults: 8,
    },
  }).then((response) => response)
}

export async function getDetailsVideos(id) {
  return await URL.get(`videos?id=${id}&part=snippet,statistics&key=${key}`).then((response) => response)
}

export async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}