<script setup>
import { useLocalStorage } from '@vueuse/core'
import {validateFormPassword} from '@/utils/validate/validateFormTools.js';
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
const loginChecked = 'loginChecked'
const formUserNane='formUserNane'
const isVersionDialog=ref(false)//版本内容
const checkedName = useLocalStorage(loginChecked, false)
const formUserNaneValue = useLocalStorage(formUserNane, '')
const versionList=ref([
		{
			"version": "0.1",
			"createTime": "2023-08-03",
			"content": [
				{
					"name": "Update A"
				},
				{
					"name": "Bug D"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-08-02",
			"content": [
				{
					"name": "Feature C"
				},
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-08-01",
			"content": [
				{
					"name": "Update A"
				},
				{
					"name": "Feature C"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-31",
			"content": [
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-07-30",
			"content": [
				{
					"name": "Bug D"
				},
				{
					"name": "Update A"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-29",
			"content": [
				{
					"name": "Feature C"
				},
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-07-28",
			"content": [
				{
					"name": "Update A"
				},
				{
					"name": "Feature C"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-27",
			"content": [
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-07-26",
			"content": [
				{
					"name": "Bug D"
				},
				{
					"name": "Update A"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-25",
			"content": [
				{
					"name": "Feature C"
				},
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-07-24",
			"content": [
				{
					"name": "Update A"
				},
				{
					"name": "Feature C"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-23",
			"content": [
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-07-22",
			"content": [
				{
					"name": "Bug D"
				},
				{
					"name": "Update A"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-21",
			"content": [
				{
					"name": "Feature C"
				},
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-07-20",
			"content": [
				{
					"name": "Update A"
				},
				{
					"name": "Feature C"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-19",
			"content": [
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-07-18",
			"content": [
				{
					"name": "Bug D"
				},
				{
					"name": "Update A"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-17",
			"content": [
				{
					"name": "Feature C"
				},
				{
					"name": "Fix B"
				}
			]
		},
		{
			"version": "0.1",
			"createTime": "2023-07-16",
			"content": [
				{
					"name": "Update A"
				},
				{
					"name": "Feature C"
				}
			]
		},
		{
			"version": "0.2",
			"createTime": "2023-07-15",
			"content": [
				{
					"name": "Fix B"
				}
			]
		}
	] )//更新历史数据
onMounted(()=>{
	getInitCheckedName()
})
//点击复选框保存用户名
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
// 提交表单
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

// 清除用户名
const onFromUserNameClear=()=>{
	form.username=''
	formUserNaneValue.value=null
	checkedName.value=false
}
</script>
<template>
	<div class="login-container">
		<div class="header">登录</div>
		<el-form ref="formRef" :model="form" label-width="80px" class="my-form"  status-icon
		         :rules="rules"
		>
			<el-form-item label="用户名" required size="large" prop="username">
				<el-input clearable v-model="form.username" class="my-input" @clear="onFromUserNameClear" />
			</el-form-item>
			<el-form-item label="密码" required prop="password" size="large">
				<el-input clearable v-model="form.password"  show-password type="password" class="my-input"></el-input>
			</el-form-item>
			<el-form-item size="large" label="设置">
			<el-checkbox v-model="checkedName"
			@click="onClickSaveForm(form.username)"
			>保存用户名</el-checkbox>
			</el-form-item>
			<el-form-item size="large">
				<el-button type="primary" size="large" class="my-button"
				@click="onSubmit(formRef)"
				>登录</el-button>
			</el-form-item>
		</el-form>
	</div>
	<el-link type="danger" @click="isVersionDialog=true">查看当前相关更新版本</el-link>
	<el-dialog v-model="isVersionDialog" title="版本内容">
		<ul>
			<li v-for="(item,index) in versionList" :key="index" class="pb-4">
				<h2 class="text-left py-1.5">
					当前版本为:{{item.version}}
				</h2>
				<span class="block text-left text-sm		">更新时间:{{  item.createTime}}</span>
				<div>
					<span  v-for="(c1,index2) in item.content" :key="index2"
					 class="block text-left text-sm w-screen p-0.5"
					>
						{{index2+1}}.{{ c1.name }}
					</span>
				</div>
				<el-divider border-style="dashed" />
			</li>
		</ul>
	</el-dialog>

</template>

<style scoped>
.login-container {
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
::v-deep(.el-form-item__error){
	width: 100%;
	text-align: center;
	padding: 4px;
}
.el-link{
	position: fixed;
	right: 30px;
	top: 20px;
}

</style>
<style lang="scss" scoped>
@import "@/style/base.scss"
</style>
