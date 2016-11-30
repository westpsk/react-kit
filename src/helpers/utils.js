import { LOGIN, HOSTNAME } from 'CommonVal'

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const isLoginRes = (store) => {
	const { isLogin } = store.getState().get('user')
	return isLogin
}

export const goToLoginPage = (nextPathName) => {
	window.location.href = LOGIN.VERIFY + HOSTNAME + LOGIN.BACKURL + nextPathName
}

//创建cookie
export const setCookie = (name, value, expireday) => {
	let exp = new Date();
	exp.setTime(exp.getTime() + expireday*24*60*60*1000); //设置cookie的期限
	document.cookie = name+"="+escape(value)+"; expires"+"="+exp.toGMTString()+"; path=/";//需要指定path，否则相同domain,不同的path，会被存为不同的k-v
}

//提取cookie中的值
export const getCookie = (name) => {
	let cookieStr = document.cookie;
	if(cookieStr.length > 0) {
		let cookieArr = cookieStr.split(";"); //将cookie信息转换成数组
		for (let i=0; i<cookieArr.length; i++) {
			let cookieVal = cookieArr[i].split("="); //将每一组cookie(cookie名和值)也转换成数组
			if(cookieVal[0] == name) {
				return unescape(cookieVal[1]); //返回需要提取的cookie值
			}
		}
	}
}

//删除cookie中的值
export const delCookie = (name) => { 
  var exp = new Date(); 
  exp.setTime(exp.getTime() - 1); 
  var cval=getCookie(name); 
  if(cval!=null){ 
    document.cookie= name + "="+cval+";expires="+exp.toGMTString()+"; path=/";
	} 
}