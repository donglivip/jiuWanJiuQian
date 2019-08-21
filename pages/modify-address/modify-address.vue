<template>
	<view class="wrapper">
		<view class="main">
			<view class="main-box">
				<view class="main-one">
					<view class="one-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sj.png" mode=""></image>
						<view class="one-text">收货人姓名</view>
					</view>
					<input type="text" value="李晓明" class="one-news" placeholder-class="xiugai"/>
				</view>
				<view class="main-one">
					<view class="one-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sj.png" mode=""></image>
						<view class="one-text">联系方式</view>
					</view>
					<input type="text" value="15685645644" class="one-news" placeholder-class="xiugai"/>
				</view>
			</view>
			<view class="main-two">
				<view class="two-top">
					<view class="t-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
						<view class="t-text">所在地区</view>
					</view>
					<view class="t-right">
						<view class="t-text">江苏省徐州市云龙区</view>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image>
					</view>
				</view>
				<textarea value="绿地世纪城绿地世纪城绿地世纪城" placeholder="" />
			</view>
		</view>
		<view class="bottom">提交</view>
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
	background: #F9F9F9;height: 100%;overflow: hidden;
}
.main{
	height: calc(100% - 130rpx);
}
.main-box{
	margin: 30rpx 0;
}
.main-one{
	padding: 0 30rpx;
	height: 98rpx;
	background: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.one-left{
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.one-left image{
	width: 25rpx;
	height: 35rpx;
	margin-right: 15rpx;
}
.one-text{
	font-size: 30rpx;
	color: #333333;
}
.one-news{
	font-size: 30rpx;
	color: #333333;
	width: 200rpx;
	height: 98rpx;
	border: 0;
	text-align: right;
}
.main-two{
	padding: 30rpx;
	background: #FFFFFF;
}
.two-top{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 98rpx;
}
.t-left{
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.t-left image{
	width: 26rpx;
	height: 33rpx;
	margin-right: 18rpx;
}
.t-text{
	font-size: 30rpx;
	color: #333333;
}
.t-right{
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.t-right image{
	width: 26rpx;
	height: 33rpx;
	margin-left: 12rpx;
}
textarea{
	height: 155rpx;
	padding: 30rpx;
}
.bottom{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100rpx;
	background: #008A05;
	font-size: 36rpx;
	color: #FFFFFF;
	
}

</style>
