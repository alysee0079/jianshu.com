import axios from 'axios'
import * as constants from './constants'

const changeLogin = (value) => {
  return {
    type: constants.CHANGE_LOGIN,
    value
  }
}

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
      if (res.data.data) {
        dispatch(changeLogin(res.data.data))
      } else {
        alert('登陆失败')
      }
    })
  }
}

export const logout = () => {
  return {
    type: constants.CHANGE_LOGOUT,
    value: false
  }
}