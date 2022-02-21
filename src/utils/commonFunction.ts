// 公共方法
import { refreshToken } from '@/api/user'
import { decode } from 'js-base64'
//cookie获取
let sd: number, end: number
export function getCookie(name: string): string {
  let search: string = name + "="//查询检索的值
  let returnvalue: string = ""//返回值
  if(document.cookie.length > 0) {
    sd = document.cookie.indexOf(search)
    if(sd != -1) {
      sd += search.length
      end = document.cookie.indexOf(";", sd)
      if(end == -1)
        end = document.cookie.length
        returnvalue = unescape(document.cookie.substring(sd, end))
    }
  }
  return returnvalue
}

//存cookie
export function setCookie(name: string, value: string | number, time: Date) {
  document.cookie=`${name}=${value};expires=${time['toGMTString']()};path=/;domain=${import.meta.env.VITE_APP_BASEURL as any}`//用cookie来跨域
}

//清空cookie值
export function expireTime(name: string) {
  //获取当前时间
  let date: Date = new Date()
  //将date设置为过去的时间
  date.setTime(date.getTime()-1)
  //将userId这个cookie删除
  document.cookie=`${name}=;expire=${date['toGMTString']()};path=/;domain=${import.meta.env.VITE_APP_BASEURL as any}`
}

export function clearInterVal(){
  clearInterval(interval)
}

//刷新token
const getRefreshToken = async(param: string) => { // 刷新token 注意这里用到的service
  const { data, code }  = await refreshToken({ refreshToken: param })
  if(code === '0000') return data
}
//刷新token,每5分钟刷下定时器,判断如果离过期时间不到10分钟,就重新拿token
type RefreshReponseConfig = {
    access_token: string,
    expires_in: string,
    jti: string,
    refresh_token: string,
    scope: string,
    token_type: string
}
let interval = null
export function isRefreshTokenExpired() {
  let token = getCookie('ZhongTai')
  if(token) {
    interval = setInterval(() => {
      let recentTime: number = new Date().getTime()
      let loginTime: string = getCookie('login_time')
      let expiresIn: number = parseInt(getCookie('expires_in'))
      // if(true) {
      if(parseInt(loginTime) + expiresIn * 1000 - 1200000 < recentTime) {
        let refresh_token = getCookie('refreshToken')
        getRefreshToken(refresh_token).then((data: RefreshReponseConfig) => {
          let date = new Date()
          //将date设置为过期时间 1h
          date.setTime(date.getTime()+1000*60*60)
          //重新赋值过期时间,登录时间(更新时间)
          setCookie('expires_in', data.expires_in, date)
          //login_time
          let reLoginTime: number = new Date().getTime()
          setCookie('login_time', reLoginTime, date)
          //ZhongTai
          setCookie('ZhongTai', data.token_type + ' ' + data.access_token, date)
          //refreshToken
          setCookie('refreshToken', data.refresh_token, date)
          // user_login_info
          setCookie('user_login_info', decode(data.access_token.split('.')[1]), date)
        })        
      }
    }, 300000)  //300000
  }
}


