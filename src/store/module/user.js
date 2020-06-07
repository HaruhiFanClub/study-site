import {
  login,
  getUserInfo
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
          commit('setUserName', res.nickName) // 名字
          commit('setUserId', res.userId) // id
          commit('setAvatorImgPath', res.avatorImgPath) // 头像
          console.log(this.state)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.token).then(res => {
            const data = res.data
            commit('setToken', res.token) // token
            commit('setUserName', res.nickName) // 名字
            commit('setUserId', res.userId) // id
            commit('setAvatorImgPath', res.avatorImgPath) // 头像
            commit('setHasGetInfo', true)
            resolve(data)
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
