<template>
	<view class="wrapper">
		<view class="main">
			<view class="main-box">
				<view class="box-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dengdai.png" mode=""></image>
					<view class="box-text">正在审核</view>
					<view class="box-news">预计2小时-1天内完成</view>
				</view>
				<view class="box-content">请您绑定手机号，审核结果我们会通过短信通知您</view>
				<view class="box-bott">点此绑定手机号</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.wrapper,uni-page-body, uni-page-refresh,page{
		background: #FFFFFF;height: 100%;overflow: hidden;
}
.main{
	height: 100%;
}
.main-box{
	margin-top: 100rpx;
}
.box-top{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.box-top image{
	width: 186rpx;
	height: 186rpx;
	margin-bottom: 55rpx;
}
.box-text{
	font-size: 40rpx;
	color: #333333;
	font-weight: 700;
	margin-bottom: 24rpx;
}
.box-news{
	font-size: 28rpx;
	color: #666666;
	margin-bottom: 30rpx;
}
.box-content{
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;
	color: #008A05;
	margin-bottom: 74rpx;
}
.box-bott{
	background: #008A05;
	font-size: 36rpx;
	color: #FFFFFF;
	height: 98rpx;
	width: 470rpx;
	text-align: center;
	line-height: 98rpx;
	border-radius: 48rpx;
	margin: 0 140rpx;
	
}
.{
	
}

</style>
