<script setup>
const progressBarRef=ref(null)
onMounted(() => {
	window.onscroll = function(e) {
		const  height = document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight;
		progressBarRef.value.style.width = (document.scrollingElement.scrollTop / height) * 100 + "%";
	}
	
});
</script>

<template>
	<div class="progress-container">
		<div class="progress-bar" id="progressBar" ref="progressBarRef"></div>
		<slot></slot>
	</div>
</template>

<style scoped>
.progress-container {
	position: fixed;
	top: 0;
	width: 100%;
	background: rgba(0, 0, 0, .1);
}

.progress-bar {
	width: 0;
	height: 8px;
	background: rgba(0, 200, 0, .7);
}

</style>
