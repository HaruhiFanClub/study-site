import axios from '@/libs/api.request'
import Qs from 'qs'
import user from '@/mock/user.json'

export const login = ({ userName, password }) => {
  // const data = {
  //   userName,
  //   password
  // }
  // return axios.request({
  //   url: 'login', // 这里填写请求的url地址
  //   data: Qs.stringify(data),
  //   method: 'post'
  // })
  return new Promise((resolve, reject) => {
    resolve(user)
  })
}

export const examplePost = data => {
  return axios.request({
    url: 'example post url', // 这里填写请求的url地址
    data: Qs.stringify(data),
    method: 'post'
  })
}

export const exampleGet = () => axios.request({
  url: 'example get url',
  method: 'get'
})
