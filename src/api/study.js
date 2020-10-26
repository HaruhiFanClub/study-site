import axios from '@/libs/api.request'

export const getAllDirections = () => {
  return axios.request({
    url: '/study-site/get-all-directions',
    method: 'get'
  })
}

export const getAllSubjects = () => {
  return axios.request({
    url: '/study-site/get-all-subjects',
    method: 'get'
  })
}

export const getSubjectsByUser = (token) => {
  return axios.request({
    url: '/study-site/get-subjects-by-user',
    params: {
      token
    },
    method: 'get'
  })
}

export const getMissions = () => {
  return axios.request({
    url: '/study-site/get-missions',
    method: 'get'
  })
}

export const getMissionInfoByUserAndSubject = (user) => {
  return axios.request({
    url: '/study-site/get-mission-info-by-user-and-subject',
    params: {
      user_id: user.user_id,
      subject: user.subject_id
    },
    method: 'get'
  })
}

export const signUpForLearning = ({ user }) => {
  return axios.request({
    url: '/study-site/sign-up-for-learning',
    params: {
      subject_id: user.subject_id,
      token: user.token
    },
    method: 'get'
  })
}
