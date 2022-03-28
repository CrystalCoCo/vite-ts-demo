import { get, post } from "@/utils/request"

export function refreshToken(params) {   //刷新token
  return post('xxx', params)
}
export function reqLogout() {    //退出登录
  return post('xxx')
}
export function getAvatar() {   //获取头像
  return get('xxx')
}