<template>
	<view class="wrapper">
		<view class="main">
			<view class="header">
				<view class="header-left">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sousuo.png" mode=""></image>
					<input type="text" value="" placeholder="请输入求购信息关键字" placeholder-class="sou"/>
				</view>
				<view class="header-right">取消</view>
			</view>
			<scroll-view class="main-box" scroll-y="">
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode=""></image>
					<view class="one-text one-zi">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode=""></image>
					<view class="one-text one-zi">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode=""></image>
					<view class="one-text one-zi">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode=""></image>
					<view class="one-text one-zi">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
				<view class="main-one">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
					<view class="one-text">江苏哈哈哈网络科技有限公司</view>
				</view>
			</scroll-view>
		</view>
		<view class="bottom" @tap="opennew('my-purchase')">提  交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			opennew:function(id){
				uni.navigateTo({
					url: '../'+id+'/'+id
				});
				
			}
		}
	}
</script>

<style>
.wrapper,uni-page-body, uni-page-refresh,page{
		background: #FFFFFF;height: 100%;overflow: hidden;
	}
.main{
	height: calc(100% - 100rpx) ;
}
.header{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
}
.header-left{
	width: 610rpx;
	height: 60rpx;
	background: #F5F5F5;
	border-radius: 6rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.header-left image{
	height: 28rpx;
	width: 28rpx;
	padding: 0 20rpx;
}
input{
	width: 500rpx;
	height: 56rpx;
	border: 0;
	font-size: 28rpx;
}
.header-right{
	font-size: 28rpx;
	color: #333333;
}
.main-box{
	height: calc(100% - 100rpx);
}
.main-one{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	height: 90rpx;
}
.main-one image{
	width: 34rpx;
	height: 34rpx;
	margin-right: 44rpx;
}
.one-text{
	font-size: 34rpx;
	color: #666666;
}
.one-zi{
	color: #008A05;
}
.bottom{
	height: 100rpx;
	background: #008A05;
	font-size: 36rpx;
	color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
