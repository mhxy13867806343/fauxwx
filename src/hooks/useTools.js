import { useClipboard } from "@vueuse/core";
import { ElMessage } from "element-plus";

export default ()=>{
    const isDrawer=ref(false)//右侧弹窗配置
    const versionMaxNum=100//最大值
    //复制
    const onClickCopy=(srd='')=>{
        const source=window.location.href||srd
        const {  text, copy, copied, isSupported} = useClipboard({ source })
        copy(source)
        ElMessage.success('复制链接成功')
        
    }
    return {
        isDrawer,
        versionMaxNum,
        onClickCopy
    }
}
