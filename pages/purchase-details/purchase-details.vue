<template>
	<view class="wrapper">
		<scroll-view class="main" scroll-y="">
			<view class="main-one">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiu.png" mode=""></image>
				<view class="one-text">暂无中标企业，您可以发布中标通知</view>
			</view>
			<view class="header">
				<view class="header-top">
					<view class="top-left">
						<view class="t-top">
							<view class="t-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="t-bott">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="t-news">发布日期：2019-11-11</view>
						</view>
					</view>
					<view class="top-right">
						已报价
						<text class="t-zi">12</text>
						<text class="t-ti">家</text>
					</view>
				</view>
				<view class="header-content">
					<view class="t-bott">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
						<view class="t-news">求购单编号:2019071085478R</view>
					</view>
				</view>
				<view class="header-bottom">
					<view class="b-text">报价剩余时间</view>
					<view class="b-news">
						<text class="b-zi">17</text>
						天
						<text class="b-zi">24</text>
						时
						<text class="b-zi">12</text>
						分
						<text class="b-zi">23</text>
						秒
					</view>
				</view>
			</view>
			<view class="main-two">
				<view class="two-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tou.jpg" mode=""></image></view>
				<view class="two-right">
					<view class="r-top" @tap="xian">
						<view class="r-text">江苏哈哈哈网络科技有限公司</view>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/san.png" mode="" v-if="bian"></image>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sanjiao.png" mode="" v-if="!bian"></image>
					</view>
					<view class="r-bott">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sj.png" mode=""></image>
						<view class="r-news">
							15252140555
							<text class="r-zi">拨打电话</text>
						</view>
					</view>
				</view>
			</view>
			<transition name="fade">
				<view class="main-three" v-if="bian">
					<view class="three-box">
						<view class="three-top">
							<view class="t-text">汽车轮胎内胎汽车轮内胎</view>
							<view class="t-text">单价：2.8元/个</view>
						</view>
						<view class="three-bott">
							<view class="t-text">1000个</view>
							<view class="t-text">总价：2800元</view>
						</view>
					</view>
					<view class="three-box">
						<view class="three-top">
							<view class="t-text">汽车轮胎内胎汽车轮内胎</view>
							<view class="t-text">单价：2.8元/个</view>
						</view>
						<view class="three-bott">
							<view class="t-text">1000个</view>
							<view class="t-text">总价：2800元</view>
						</view>
					</view>
					<view class="three-box">
						<view class="three-top">
							<view class="t-text">汽车轮胎内胎汽车轮内胎</view>
							<view class="t-text">单价：2.8元/个</view>
						</view>
						<view class="three-bott">
							<view class="t-text">1000个</view>
							<view class="t-text">总价：2800元</view>
						</view>
					</view>
					<view class="three-box">
						<view class="three-top">
							<view class="t-text">汽车轮胎内胎汽车轮内胎</view>
							<view class="t-text">单价：2.8元/个</view>
						</view>
						<view class="three-bott">
							<view class="t-text">1000个</view>
							<view class="t-text">总价：2800元</view>
						</view>
					</view>
					<view class="three-box">
						<view class="three-top">
							<view class="t-text">汽车轮胎内胎汽车轮内胎</view>
							<view class="t-text">单价：2.8元/个</view>
						</view>
						<view class="three-bott">
							<view class="t-text">1000个</view>
							<view class="t-text">总价：2800元</view>
						</view>
					</view>
					<view class="three-box">
						<view class="three-top">
							<view class="t-text">汽车轮胎内胎汽车轮内胎</view>
							<view class="t-text">单价：2.8元/个</view>
						</view>
						<view class="three-bott">
							<view class="t-text">1000个</view>
							<view class="t-text">总价：2800元</view>
						</view>
					</view>
					<view class="three-box">
						<view class="three-top">
							<view class="t-text">汽车轮胎内胎汽车轮内胎</view>
							<view class="t-text">单价：2.8元/个</view>
						</view>
						<view class="three-bott">
							<view class="t-text">1000个</view>
							<view class="t-text">总价：2800元</view>
						</view>
					</view>
					<view class="three-box">
						<view class="three-top">
							<view class="t-text">汽车轮胎内胎汽车轮内胎</view>
							<view class="t-text">单价：2.8元/个</view>
						</view>
						<view class="three-bott">
							<view class="t-text">1000个</view>
							<view class="t-text">总价：2800元</view>
						</view>
					</view>
					<view class="three-x">
						总货款：
						<text class="t-y">28,000,000</text>
						元
					</view>
				</view>
			</transition>
			<view class="main-two">
				<view class="two-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tou.jpg" mode=""></image></view>
				<view class="two-right">
					<view class="r-top">
						<view class="r-text">江苏哈哈哈网络科技有限公司</view>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sanjiao.png" mode=""></image>
					</view>
					<view class="r-bott">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sj.png" mode=""></image>
						<view class="r-news">
							15252140555
							<text class="r-zi">拨打电话</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="bottom">
			<view class="bottom-left" @tap="liubiao()">流标</view>
			<view class="bottom-right" @tap="opennew('release-notice')">发布中标通知</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			bian: false
		};
	},
	methods: {
		//点击公司名称显示隐藏下列内容
		xian: function() {
			this.bian = !this.bian;
		},
		//跳转页面
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		},
		//流标
		liubiao: function(id) {
			uni.showModal({
				title: '温馨提示',
				content: '确定流标此求购单吗',
				confirmColor: '#008A05',
				success: res => {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.wrapper,
uni-page-body,
uni-page-refresh,
page {
	background: #f9f9f9;
	height: 100%;
	overflow: hidden;
}
.main {
	height: calc(100% - 100rpx);
}
.main-one {
	margin-bottom: 30rpx;
	width: 100%;
	height: 196rpx;
}
.main-one image {
	width: 100%;
	height: 100%;
	position: relative;
}
.one-text {
	font-size: 26rpx;
	color: #ffffff;
	position: absolute;
	top: 90rpx;
	right: 30rpx;
}
.header {
	background: #ffffff;
	padding: 0 30rpx;
	height: 360rpx;
	margin-bottom: 30rpx;
}
.header-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 160rpx;
}
.t-top {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 20rpx;
}
.t-top image {
	height: 30rpx;
	width: 30rpx;
}
.t-text {
	font-size: 36rpx;
	color: #111111;
	margin-right: 10rpx;
}
.t-bott {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.t-bott image {
	height: 24rpx;
	width: 24rpx;
	margin-right: 15rpx;
}
.t-news {
	font-size: 26rpx;
	color: #666666;
}
.top-right {
	font-size: 26rpx;
	color: #666666;
}
.t-zi {
	font-size: 60rpx;
	color: #008a05;
}
.t-ti {
	font-size: 28rpx;
	color: #008a05;
}
.header-content {
	margin-bottom: 30rpx;
}
.header-bottom {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.b-text {
	font-size: 26rpx;
	color: #666666;
	margin-bottom: 26rpx;
}
.b-news {
	font-size: 24rpx;
	color: #666666;
}
.b-zi {
	text-align: center;
	line-height: 48rpx;
	width: 52rpx;
	height: 48rpx;
	font-size: 36rpx;
	color: #ffffff;
	background: #008a05;
	display: inline-block;
	margin: 0 5rpx;
}
.main-two {
	height: 142rpx;
	background: #ffffff;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 13rpx;
}
.two-left {
	width: 80rpx;
	height: 80rpx;
	margin: 0 30rpx;
}
.two-left image {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.two-right {
	margin-right: 30rpx;
	width: 570rpx;
}
.r-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.r-top image {
	width: 35rpx;
	height: 30rpx;
}
.r-text {
	font-size: 34rpx;
	color: #666666;
}
.r-bott {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.r-bott image {
	width: 25rpx;
	height: 39rpx;
	margin-right: 18rpx;
}
.r-news {
	font-size: 30rpx;
	color: #666666;
}
.r-zi {
	font-size: 30rpx;
	color: #008a05;
	margin-left: 24rpx;
}
.main-three {
	background: #ffffff;
	margin-bottom: 30rpx;
}
.three-box {
	height: 124rpx;
	background: #f9f9f9;
	margin: 0 30rpx 20rpx 30rpx;
	border-radius: 10rpx;
	padding: 0 30rpx;
}
.three-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 18rpx;
	padding-top: 20rpx;
}
.t-text {
	max-width: 260rpx;
	font-size: 28rpx;
	color: #333333;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.three-bott {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.three-x {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 30rpx;
	height: 100rpx;
	font-size: 26rpx;
	color: #666666;
}
.t-y {
	font-size: 40rpx;
	color: #008a05;
}
.bottom {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.bottom-left {
	height: 100rpx;
	width: 267rpx;
	background: #333333;
	font-size: 30rpx;
	color: #ffffff;
	text-align: center;
	line-height: 100rpx;
}
.bottom-right {
	height: 100rpx;
	width: 483rpx;
	background: #e6a23c;
	font-size: 30rpx;
	color: #ffffff;
	text-align: center;
	line-height: 100rpx;
}
</style>
