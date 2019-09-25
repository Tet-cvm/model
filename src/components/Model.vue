<template>
	<div class="model">
		<lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation" />
		model
	</div>
</template>

<script>
import Vue from 'vue'
import lottie from 'vue-lottie';
import * as animationData from "../assets/lottie/data.json";
Vue.component('lottie', lottie)
export default {
  name: 'model',
	data(){
		return {
			defaultOptions: { animationData: animationData },
			animationSpeed: 1,
			anim: {}
		}
	},
	methods: {
		handleAnimation: function(anim) {
			this.anim = anim;
			console.log(anim); //这里可以看到 lottie 对象的全部属性
		},
	}
}
</script>

<style scoped>
.model {
	background-color: red;
}
</style>