// import axios from '@/libs/api.request'
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
