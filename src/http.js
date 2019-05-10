import axios from 'axios'
import { Loading, Message } from 'element-ui'
import rouer from './router'

let loading

function startLoading() {
  loading = Loading.service({
    lock: true,
    text: "玩命加载中...",
    background: 'rgba(0,0,0,.7)'
  })
}

function endLoading() {
  loading.close()
}

// 请求拦截
axios.interceptors.request.use(
  config => {
    startLoading()
    if (localStorage.userToken) {
      // 设置统一的请求头
      config.headers.Authorization = localStorage.userToken
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  response => {
    endLoading()
    return response
  },
  error => {
    endLoading()
    Message.error(error.response.data)
    const { status } = error.response
    if(status === 401){ // 401 代表 token 失效, 需要重新登录, 同时删除本地 token, 回到登录页面
      Message.error("token 已失效, 请重新登录!")
      localStorage.removeItem("userToken")
      rouer.push("/login")
    }
    return Promise.reject(error)
  }
)


export default axios;