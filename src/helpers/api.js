import axios from 'axios'

/*
* 在调用接口之后都会走interceptors.response方法，服务端返回状态为-4时，调用reject
* 在action中调用catch方法弹窗提示错误
*/
axios.interceptors.response.use(function (response) {
  if(response.data.code == -4){
    return Promise.reject(response.data.message)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default {
  login(data) {
    return axios({
      url: '/api/auth',
      method: 'post',
      data: { data: data }
    }).then(_res => {
        return _res.data
      })
  },

  logout() {
    return axios({
      url: '/api/auth',
      method: 'delete'
    }).then(_res => {
      return _res.data
    })
  }
}
