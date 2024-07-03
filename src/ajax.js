import axios from 'axios'
import config from './config.js'

let singleton = null // a singleton instance of axios that the default init function returns

// note the 'async' keyword, it allows us to call 'await' later
export default async () => {
  if (!singleton) {
    const tokenURL = `${config.url}/session/token?_format_json`
    try {
      const response = await axios.get(tokenURL, {
        // mode: 'no-cors',
        withCredentials: true // required to send auth cookie
      })
      const csrf_token = response.data
      singleton = axios.create({
        // mode: 'no-cors',
        baseURL: `${config.url}`, // every request is relative to this URL
        withCredentials: true, // include auth cookie in every request
        headers: {
          'X-CSRF-Token': csrf_token,
          'Content-Type': 'application/json'
        }
        // params: { _format: 'json' }, // add these query params to every request
      })
      //   console.log('Created new axios instance', singleton)
    } catch (error) {
      console.log('ajax error')
      // console.error(error)
    }
  }
  return singleton
}
