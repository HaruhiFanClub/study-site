// import axios from '@/libs/api.request'
// import Qs from 'qs'
import projectList from '@/mock/projects'

// export const getProjectList = data => {
//   return axios.request({
//     url: '/project/getProjectList',
//     data: Qs.stringify(data),
//     method: 'post'
//   })
// }

export const getProjectList = data => {
  return new Promise((resolve, reject) => {
    resolve(projectList)
  })
}
