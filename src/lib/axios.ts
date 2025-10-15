import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEWS_API_BACKEND_URL,
  headers: { 'Content-Type': 'application/json', 'X-Api-Key': process.env.NEWS_API_KEY }
})

export default instance
