import axios from 'axios'
import store from '@/store'
import Cookies from 'js-cookie'
import { Message } from 'ant-design-vue'
import { TOKEN_KEY } from '@/libs/util'

const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  const info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'X-URL-PATH': location.pathname
      }
    }
    return config
  }

  destroy (url) {
    delete this.queue[url]
  }

  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      if (!Object.keys(this.queue).length) {
        // 设置加载loading 不建议使用，因为界面不友好
      }
      if (!config.url.includes('/users')) {
        config.headers['x-access-token'] = Cookies.get(TOKEN_KEY)
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data } = res
      return data
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      const errorInfoMsg = errorInfo.data.msg
      if (errorInfoMsg) {
        // 服务端返回的正常报错信息
        Message.error(`${errorInfo.status}: ${errorInfoMsg}`)
      } else if (errorInfo) {
        // 服务端返回的异常报错信息
        Message.error('服务器内部错误')
        addErrorLog(errorInfo) // 存储异常信息
      } else {
        Message.error('服务器内部错误')
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
        addErrorLog(errorInfo) // 存储异常信息
      }
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
