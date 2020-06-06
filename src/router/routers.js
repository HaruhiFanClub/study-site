import MainView from '@/layout/Main'

export default [
  {
    path: '/',
    name: 'Home',
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
        path: '/projects',
        name: 'projects',
        meta: {
          title: '项目'
        },
        component: () => import('@/views/main/projects.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  }
]
