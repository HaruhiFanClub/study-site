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
      if (!(data instanceof Blob)) {
        // 判断服务端状态码，处理逻辑
      }
      return data
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      Message.error('服务内部错误，请查看日志')
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
