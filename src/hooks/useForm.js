import { formUserNane , loginChecked } from "@/utils/cache-pc/c-pc.js";
import { validateFormPassword } from "@/utils/validate/validateFormTools.js";
import { useLocalStorage } from "@vueuse/core";
import { ElMessage } from "element-plus";
export default ()=>{
    //用户名和密码
    const form=reactive({
        username: '',
        password: ''
    })
    const formRef=ref(null)//表单验证domref
    const checkedName = useLocalStorage(loginChecked, false)
    const formUserNaneValue = useLocalStorage(formUserNane, '')
    onMounted(()=>{
        getInitCheckedName()
    })
    //表单验证对应prop名称
    const rulesValidator=reactive({
        username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'}
        ],
        password: [
            {required: true,  trigger: 'blur',validator: (rules,values,cb)=>validateFormPassword(form,rules,values,cb)},
        ]
    })
    watch(()=>checkedName.value,(k,v)=>{
        if(k){
            if(formUserNaneValue.value?.length){
                form.username=formUserNaneValue.value
            }
           
        }else{
            form.username=''
        }
    },{
        deep:true
    })
    const onClickSaveForm = (initialValue ) => {
        if(!initialValue.length){
            return
        }
        checkedName.value!=checkedName.value
        formUserNaneValue.value=initialValue
        return checkedName.value
    }
// 获取初始化用户名
    const getInitCheckedName = () => {
        if(checkedName.value){
            if(formUserNaneValue.value.length){
                form.username=formUserNaneValue.value
            }
            return ''
        }
    }
    // 清除用户名
    const onFromUserNameClear=()=>{
        form.username=''
        formUserNaneValue.value=null
        checkedName.value=false
    }
    //点击复选框保存用户名
// 提交表单
    const onSubmit=(formEl)=>{
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                console.log('submit!')
            } else {
                ElMessage.error('请完善信息!!')
                return false
            }
        })
    }
    const onFromUserNameBlur=()=>{
        if(form.username.length){
            formUserNaneValue.value=form.username
        }
    }
    return {
        form ,
        formRef,
        rulesValidator,
        checkedName,
        formUserNaneValue,
        onClickSaveForm,
        onFromUserNameClear,
        onSubmit,
        onFromUserNameBlur
    }
}
