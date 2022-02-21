import http from "@/utils/http"

export function refreshToken(params) {   //刷新token
  return http.post('xxx', params)
}
export function reqLogout() {    //退出登录
  return http.post('xxx')
}
export function getAvatar() {   //获取头像
  return http.get('xxx')
}