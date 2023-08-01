import { passwordPattern } from "../tools/regTools.js";

// 验证表单密码
export const validateFormPassword = (form,rule, value, callback) => {
    if (!value.length) {
        return callback(new Error('请输入密码'))
    } if(!passwordPattern.test(form.password)){
        return callback(new Error('密码必须以字母开头'))
    }if (form.password.length<6 || form.password.length>32) {
        return callback(new Error('密码长度在 6 到 32 个字符'))
    }
    callback()
}
