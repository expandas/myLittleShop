import {$authHost, $host} from './index';

const typeUrl = '/api/type'
const brandUrl = '/api/brand'
const deviceUrl = '/api/device'

export const createType = async (type) => {
  const {data} = await $authHost.post(typeUrl, {name: type})
  return data
}

export const getTypes = async () => {
  const {data} = await $host.get(typeUrl)
  return data
}

export const createBrand = async (brand) => {
  const {data} = await $authHost.post(brandUrl, {name: brand})
  return data
}

export const getBrands = async () => {
  const {data} = await $host.get(brandUrl)
  return data
}

export const createDevice = async (device) => {
  const {data} = await $authHost.post('api/device', device)
  return data
}

export const getDevices = async (brandId, typeId, currentPage, limit = 3) => {
  const {data} = await $host.get(deviceUrl, {params: {
      brandId, typeId, currentPage, limit
    }
  })
  return data
}

export const getOneDevice = async (id) => {
  const {data} = await $host.get(deviceUrl + '/' + id)
  return data
}