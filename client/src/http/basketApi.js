import {$authHost} from './index';

const basketUrl = '/api/basket'

export const getBasket = async () => {
  const {data} = await $authHost.get(basketUrl)
  return data
}

export const addToCart = async (deviceId) => {
  const {data} = await $authHost.post(basketUrl, {deviceId})
  return data
}

export const deleteFromCart = async (deviceId) => {
  const {data} = await $authHost.delete(basketUrl, {data: {deviceId}})
  return data
}