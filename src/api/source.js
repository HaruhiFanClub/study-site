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

export const publishMaterial = (materialInfo) => {
  return axios.request({
    url: '/study-site/publish-material',
    params: {
      title: materialInfo.title,
      content: materialInfo.content,
      QQ: materialInfo.QQ,
      intro: materialInfo.intro,
      tags: materialInfo.tags,
      license: materialInfo.license
    },
    method: 'get'
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
