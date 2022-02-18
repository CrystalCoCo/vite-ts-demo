import http from "@/utils/http"

export function getArticleList(params) {
  return http.get('yi-website/public/byCondition', params)
}
export function getArticleList1(params) {
  return http.get('yi-website/public/label/list', params)
}
export function getArticleList2() {
  return http.get('yi-sharing/home/runningStatusUnauth')
}


export function login(params) {
  return http.post('account-center/login', params)
}
export function getInfo(params) {
  return http.post('account-center/member/info', params)
}