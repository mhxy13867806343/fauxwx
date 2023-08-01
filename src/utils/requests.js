import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus';

//请求的逻辑
const {MODE,VITE_API_URL}=import.meta.env
let baseURL=''//请求地址
//development 开发 pre-release 预发布 production 生产
if(MODE==='development'||MODE==='pre-release'){
    baseURL=VITE_API_URL
}else{
    baseURL=VITE_API_URL
}
const service= axios.create({
    baseURL,//可以不要
    timeout: 10000,
    withCredentials: false, // send cookies when cross-domain requests
})
