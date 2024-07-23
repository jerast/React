const API_URL = import.meta.env.VITE_API_PATH ?? 'http://localhost:1234'

export const apiFetch = async (method, endpoint, data, token) => {
  const url = `${API_URL}${endpoint}`
  let headers = {}
  let body

  if (method !== 'GET') {
    headers['Content-Type'] = 'application/json'
    body = JSON.stringify(data)
  }

  if (token) {
    headers['x-token'] = token
  }

  const response = await fetch( url, { method, headers, body })
  return await response.json()
}