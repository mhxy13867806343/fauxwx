//定时器相关
import { ElMessage } from "element-plus";

export default ()=>{
    let versionTimer=null//更新版本定时器
    const onClickTimerUpdateBtnOk=(cb)=>{
        versionTimer=setInterval(()=>{
           cb?.()
           
        },1000)
    }
    
    return {
        versionTimer,
        
    }
}
