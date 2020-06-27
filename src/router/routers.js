import MainView from '@/layout/Main'
import MyView from '@/layout/My'

/**
 * 额外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *  icon: (-) 该页面在导航处显示的图标，图标库地址 https://www.antdv.com/components/icon-cn/#components-icon-demo-use-iconfont.cn
 * }
 */

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
    path: '/my',
    name: 'My',
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
  }
]
