import axios from 'axios'
const Url = 'http://127.0.0.1:7001'
import { ref } from 'vue'
import { Reject, Login } from '@/interface/userRequest'
interface getValidataCode {
  codeType: number,
  userName: string
}

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL

})
async function getValidataCode<T>(url: string) {
  const result = ref<T | null>(null)
  const errorData = ref(false)
  try {
    result.value = await instance.post(`${url}`,)
  } catch (error) {
    result.value = error.response.data
    errorData.value = true
  }
  return {
    result,
    errorData,
  }
}


class User {
  async getValidataCode<T>(data: getValidataCode) {
    const result = ref<T | null>(null)
    const errorData = ref(false)
    try {
      result.value = await instance.post(`${Url}/user/emailcode`, data)
    } catch (error) {
      result.value = error.response.data
      errorData.value = true
    }
    return {
      result,
      errorData,
    }
  }

  async reject<T>(data: Reject) {
    const result = ref<T | null>(null)
    const errorData = ref(false)
    try {
      result.value = await instance.post(`${Url}/user/register`, data)
    } catch (error) {
      result.value = error.response.data
      errorData.value = true
    }
    return {
      result,
      errorData,
    }
  }
  async login<T>(data: Login) {
    const result = ref<T | null>(null)
    const errorData = ref(false)
    try {
      result.value = await instance.post(`${Url}/user/login`, data)
    } catch (error) {
      result.value = error.response.data
      errorData.value = true
    }
    return {
      result,
      errorData,
    }
  }

}

export { User }