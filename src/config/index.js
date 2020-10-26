export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'SOS孵化基地',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 30,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: '/api',
    pro: 'http://www.haruhifanclub.com/api' // TODO 实际的线上接口地址
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  },
  /**
   *
   */
  learningMeta: [
    {
      path: '',
      name: 'word',
      meta: {
        title: '文字创作方向',
        icon: 'mail'
      },
      id: 0,
      component: { render: h => h('router-view') },
      children: [
        {
          path: 'zatan',
          name: 'zatan',
          meta: {
            title: '杂谈创作',
            id: 0
          },
          id: 0,
          component: () => import('@/views/learning/zatan.vue')
        },
        {
          path: 'juben',
          name: 'juben',
          meta: {
            title: '脚本创作',
            id: 1
          },
          id: 1,
          component: () => import('@/views/learning/juben.vue')
        }
      ]
    },
    {
      path: '',
      name: 'android',
      meta: {
        title: 'android',
        icon: 'mail'
      },
      id: 1,
      component: { render: h => h('router-view') },
      children: [
        {
          path: 'android',
          name: 'android',
          meta: {
            title: 'Android',
            id: 2
          },
          id: 2,
          component: () => import('@/views/learning/android.vue')
        }
      ]
    }
  ]
}
