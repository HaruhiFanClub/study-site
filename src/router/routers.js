import MainView from '@/layout/Main'
import MyView from '@/layout/My'
import config from '@/config'
import { getLearningInfo } from '@/libs/util'
const { learningMeta } = config

/**
 * 额外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *  icon: (-) 该页面在导航处显示的图标，图标库地址 https://www.antdv.com/components/icon-cn/#components-icon-demo-use-iconfont.cn
 * }
 * id: Number   //仅在learning页面适用
 */

// 学习方向详细内容交由前端管理

export default [
  {
    path: '/',
    component: MainView,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/main/home.vue')
      },
      {
        path: '/study',
        name: 'study',
        meta: {
          title: '学习'
        },
        component: () => import('@/views/main/study.vue')
      },
      {
        path: '/study-list',
        name: 'study-list',
        meta: {
          title: '学习名单'
        },
        component: () => import('@/views/main/study-list.vue')
      },
      {
        path: '/learning/submit',
        name: 'submit',
        meta: {
          title: '提交任务'
        },
        component: () => import('@/views/main/submit.vue')
      },
      {
        path: '/projects',
        name: 'projects',
        meta: {
          title: '项目'
        },
        component: () => import('@/views/main/projects.vue')
      },
      {
        path: '/project/post/:id',
        name: 'project-post',
        meta: {
          title: '项目详情'
        },
        component: () => import('@/views/main/project-post.vue')
      },
      {
        path: '/create-project',
        name: 'create-project',
        meta: {
          title: '立项'
        },
        component: () => import('@/views/main/create-project.vue')
      },
      {
        path: '/source',
        name: 'source',
        meta: {
          title: '公共素材'
        },
        component: () => import('@/views/main/source.vue')
      },
      {
        path: '/source/post/:id',
        name: 'source-post',
        meta: {
          title: '素材详情'
        },
        component: () => import('@/views/main/source-post.vue')
      },
      {
        path: '/create-source',
        name: 'create-source',
        meta: {
          title: '素材上传'
        },
        component: () => import('@/views/main/create-source.vue')
      },
      {
        path: '/signup-learn',
        name: 'signup-learn',
        meta: {
          title: '报名学习'
        },
        component: () => import('@/views/main/signup-learn.vue')
      },
      {
        path: '/signup-project',
        name: 'signup-project',
        meta: {
          title: '报名项目'
        },
        component: () => import('@/views/main/signup-project.vue')
      },
      {
        path: '/submit',
        name: 'submit',
        meta: {
          title: '提交任务'
        },
        component: () => import('@/views/main/submit.vue')
      }
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: MyView,
    meta: {
      title: '我的'
    },
    children: [
      {
        path: 'index',
        name: 'my-index',
        meta: {
          title: '我的孵化计划',
          icon: 'home'
        },
        component: () => import('@/views/my/index.vue')
      },
      {
        path: 'study',
        name: 'my-study',
        meta: {
          title: '我的学习',
          icon: 'mail'
        },
        component: () => import('@/views/my/study.vue')
      },
      {
        path: 'projects',
        name: 'my-projects',
        meta: {
          title: '我的项目',
          icon: 'line-chart'
        },
        component: () => import('@/views/my/projects.vue')
      },
      {
        path: 'source',
        name: 'my-source',
        meta: {
          title: '我的素材',
          icon: 'profile'
        },
        component: () => import('@/views/my/source.vue')
      },
      {
        path: 'points',
        name: 'my-points',
        meta: {
          title: '我的积分',
          icon: 'flag'
        },
        component: () => import('@/views/my/points.vue')
      }
    ]
  },
  {
    path: '/learning',
    name: 'learning-index',
    meta: {
      title: '学习方案'
    },
    component: () => import('@/views/learning/index.vue'),
    children: learningMeta
  },
  {
    path: '/learning/mine',
    name: 'learning-mine',
    meta: {
      title: '开始学习'
    },
    component: () => import('@/views/learning/mine.vue'),
    children: (() => {
      let routes = null
      if (getLearningInfo()) {
        const userLearningInfo = JSON.parse(getLearningInfo())
        console.log(userLearningInfo)
        const directions = userLearningInfo.directions
        const subjects = userLearningInfo.subjects
        routes = directions.map(userDirectionItem => {
          const directionObj = learningMeta[userDirectionItem.direction_id]
          directionObj.children = (() => {
            const subjectList = []
            learningMeta[userDirectionItem.direction_id].children.forEach(subjectItem => {
              subjects.forEach(userSubjectItem => {
                if (subjectItem.id === userSubjectItem.subject_id) {
                  subjectList.push(subjectItem)
                }
              })
            })
            return subjectList
          })()
          return directionObj
        })
      }
      return routes
    })()
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    name: 'notfound',
    path: '/404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
