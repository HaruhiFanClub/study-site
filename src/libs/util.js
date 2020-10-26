import Cookies from 'js-cookie'
import config from '@/config'
const { title, cookieExpires } = config
export const TOKEN_KEY = 'token'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 30 })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const setLearningInfo = (data) => {
  Cookies.set('userLearningInfo', data, { expires: cookieExpires || 30 })
}

export const getLearningInfo = () => {
  const data = Cookies.get('userLearningInfo')
  if (data) return data
  else return false
}

export const getRouteTitleHandled = (route) => {
  const router = { ...route }
  const meta = { ...route.meta }
  let title = ''
  if (meta.title) {
    if (typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      title = meta.title(router)
    } else title = meta.title
  }
  meta.title = title
  router.meta = meta
  return router
}
export const showTitle = (item, vm) => {
  return (item.meta && item.meta.title) || item.name || false
}
/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem)
  const pageTitle = showTitle(handledRoute, vm)
  const resTitle = pageTitle ? `${title} - ${pageTitle}` : title
  window.document.title = resTitle
}

export const setId = (route) => {
  const router = { ...route }
  let id = ''
  if (router.id) {
    if (typeof router.id === 'function') {
      router.id.__titleIsFunction__ = true
      id = router.id(router)
    } else id = router.id
  }
  router.id = id
  return router
}
