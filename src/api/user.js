import axios from '@/libs/api.request'
import Qs from 'qs'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: '/user/login',
    data: Qs.stringify(data),
    method: 'post'
  })
}

export const regist = data => {
  return axios.request({
    url: '/user/register',
    data: Qs.stringify(data),
    method: 'post'
  })
}

export const getNameByQQ = (QQ) => {
  return axios.request({
    url: 'https://r.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?g_tk=1518561325&uins=' + QQ,
    method: 'get'
  })
}

export const getAvatarByQQ = (QQ) => {
  return axios.request({
    url: 'http://q1.qlogo.cn/g?b=qq&s=100&t=1547904810&nk=' + QQ,
    method: 'get'
  })
}

export const getUsersByPage = ({ page, size }) => {
  return axios.request({
    url: '/study-site/get-users-by-page',
    params: {
      page,
      size
    },
    method: 'get'
  })
}

export const getTop3ScoreUsers = () => axios.request({
  url: '/study-site/get-top3-score-users',
  method: 'get'
})

// /study-site/get-user-info-by-id
export const getUserInfo = () => axios.request({
  url: '/study-site/get-user-info-by-id',
  params: {
    user_id: '123'
  },
  method: 'get'
})

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
