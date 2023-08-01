<script setup>
import {validateFormPassword} from '@/utils/validate/validateFormTools.js'
const form=reactive({
	username: '',
	password: ''
})
const formRef=ref(null)
const rules=reactive({
	username: [
		{required: true, message: '请输入用户名', trigger: 'blur'},
		{min: 6, max: 32, message: '长度在 6 到 32 个字符', trigger: 'blur'}
	],
	password: [
		{required: true,  trigger: 'blur',validator: (rules,values,cb)=>validateFormPassword(form,rules,values,cb)},
	]
})
const onSubmit=(formEl)=>{
	if (!formEl) return
	formEl.validate((valid) => {
		if (valid) {
			console.log('submit!')
		} else {
			console.log('error submit!')
			return false
		}
	})
}
</script>
<template>
	<div class="container">
		<div class="header">登录</div>
		<el-form ref="formRef" :model="form" label-width="80px" class="my-form"  status-icon
		         :rules="rules"
		>
			<el-form-item label="用户名" required size="large" prop="username">
				<el-input clearable v-model="form.username" class="my-input"></el-input>
			</el-form-item>
			<el-form-item label="密码" required prop="password">
				<el-input clearable v-model="form.password"  show-password type="password" class="my-input"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="large" class="my-button"
				@click="onSubmit(formRef)"
				>登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: rgb(48, 65, 86);
}

.header {
	font-size: 40px;
	
	padding-bottom: 10px;
	text-align: center;
}
.header{
	color: #fff;
}
.my-form {
	font-size: 20px;
	padding: 20px;
	border-radius: 5px;
	width: 40%;
	
}



.my-button {
	padding: 10px 20px;
}

.my-button {
	padding: 10px 20px;
	width: 100%;
}
.el-form-item__label{
	color: #fff;
}
</style>
