import Cookies from 'js-cookie'
import {
  login,
  regist
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    hasGetInfo: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setUserName (state, val) {
      state.userName = val
    },
    setUserId (state, val) {
      state.userId = val
    },
    setAvatorImgPath (state, val) {
      state.avatorImgPath = val
    },
    setHasGetInfo (state, val) {
      state.hasGetInfo = val
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, formValue) {
      let { username: userName, password } = formValue
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          // 登录失败
          if (!res || !res.token) {
            reject(new Error('服务器没有返回token'))
            return false
          }
          // 登录成功，执行登录后操作
          commit('setToken', res.token) // token
          commit('setUserName', res.userName) // 名字
          commit('setUserId', res.userId) // id
          commit('setAvatorImgPath', res.avatorImgPath) // 头像
          Cookies.set('userInfo', res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          const userInfo = JSON.parse(Cookies.get('userInfo'))
          commit('setUserName', userInfo.userName) // 名字
          commit('setUserId', userInfo.userId) // 名字
          commit('setAvatorImgPath', userInfo.avatorImgPath) // 头像
          commit('setHasGetInfo', true)
          resolve(userInfo)
        } catch (error) {
          reject(error)
        }
      })
    },
    handleLogout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setToken', '')
        commit('setHasGetInfo', false)
        resolve()
      })
    },
    handleRegist ({ commit }, formValue) {
      return new Promise((resolve, reject) => {
        try {
          regist(formValue).then(res => {
            commit('setToken', res.token) // token
            commit('setUserName', res.userName) // 名字
            commit('setUserId', res.userId) // id
            commit('setAvatorImgPath', res.avatorImgPath) // 头像
            Cookies.set('userInfo', res)
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
