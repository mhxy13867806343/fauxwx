import { ElMessage , ElMessageBox } from "element-plus";
export default ()=>{
    const isUpdateDialogVisible=ref(false)//更新操作
    const numUpdate=ref(0)//更新进度
    const isVersionDialog=ref(false)//版本内容
    let versionTimer=null//更新版本定时器
    let versionMaxNum=100//更新最大值为100
//更新操作
    const onClickUpdateBtn=()=>{
        isUpdateDialogVisible.value=true
    }
//取消更新
    const onUpdateClickCancel=()=>{
        //已经在更新了的情况下
        if(numUpdate.value>0&&numUpdate.value<=versionMaxNum){
            ElMessageBox.confirm(
                    '当前更新已在更新中，是否要取消?,如果已取消的话，之前的更新进度将不存在!!!',
                    '提示',
                    {
                        confirmButtonText: '同意',
                        cancelButtonText: '取消',
                        type: 'warning',
                    }
                )
                .then(() => {
                    ElMessage({
                        type: 'success',
                        message: '已取消',
                    })
                    clearInterval(versionTimer)
                    isUpdateDialogVisible.value=false
                    numUpdate.value=0
                })
                .catch(() => {
                    ElMessage({
                        type: 'warning',
                        message: '未取消更新至最新版本',
                    })
                })
            return
        }
        isUpdateDialogVisible.value=false
        ElMessage.error('已更新新版本')
    }
//进行更新操作
    const onClickUpdateBtnOk=()=>{
        if(numUpdate.value>0&&numUpdate.value<=versionMaxNum.value){
            ElMessage.info(`正在更新版本中....`)
            numUpdate.value=0
            return
        }
        versionTimer=setInterval(()=>{
            if(numUpdate.value>versionMaxNum){
                clearInterval(versionTimer)
                onUpdateClickCancel()
            }else{
                numUpdate.value+=1
            }
            
        },1000)
    }
    return {
        versionMaxNum,
        isUpdateDialogVisible,
        numUpdate,
        isVersionDialog,
        versionTimer,
        onClickUpdateBtn,
        onUpdateClickCancel,
        onClickUpdateBtnOk
    }
}
