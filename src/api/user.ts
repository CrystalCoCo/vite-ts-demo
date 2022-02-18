import http from "@/utils/http"

export function refreshToken(params) {   //刷新token
  return http.post('account-center/refresh/token', params)
}
export function reqLogout() {    //退出登录
  return http.post('account-center/logout')
}
export function getAvatar() {   //获取头像
  return http.get('account-center/member/info')
}