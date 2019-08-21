<template>
	<scroll-view class="wrapper" scroll-y="">
		<view class="header">
			<view class="header-left">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tou.jpg" mode="" class="h-ba" v-if="userid == ''"></image>
				<image :src="useravatar" mode="" class="h-ba" v-if="userid != ''"></image>
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shuaxin.png" mode="" class="h-er" @tap="wLogin(false)"></image>
			</view>
			<view class="header-content" v-if="userid != ''">
				<view class="c-text">{{ username }}</view>
				<view class="c-news">13218573474</view>
			</view>
			<view class="header-content" @tap="loginshow" v-if="userid == ''">
				<view class="c-text">点击登录</view>
				<view class="c-news"></view>
			</view>
			<view class="header-right" @tap="opennew('openshop')">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/logo.png" mode=""></image>
				<view class="h-text">0元开店</view>
			</view>
		</view>
		<view class="main">
			<view class="main-one">
				<view class="one-top">采购管理</view>
				<view class="one-content">
					<view class="c-box" @tap="opennew('my-purchase')">
						<view class="box-top">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiugoudan.png" mode=""></image>
							<view class="box-text">42</view>
						</view>
						<view class="box-bottom">我的求购单</view>
					</view>
					<view class="c-box" @tap="opennew('my-quotation')">
						<view class="box-top">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/baojiabiao.png" mode=""></image>
							<view class="box-text">42</view>
						</view>
						<view class="box-bottom">我的报价单</view>
					</view>
				</view>
				<view class="one-bottom" @tap="opennew('vip')">
					<view class="b-zuo"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/quanyi.png" mode=""></image></view>
					<view class="b-cont">获取无限报价技能</view>
					<view class="b-you">查看权益</view>
				</view>
			</view>
			<view class="main-two" @tap="opennew('share')"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/jiaonang.jpg" mode=""></image></view>
			<view class="main-three">
				<view class="three-box" @tap="opennew('my-wallet')">
					<view class="t-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qianbao.png" mode=""></image></view>
					<view class="t-cont">我的钱包</view>
					<view class="t-right"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image></view>
				</view>
				<view class="three-box" @tap="opennew('dividend')">
					<view class="t-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/hongli.png" mode=""></image></view>
					<view class="t-cont">我的红利</view>
					<view class="t-right">
						<view class="t-zi">期期红利期期拿，拿不到手软别回家</view>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image>
					</view>
				</view>
				<view class="three-box" @tap="opennew('my-certification')">
					<view class="t-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/renzheng.png" mode=""></image></view>
					<view class="t-cont">我的认证</view>
					<view class="t-right"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image></view>
				</view>
				<view class="three-box" @tap="opennew('shouhuodizhi')">
					<view class="t-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei2.png" mode=""></image></view>
					<view class="t-cont">收货地址</view>
					<view class="t-right"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image></view>
				</view>
				<view class="three-box" @tap="opennew('openshop')">
					<view class="t-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dian.png" mode=""></image></view>
					<view class="t-cont">0 元开店</view>
					<view class="t-right"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image></view>
				</view>
			</view>
		</view>
		<view class="login-alert center" v-if="logintype">
			<view class="login-inner">
				<view class="login-title tcenter">您还未登录</view>
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/login-alert.png" mode=""></image>
				<view class="btn-box">
					<view class="cancel" @tap="loginshow">暂不登录</view>
					<view class="submit" @tap="wLogin(false)">立即登录</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			logintype: false, //登陆面板显示
			userid: uni.getStorageSync('userid'), //用户ID
			username: uni.getStorageSync('username'), //用户名
			useravatar: uni.getStorageSync('useravatar') //用户头像
		};
	},
	methods: {
		// 打开新页面
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		},
		// 微信登录
		wLogin: function(type) {
			var that = this;
			this.logintype = type;
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					// 获取用户信息
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							// 获取用户名称和头像
							that.username = infoRes.userInfo.nickName;
							uni.setStorageSync('username', infoRes.userInfo.nickName);
							that.useravatar = infoRes.userInfo.avatarUrl;
							uni.setStorageSync('useravatar', infoRes.userInfo.avatarUrl);
							// 如果是+app直接获取openid
							// #ifdef APP-PLUS
							that.userid = infoRes.userInfo.openId;
							uni.setStorageSync('userid', infoRes.userInfo.openId);
							// #endif
							// 如果是小程序请求后台获取openid
							// #ifdef  MP-WEIXIN
							uni.request({
								url: 'https://api.weixin.qq.com/sns/jscode2session', //仅为示例，并非真实接口地址。
								data: {
									appid: 'wxfa79b1317321a83f',
									secret: '7458199348959ccbd4ae6eb8ab09a245',
									js_code: loginRes.code,
									grant_type: 'authorization_code'
								},
								success: res => {
									that.userid = res.data.openid;
									uni.setStorageSync('userid', res.data.openid);
								}
							});
							// #endif
						}
					});
				}
			});
		},
		// 点击登录
		loginshow: function() {
			this.logintype = !this.logintype;
		}
	},
	onLoad: function() {}
};
</script>

