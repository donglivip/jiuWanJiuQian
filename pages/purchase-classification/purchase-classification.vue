<template>
	<view class="wrapper">
		<view class="main">
			<view class="main-box">
				<scroll-view class="main-left" scroll-y="">
					<view class="nav-left-item" v-for="(i,index) in mydata" :class="myindex==index?'l-zi':''" @tap="changeone(index)">机械五金</view>
				</scroll-view>
				<scroll-view class="main-right" scroll-y="">
					<view class="r-top">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sousuo.png" mode=""></image>
						<input type="text" value="" class="r-zi" placeholder="请输入关键字" placeholder-class="sou"/>
					</view>
					<view class="nav-right-item" @tap="opennew02('additional-items')">
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
						<view class="r-text">内容内容</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myindex:1,  //一级分类索引
				fenleidata:[],  //分类数组
				mydata:[
					'建材家居',
					'服装纺织',
					'化工橡塑'
				]
			}
		},
		methods: {
			// 点击一级份分类
			changeone:function(index){
				this.myindex=index
			},
			//跳转页面
			opennew:function(id){
				uni.navigateTo({
					url: '../'+id+'/'+id
				});
				
			},
			opennew02:function(id){
				uni.switchTab({
					url: '../'+id+'/'+id
				});
				
			},
			myajax:function(){
				uni.showLoading({
					title: '加载中',
					mask: true,
				});
				uni.request({
					url: '',
					method: 'GET',
					data: {},
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				uni.hideLoading({
					title: '加载中',
					mask: true,
				});
			}
		},
		onLoad:function(){
			this.myajax()
		}
	}
</script>

<style>
	.wrapper,uni-page-body, uni-page-refresh,page{
			background: #F9F9F9;height: 100%;overflow: hidden;
	}
	.main{
		height: 100%;
	}
	.main-box{
		display: flex;
		height: 100%;
	}
	.main-left {
		width: 180rpx;
		height: 100%;
	}
	.nav-left-item {
		height: 90rpx;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FFFFFF;
	}
	.l-zi{
		background: #F9F9F9;
		border-left: 3rpx solid #008A05;
		color: #008A05;
	}
	.main-right {
		width: 70%;
		height: 100%;
	}
	.r-top{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 510rpx;
		height: 56rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin: 18rpx 30rpx;
	}
	.r-top image{
		height: 24rpx;
		width: 24rpx;
		margin-right: 12rpx;
	}
	.r-zi{
		width: 150rpx;
		border: 0;
		font-size: 26rpx;
	}
	.nav-right-item {
		width: 570rpx;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		float: left;
		text-align: center;
		margin-left: 30rpx;
		flex-wrap: wrap;
	}
	.r-text{
		font-size: 26rpx;
		color: #999999;
		background: #FFFFFF;
		padding: 17rpx 23rpx;
		border-radius: 4rpx;
		margin-right: 30rpx;
		margin-bottom: 30rpx;
		max-width: 180rpx;
		white-space: nowrap;
		overflow:hidden; 
		text-overflow:ellipsis
	}
	
</style>
