import { API_URL } from '@app/config/env'

export const apiFetch = async ({ method, endpoint, data, token = null }) => {
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