<style>
.btn-box view {
	flex: 1;
	text-align: center;
	height: 100rpx;
	line-height: 100rpx;
	color: #000000;
	font-size: 34rpx;
}
.btn-box {
	display: flex;
	align-items: center;
}
.login-title {
	font-size: 34rpx;
	font-family: Source Han Sans CN;
	font-weight: bold;
	line-height: 58rpx;
	color: rgba(51, 51, 51, 1);
	margin: 60rpx auto 0;
	position: relative;
	z-index: 999;
}
.login-inner .submit {
	color: #008a05;
}
.login-inner image {
	width: 426rpx;
	height: 346rpx;
	margin: 0 auto;
	display: block;
	position: relative;
	top: -30rpx;
}
.login-inner {
	width: 618rpx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.1);
}
.login-alert {
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
}
.wrapper {
	background: #f9f9f9;
}

.header {
	height: 280rpx;
	background: #000000;
	border-bottom-left-radius: 35rpx;
	border-bottom-right-radius: 35rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.header-left {
	width: 130rpx;
	height: 130rpx;
	margin: 0 30rpx;
	position: relative;
	top: 0;
	left: 0;
}

.h-ba {
	width: 100%;
	height: 100%;
	border-radius: 150rpx;
}

.h-er {
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	bottom: 0;
	right: 0;
}

.header-content {
	height: 130rpx;
	width: 200rpx;
	flex: 1;
}

.c-text {
	font-size: 36rpx;
	color: #ffffff;
	margin: 20rpx 0 10rpx 0;
}

.c-news {
	font-size: 24rpx;
	color: #e5caa1;
}

.header-right {
	background: url(https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/jianbian.png);
	background-size: 100% 100%;
	width: 183rpx;
	height: 60rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.header-right image {
	height: 40rpx;
	width: 40rpx;
}

.h-text {
	font-size: 26rpx;
	color: #2a2a2a;
	margin-left: 10rpx;
}

.main-one {
	height: 340rpx;
	margin: 0 30rpx;
	background: #ffffff;
	position: relative;
	top: -40rpx;
	left: 0;
	border-top-left-radius: 10rpx;
	border-top-right-radius: 10rpx;
}

.one-top {
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-left: 30rpx;
	font-size: 30rpx;
	color: #323232;
}

.one-content {
	height: 180rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.c-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.box-top {
	width: 80rpx;
	height: 70rpx;
	position: relative;
	top: 0;
	left: 0;
}

.box-top image {
	width: 100%;
	height: 100%;
}

.box-text {
	position: absolute;
	top: 0;
	right: -60rpx;
	font-size: 20rpx;
	color: #ffffff;
	background: #008a05;
	width: 46rpx;
	height: 30rpx;
	border-radius: 15rpx;
	text-align: center;
	line-height: 30rpx;
}

.box-bottom {
	font-size: 28rpx;
	color: #323232;
	margin-top: 15rpx;
}

.one-bottom {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 85rpx;
	background: linear-gradient(90deg, #f3ebe0, #e5bb7a);
	padding: 0 30rpx;
}

.b-zuo image {
	width: 48rpx;
	height: 38rpx;
}

.b-cont {
	font-size: 28rpx;
	color: #3d2f24;
	margin-left: 15rpx;
	flex: 1;
	width: 240rpx;
}

.b-you {
	font-size: 28rpx;
	color: #d8cdaf;
	background: #353235;
	width: 150rpx;
	height: 50rpx;
	text-align: center;
	line-height: 50rpx;
	border-radius: 25rpx;
}

.main-two {
	width: 690rpx;
	height: 174rpx;
	margin: 0rpx 30rpx 20rpx 30rpx;
}

.main-two image {
	width: 100%;
	height: 100%;
}

.main-three {
	background: #ffffff;
	border-radius: 10rpx;
	margin: 30rpx;
	width: 690rpx;
}

.three-box {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	border-bottom: 1px solid #e8e8e8;
	height: 100rpx;
}

.t-left image {
	height: 48rpx;
	width: 48rpx;
	margin-right: 26rpx;
}

.t-cont {
	flex: 1;
	width: 120rpx;
	font-size: 28rpx;
	color: #333333;
}

.t-right {
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.t-right image {
	height: 32rpx;
	width: 18rpx;
	margin-left: 8rpx;
}

.t-zi {
	font-size: 22rpx;
	color: #999999;
}
</style>
