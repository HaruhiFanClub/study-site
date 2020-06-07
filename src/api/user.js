import axios from '@/libs/api.request'
import Qs from 'qs'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login', // 这里填写请求的url地址
    data: Qs.stringify(data),
    method: 'post'
  })
}
