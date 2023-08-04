<script setup>
import { useClipboard , useLocalStorage } from '@vueuse/core'
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
	getversionList()
})
const getversionList=()=>{
	const l=versionList.value
	return l.map(item=>{
		item.activeName='1'
		item.isActiveName=false
		item.inputForm=''
		item.isForm=''
		item.userName=''
	})
}
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
//复制
const onClickCopy=()=>{
	const source=window.location.href
	const {  copy } = useClipboard({ source })
	copy(source)
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
			<div class="pr-3 flex">
				<p  class="flex align-baseline pl-14 items-center	">
					<el-link href="https://github.com/mhxy13867806343">
					<span class="text-zinc-50 text-sm items-center	pr-1.5">github</span>
					<svg class="text-zinc-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
					</el-link>
				</p>
				<p  class="flex align-baseline pl-14 items-center	">
					<el-link href="https://juejin.cn/user/1310273588955581">
					<span class="text-zinc-50 text-sm items-center	pr-1.5">掘金</span>
					<svg class="text-zinc-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 12l10 7.422L22 12"/><path d="m7 9l5 4l5-4m-6-3l1 .8l1-.8l-1-.8z"/></g></svg>
					</el-link>
				</p>
				
			</div>
		</el-form>
		
	</div>
	<span @click="isVersionDialog=true" class="fixed right-6 top-2/4 z-40" v-if="!isVersionDialog">
		<svg
			class="text-zinc-50	"
			xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
	</span>
	<span class="fixed right-6 top-1.5 z-40" v-if="!isVersionDialog" @click="onClickCopy">
		<svg class="text-zinc-50	" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M16 3H4v13"/><path d="M8 7h12v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V7Z"/></g></svg>
	</span>
	<el-dialog v-model="isVersionDialog" title="版本内容">
		<ul>
			<li v-for="(item,index) in versionList" :key="index" class="pb-4">
				<h3 class="text-left py-1.5">
					当前版本为:{{item.version}}
				</h3>
				<span class="block text-left text-sm		">更新时间:{{  item.createTime}}</span>
				<div>
					<span  v-for="(c1,index2) in item.content" :key="index2"
					 class="block text-left text-sm w-screen p-0.5 w-1/5"
					>
						{{index2+1}}.{{ c1.name }}
					</span>
					<div class="block text-right">
						<button @click="item.isActiveName=!item.isActiveName" class="pub-but mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full border-0">查看版本{{item.version}}相关评论</button>
						<button @click="item.isForm=true" class="pub-but border-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full">评论当前版本为:{{item.version}}相关</button>
					</div>
					<el-collapse v-model="item.activeName" accordion v-if="item.isActiveName">
						<el-collapse-item title="当前第几个评论" name="1">
							<div class="text-left">
								<p v-for="(kk,vv) in 5" :key="vv" class="text-sm">
									{{kk}}天气好
								</p>
							</div>
						</el-collapse-item>
					</el-collapse>
					<div v-if="item.isForm" class="p-3.5">
						<span class="block m-1.5">
							<el-input v-model="item.userName" :placeholder="`请输入您的昵称`" clearable  />
						</span>
						<span class="block m-1.5">
						<el-input
						           maxlength="144" resize="horizontal"
						           v-model="item.inputForm" :placeholder="`请输入144字内的评论内容`" clearable >
						</el-input>
						</span>
						<div class="block text-right">
						<button
							:class="{
							'opacity-50 cursor-not-allowed':item.inputForm==''||item.userName=='',
							
							' pub-but mr-4':item.inputForm!=''&&item.userName!='',
							}"
							class="
							
							w-full bg-blue-500  text-white font-bold py-2 px-4 border border-blue-700 rounded-full border-0">评论</button>
						</div>
					</div>
				</div>
				<el-divider border-style="dashed" />
				
			</li>
		</ul>
		<el-divider>
			我是有底线的
		</el-divider>
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


</style>
<style lang="scss" scoped>
@import "@/style/base.scss"
</style>
