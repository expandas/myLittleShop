import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: "Холодильники"},
      {id: 2, name: "Смартфоны"},
      {id: 3, name: "Ноутбуки"},
    ]
    this._brands = [
      {id: 1, name: "Samsung"},
      {id: 2, name: "Apple"},
      {id: 3, name: "Huawei"},
      {id: 4, name: "LG"},
      {id: 5, name: "Lenovo"},
      {id: 6, name: "Ariston"},
    ]
    this._devices = [
      {id: 1, name: "Samsung A52", price: 1000, rating: 4, image: 'https://store77.net/upload/iblock/010/010429c1273ece8f52eca2cb43ada9c2.jpeg'},
      {id: 2, name: "Samsung A-52", price: 1100, rating: 5, image: 'https://store77.net/upload/iblock/010/010429c1273ece8f52eca2cb43ada9c2.jpeg'},
      {id: 3, name: "Iphone X", price: 1500, rating: 5, image: 'https://static.re-store.ru/upload/resize_cache/iblock/f8b/1160_880_17f5c944b3b71591cc9304fac25365de2/f8b9b92009a23e99a9118f3379e15aca.jpg'},
      {id: 4, name: "Iphone X", price: 1500, rating: 5, image: 'https://static.re-store.ru/upload/resize_cache/iblock/f8b/1160_880_17f5c944b3b71591cc9304fac25365de2/f8b9b92009a23e99a9118f3379e15aca.jpg'},
      {id: 5, name: "Iphone X", price: 1500, rating: 5, image: 'https://static.re-store.ru/upload/resize_cache/iblock/f8b/1160_880_17f5c944b3b71591cc9304fac25365de2/f8b9b92009a23e99a9118f3379e15aca.jpg'},
      {id: 6, name: "Iphone X", price: 1500, rating: 5, image: null},
    ]
    this._selectedType = {}
    this._selectedBrand = {}

    makeAutoObservable(this)
  }
  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type){
    this._selectedType = type
  }
  setSelectedBrand(brand){
    this._selectedBrand = brand
  }
  get types () {
    return this._types
  }
  get brands () {
    return this._brands
  }
  get devices () {
    return this._devices
  }
  get selectedType () {
    return this._selectedType
  }
  get selectedBrand () {
    return this._selectedBrand
  }
}

