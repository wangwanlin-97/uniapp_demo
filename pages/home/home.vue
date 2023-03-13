<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item>
				<navigator url="/subpkg/item_detail/item_detail" class="swiper-item">
						<image mode="aspectFill" :src="require('../../images/1.png')"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator class="swiper-item">
					<image mode="aspectFill"  :src="require('../../images/2.jpg')"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image mode="aspectFill"  :src="require('../../images/3.png')"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="nav-item">A</view>
			<view class="nav-item">B</view>
			<view class="nav-item">C</view>
			<view class="nav-item">D</view>
			<view class="nav-item">E</view>
		</view>
		<view class="list-box">
			<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>	<view class="list-item">
				<image :src="require('../../images/list-item.jpg')" mode="widthFix"></image>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		get
	} from 'https';
	import Loading, {
		request
	} from '../../utils/request.js'
	export default {
		data() {
			return {

			};
		},
		onLoad() {
			let a = Loading.getInstance()
			console.log(a)
			a.showLoading('hahah')
			console.log(request)
			setTimeout(() => {
				a.hideLoading()
			}, 5000)
			uni.request({
				url: "",
				success: () => {
					console.log('success')
				},
				fail() {
					console.log('fail')
				},
				complete() {
					console.log('complete')
				}
			})
			request({
				url: ''
			})

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.swiper-item {
		height: 100%;
		background-color: aqua;

	}
	.nav{
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #2f2f2f;
		.nav-item{
			width: 30px;
			height: 30px;
			background-color: #39c5bb;
			margin: 15px 0;
			text-align: center;
			line-height: 30px;
		}
	}
	.list-box{
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		.list-item {
			margin: 20px;
			image{
				width: 200rpx;
				
			}
		}
	}
</style>
