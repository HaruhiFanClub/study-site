import axios from '@/libs/api.request'
// import Qs from 'qs'
import sourcetList from '@/mock/source'

// export const getProjectList = data => {
//   return axios.request({
//     url: '/project/getProjectList',
//     data: Qs.stringify(data),
//     method: 'post'
//   })
// }

export const getSourcetList = data => {
  return new Promise((resolve, reject) => {
    resolve(sourcetList)
  })
}

export const publishMaterial = (material) => {
  return axios.request({
    url: '/study-site/publish-material',
    params: {
      token: material.token,
      title: material.title,
      content: material.content,
      qq: material.QQ,
      intro: material.intro,
      tags: material.tags,
      license: material.license,
      file: material.file,
      url: material.url
    },
    method: 'post'
  })
}

export const getMaterialById = (id) => {
  return axios.request({
    url: '/study-site/getMaterial-by-id',
    params: {
      id
    },
    method: 'get'
  })
}
