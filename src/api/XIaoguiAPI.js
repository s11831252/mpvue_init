import http_axios from '../utils/http/axios'
const http = http_axios;

let BaseHost =process.env.NODE_ENV == 'development'? "http://192.168.0.85:826/":"https://live.ujianchina.net/xiaogui/"; 
// let BaseHost = "https://market.ujianchina.net/";
 // let BaseHost = http://192.168.0.86:811/ 请求师傅的后台
// let BaseHost = "http://192.168.0.119:811/";   //请求公司的内网

export default {
    BaseHost,
    //获取小桂数据
    XiaoGui_Get: () => {
        return http.get(BaseHost + "api/XiaoGui/Get")
    },
    XiaoGui_post: param => {
        return http.post(BaseHost + "api/XiaoGui/post",param)
    },
}