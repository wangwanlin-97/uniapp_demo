<template>
	<view>
		<view class="cate_container">
			<scroll-view scroll-y class="cate_left">
				<view class="left-item">左</view>
				<view class="left-item">左</view>
				<view class="left-item">左</view>
				<view class="left-item">左</view>
				<view class="left-item">左</view>
				<view class="left-item">左</view>
				<view class="left-item">左</view>
				<view class="left-item">左</view>
				<view class="left-item">左</view>
				<view class="left-item">左</view>
			</scroll-view>
			<scroll-view scroll-y class="cate_right">
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
				<view class="right-item">右</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wh:0
			};
		},
		onLoad() {
			const sysInfo = uni.getWindowInfo()
			console.log(sysInfo)
			this.wh=sysInfo.windowHeight
		}
	}
</script>

<style lang="scss" >
.cate_container{
	height: 100vh;
	display: flex;
	.cate_left{
		height: 100vh;
		width: 100px;
		.left-item{
			height:50px;
			margin-top: 5px;
			background-color: aquamarine;
		}
	}
	.cate_right{
		height:100vh;
		flex: 1;
		.right-item{
			height: 100px;
			margin-top: 10px;
			background-color: aqua;
		}
	}
}
</style>
