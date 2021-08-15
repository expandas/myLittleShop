import {$authHost, $host} from './index';
import jwtDecode from 'jwt-decode';

const registrationUrl = '/api/user/registration'
const loginUrl = '/api/user/login'
const checkUrl = '/api/user/auth'

export const registration = async (email, password) => {
  const {data} = await $host.post(registrationUrl, {email, password, role: 'ADMIN'})
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post(loginUrl, {email, password })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const check = async () => {
  const {data} = await $authHost.get(checkUrl)
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}
