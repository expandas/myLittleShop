import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = []
    this._brands = []
    this._devices = []
    this._selectedType = {}
    this._selectedBrand = {}
    this._currentPage = 1
    this._totalDevices = 0
    this._limitOnPage = 3

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
    this.selectedType === type ? this.setSelectedType([]) : this._selectedType = type
    this.setCurrentPage = 1
  }
  setSelectedBrand(brand){
    this.selectedBrand === brand ? this.setSelectedBrand([]) : this._selectedBrand = brand
    this.setCurrentPage = 1
  }
  setCurrentPage(page){
    this._currentPage = page
  }
  setTotalDevices(total){
    this._totalDevices = total
  }
  setLimitOnPage(limit){
    this._limitOnPage = limit
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
  get currentPage () {
    return this._currentPage
  }
  get totalDevices () {
    return this._totalDevices
  }
  get limitOnPage () {
    return this._limitOnPage
  }
}

