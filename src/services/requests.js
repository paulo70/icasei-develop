import URL from './api'

const key = process.env.REACT_APP_KEY

// REQUEST TO GET VIDEOS
export async function getSearchVideos(
  value,
  nextPageToken,
  limit = 50,
  type = 'video',
  part = 'snippet') {

  const params = `search?part=${part}&q=${value}&key=${key}&maxResults=${limit}&type=${type}` +
    (nextPageToken ? `&pageToken=${nextPageToken}` : "")

  return await URL.get(params).then((response) => response)
}

// REQUEST TO GET DETAILS VIDEOS
export async function getDetailsVideos(id) {
  return await URL.get(`videos?id=${id}&part=snippet,statistics&key=${key}`).then((response) => response)
}


// POST TO RECEIVE TOKEN
export async function loginUser(credentials) {
  localStorage.setItem('user', JSON.stringify(credentials))
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}