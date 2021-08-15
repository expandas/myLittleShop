import {makeAutoObservable} from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }
  setIsAuth() {
    this._isAuth = !this._isAuth
  }
  setUser (user) {
    this._user = user
  }
  get isAuth () {
    return this._isAuth
  }
  get user () {
    return this._user
  }
}