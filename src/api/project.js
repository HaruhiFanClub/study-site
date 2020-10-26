import axios from '@/libs/api.request'
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

export const createProject = (projectInfo) => {
  return axios.request({
    url: '/study-site/create-project',
    params: {
      title: projectInfo.title,
      content: projectInfo.content,
      QQ: projectInfo.QQ,
      intro: projectInfo.intro,
      recruitment: projectInfo.recruitment,
      recruitmentIntro: projectInfo.recruitmentIntro,
      recruitmentList: projectInfo.recruitmentList,
      tags: projectInfo.tags,
      sourceList: projectInfo.sourceList
    },
    method: 'get'
  })
}

export const getProjectById = (id) => {
  return axios.request({
    url: '/study-site/get-project-by-id',
    params: {
      id
    },
    method: 'get'
  })
}

export const signUpForProject = ({ signUpMeta }) => {
  return axios.request({
    url: '/study-site/sign-up-for-project',
    params: {
      QQ: signUpMeta.QQ,
      job: signUpMeta.job,
      project_id: signUpMeta.project_id
    },
    method: 'get'
  })
}
