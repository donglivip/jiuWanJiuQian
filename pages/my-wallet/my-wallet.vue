<template>
	<scroll-view class="wrapper" scroll-y="">
		<view class="main">
			<view class="main-one">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qianback.png" mode="" class="back"></image>
				<view class="one-box">
					<view class="one-text">868.00</view>
					<view class="one-news">￥余额</view>
					<view class="one-x" @tap="opennew('cash-withdrawal')">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/suo.png" mode=""></image>
						<view class="one-word">提现</view>
					</view>
				</view>
			</view>
			<view class="main-two">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/zhangdan.png" mode=""></image>
				<view class="two-text">收支明细</view>
			</view>
			<view class="main-three">
				<view class="three-left">
					<view class="l-text">即时红利|邀请商家加入VIP会员</view>
					<view class="l-news">2019-09-09 19：33</view>
				</view>
				<view class="three-right">
					<view class="r-text">
						+
						<text class="r-zi">645.00</text>
					</view>
				</view>
			</view>
			<view class="main-three">
				<view class="three-left">
					<view class="l-text">提现</view>
					<view class="l-news">2019-09-09 19：33</view>
				</view>
				<view class="three-right">
					<view class="r-text r-x">
						-
						<text class="r-zi r-y">54645.00</text>
					</view>
					<view class="r-news">钱已到账</view>
				</view>
			</view>
			<view class="main-three">
				<view class="three-left">
					<view class="l-text">即时红利|邀请商家加入VIP会员</view>
					<view class="l-news">2019-09-09 19：33</view>
				</view>
				<view class="three-right">
					<view class="r-text">
						+
						<text class="r-zi">645.00</text>
					</view>
				</view>
			</view>
			<view class="main-three">
				<view class="three-left">
					<view class="l-text">即时红利|邀请商家加入VIP会员</view>
					<view class="l-news">2019-09-09 19：33</view>
				</view>
				<view class="three-right">
					<view class="r-text">
						+
						<text class="r-zi">645.00</text>
					</view>
				</view>
			</view>
			<view class="main-three">
				<view class="three-left">
					<view class="l-text">即时红利|邀请商家加入VIP会员</view>
					<view class="l-news">2019-09-09 19：33</view>
				</view>
				<view class="three-right">
					<view class="r-text">
						+
						<text class="r-zi">645.00</text>
					</view>
				</view>
			</view>
			<view class="main-three">
				<view class="three-left">
					<view class="l-text">即时红利|邀请商家加入VIP会员</view>
					<view class="l-news">2019-09-09 19：33</view>
				</view>
				<view class="three-right">
					<view class="r-text">
						+
						<text class="r-zi">645.00</text>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		}
	},
	// 下拉刷新
	onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	// 上拉加载
	onReachBottom: function() {
		console.log('xia');
	}
};
</script>

<style>
.wrapper {
	background: #f9f9f9;
}
.main-one {
	position: relative;
	background: #000000;
	height: 200rpx;
}
.one-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 450rpx;
	width: 690rpx;
	margin: 0 30rpx;
	position: absolute;
	top: 30rpx;
	left: 0;
}
.back {
	width: 690rpx;
	height: 450rpx;
	margin: 0 30rpx;
	position: absolute;
	top: 30rpx;
	left: 0;
}
.one-text {
	font-size: 89rpx;
	color: #ffffff;
	margin-bottom: 30rpx;
}
.one-news {
	font-size: 30rpx;
	color: #ffffff;
	margin-bottom: 130rpx;
}
.one-x {
	display: flex;
	align-items: center;
	justify-content: center;
}
.one-x image {
	width: 30rpx;
	height: 30rpx;
	margin-right: 17rpx;
}
.one-word {
	font-size: 28rpx;
	color: #333333;
}
.main-two {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	margin-top: 290rpx;
}
.main-two image {
	width: 34rpx;
	height: 34rpx;
	margin-right: 12rpx;
}
.two-text {
	font-size: 36rpx;
	color: #333333;
}
.main-three {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	height: 150rpx;
	margin: 0 30rpx 26rpx 30rpx;
	box-shadow: 1px 1px 5px 1px #e5e5e5;
}
.three-left {
}
.l-text {
	font-size: 28rpx;
	color: #333333;
	margin-bottom: 15rpx;
}
.l-news {
	font-size: 24rpx;
	color: #808080;
}
.three-right {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
}
.r-text {
	font-size: 28rpx;
	color: #fe3f10;
}
.r-zi {
	font-size: 38rpx;
	color: #fe3f10;
}
.r-x {
	color: #008a05;
}
.r-y {
	color: #008a05;
}
.r-news {
	font-size: 24rpx;
	color: #808080;
	padding: 10rpx 0;
}
</style>
