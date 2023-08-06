<script setup>
import {linkJson} from '@/utils/static-dt/static-link.js'
import {getAsciiLength} from '@/utils/tools/regTools.js'
import useTools from "@/hooks/useTools.js";
const {onClickCopy,isDrawer}=useTools()
import useForm from "@/hooks/useForm.js";
const {  form ,
	formRef,
	rulesValidator,
	checkedName,
	onFromUserNameClear,
	onFromUserNameBlur,
	onClickSaveForm,onSubmit}=useForm()
import useComments from "@/hooks/useComments.js";
const {
	versionList,
	onClickActiveName,
	onClickFormInput,
	onClierlAllForm}=useComments()
import useUpdate from "@/hooks/useUpdate.js";
const {isUpdateDialogVisible,
	numUpdate,versionMaxNum,
	isVersionDialog,
	onClickUpdateBtn,
	onUpdateClickCancel,
	onClickUpdateBtnOk}=useUpdate()
</script>
<template>
	<div class="login-container">
		<div class="header">登录</div>
		<el-form ref="formRef" :model="form" label-width="80px" class="my-form"  status-icon
		         :rules="rulesValidator"
		>
			<el-form-item label="用户名" required size="large" prop="username">
				<el-input clearable v-model="form.username" class="my-input" @clear="onFromUserNameClear"
				@blur="onFromUserNameBlur"
				/>
			</el-form-item>
			<el-form-item label="密码" required prop="password" size="large">
				<el-input clearable v-model="form.password"  show-password type="password" class="my-input"></el-input>
			</el-form-item>
			<el-form-item size="large" label="设置缓存">
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
				<p  class="flex align-baseline pl-14 items-center	"
				 v-for="(item,index) in linkJson" :key="index"
				    :title="item.title"
				>
					<el-link type="primary" :href="item.url">
					<span class="text-zinc-50 text-sm items-center	pr-1.5">{{  item.title}}</span>
						<span  v-html="item.svg"></span>
					</el-link>
				</p>
			</div>
		</el-form>
		
	</div>
	<span class="fixed right-6 top-2/4 z-40" @click="isDrawer=true">
			<svg class="text-zinc-50	" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.691 15.778l-.63-.49a2.29 2.29 0 0 0 .023-.288a1.548 1.548 0 0 0-.024-.289l.625-.49a.153.153 0 0 0 .036-.188l-.59-1.02a.15.15 0 0 0-.183-.065l-.73.295a2.016 2.016 0 0 0-.502-.289l-.112-.778a.14.14 0 0 0-.141-.124h-1.18a.151.151 0 0 0-.147.124l-.112.778a2.355 2.355 0 0 0-.5.29l-.732-.296a.154.154 0 0 0-.183.065l-.59 1.02a.146.146 0 0 0 .036.189l.625.49a2.366 2.366 0 0 0 0 .577l-.625.49a.153.153 0 0 0-.035.188l.59 1.02a.15.15 0 0 0 .182.065l.731-.295a2.016 2.016 0 0 0 .501.289l.112.778a.147.147 0 0 0 .148.124h1.179a.151.151 0 0 0 .147-.124l.112-.778a2.178 2.178 0 0 0 .495-.29l.737.296a.154.154 0 0 0 .183-.065l.59-1.02a.153.153 0 0 0-.036-.189Zm-2.818.106a.884.884 0 1 1 .885-.884a.883.883 0 0 1-.885.884Z"/><path fill="currentColor" d="M14 2H6a2.006 2.006 0 0 0-2 2v16a2.006 2.006 0 0 0 2 2h12a2.006 2.006 0 0 0 2-2V8Zm4 18H6V4h7v5h5Z"/>
	</svg>
	</span>
	<el-drawer v-model="isDrawer" :with-header="false" show-close size="20%">
		<div class="flex">
			<span @click="isVersionDialog=true" v-if="!isVersionDialog" class="flex items-center whitespace-nowrap
	p-3.5
">
		<svg
			class="text-sm"
			xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
			
		</svg>
				<span class="text-xs">更新日志</span>
			</span>
			<span  v-if="!isVersionDialog" @click="onClickCopy" class="flex items-center whitespace-nowrap	p-3.5">
		<svg class="text-sm" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M16 3H4v13"/><path d="M8 7h12v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V7Z"/></g></svg>
			<span class="text-xs	">复制链接</span>
			</span>
		</div>
		<el-divider v-if="!isVersionDialog">
			我是有底线的
		</el-divider>
		<p class="text-base text-left" title="提示:存在新版本">
			当前版本:{{ versionList?.[0].version}}
		</p>
		<button
			@click="onClickUpdateBtn"
			class="pub-but mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full border-0">
			进行更新
		</button>
	</el-drawer>
	
	<el-dialog v-model="isUpdateDialogVisible" title="更新版本" width="30%" center draggable align-center	class="rounded-s-full	">
    <span>
      当前版本为:{{ versionList?.[0].version}}，是否要进行新版本{{'0.4a'}}更新操作?如果更新完成之后，那么将展示最新的页面到您的浏览器中
    </span>
		<template #footer>
      <span class="dialog-footer">
        <button @click="onUpdateClickCancel"
        class="bg-orange-600	 pub-but mr-4 bg-blue-500 hover:bg-orange-600 text-white font-bold py-2 px-4 border border-blue-700 rounded-full border-0"
        >取消更新</button>
        <button type="primary" @click="onClickUpdateBtnOk"
                :class="{'opacity-50 cursor-not-allowed':numUpdate!==0||!numUpdate!==versionMaxNum}"
        class="pub-but mr-4 bg-blue-500 hover:bg-blue-200 text-white font-bold py-2 px-4 border border-blue-700 rounded-full border-0"
        >
          {{ numUpdate===0||numUpdate>=versionMaxNum?'确认更新'
	        :`更新进度${numUpdate}%`}}
        </button>
      </span>
		</template>
	</el-dialog>
	<el-dialog v-model="isVersionDialog" title="版本内容" @close="onClierlAllForm">
		<el-scrollbar height="600px">
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
							<button @click="onClickActiveName(item)" class="pub-but mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full border-0">查看版本{{item.version}}相关评论</button>
							<button @click="onClickFormInput(item)" class="pub-but border-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full">评论当前版本为:{{item.version}}相关</button>
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
							<el-input v-model="item.userName" placeholder="请输入30个字内您的经昵称" clearable
							          maxlength="30"
							>
								<template v-slot:suffix>
								{{getAsciiLength(item.userName) }}/30
							</template>
							</el-input>
						</span>
							<span class="block m-1.5">
						<el-input
							maxlength="144" resize="horizontal"
							v-model="item.inputForm" :placeholder="`请输入144字内的评论内容`" clearable >
							<template v-slot:suffix>
								{{ getAsciiLength(item.inputForm)}}/144
							</template>
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
		</el-scrollbar>
	
	</el-dialog>
</template>

<style scoped lang="scss">
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
