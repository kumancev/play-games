import axios, { Method, AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

const request = async <T>(
  method: Method,
  url?: string,
  params?: unknown
): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.request<T>({
      method,
      url,
      params,
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
      },
    })
    return response
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export default request
