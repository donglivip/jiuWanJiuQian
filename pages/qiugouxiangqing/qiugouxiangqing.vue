<template>
	<view class="wrapper">
		<scroll-view class="box" scroll-y="">
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
					<view class="c-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/touxiang.png" mode=""></image>
						<view class="c-text">李晓明</view>
					</view>
					<view class="c-right">
						<view class="c-top" v-if="!isbao">报价后可查看</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/baoxiang.png" mode=""></image>
							<view class="c-news" v-if="!isbao">
								152
								<text class="c-zi">****</text>
								1258
							</view>
							<view class="c-news" v-if="isbao">15252161258</view>
						</view>
					</view>
				</view>
				<view class="header-bottom">
					<view class="b-text">报价剩余时间</view>
					<view class="b-news">
						<uni-countdown
							color="#FFFFFF"
							background-color="#008A05"
							border-color="#008A05"
							:day="ri"
							:hour="shi"
							:minute="fen"
							:second="miao"
							:show-colon="false"
						></uni-countdown>
					</view>
				</view>
			</view>
			<view class="main">
				<view class="main-seven" @tap="changemore()">
					<view class="seven-left"></view>
					<view class="seven-content" v-show="!ismore">
						<view class="seven-text">查看更多信息</view>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xia.png" mode=""></image>
					</view>
					<view class="seven-content" v-show="ismore">
						<view class="seven-text">收起更多信息</view>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shang.png" mode=""></image>
					</view>
					<view class="seven-left"></view>
				</view>
				<!-- 更多信息 -->
				<transition name="fade">
					<view class="main-two" v-show="ismore">
						<view class="two-box">
							<view class="two-text">公司名称</view>
							<view class="two-news">江苏我的家网络科技有限公司</view>
						</view>
						<view class="two-box">
							<view class="two-text">最迟收货日期</view>
							<view class="two-news">2019-11-11</view>
						</view>
						<view class="two-box">
							<view class="two-text">交易方式</view>
							<view class="two-news">线下自行交易</view>
						</view>
						<view class="two-box">
							<view class="two-text">发票要求</view>
							<view class="two-news">增值税普通发票</view>
						</view>
						<view class="two-box">
							<view class="two-text">报价要求</view>
							<view class="two-news">报价含税、报价含运费</view>
						</view>
						<view class="two-box">
							<view class="two-text">详细地址</view>
							<view class="two-zi">江苏省徐州市云龙区***********************************</view>
						</view>
					</view>
				</transition>
				<view class="main-box">
					<view class="main-one">
						<view class="one-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image></view>
						<view class="one-right">
							<view class="o-text">汽车轮胎内胎汽车轮胎内胎</view>
							<view class="o-news">品牌：德国制造品牌德国</view>
							<view class="o-news">规格：直径50cm</view>
							<view class="o-zi">
								1000
								<text class="o-ti">个</text>
							</view>
						</view>
					</view>
					<view class="main-one">
						<view class="one-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image></view>
						<view class="one-right">
							<view class="o-text">汽车轮胎内胎汽车轮胎内胎</view>
							<view class="o-news">品牌：德国制造品牌德国</view>
							<view class="o-news">规格：直径50cm</view>
							<view class="o-zi">
								1000
								<text class="o-ti">个</text>
							</view>
						</view>
					</view>
					<view class="main-one">
						<view class="one-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image></view>
						<view class="one-right">
							<view class="o-text">汽车轮胎内胎汽车轮胎内胎</view>
							<view class="o-news">品牌：德国制造品牌德国</view>
							<view class="o-news">规格：直径50cm</view>
							<view class="o-zi">
								1000
								<text class="o-ti">个</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="bottom" v-if="!isvip">
			<!-- #ifdef APP-PLUS -->
				<view class="bottom-left" @tap="share()">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xiaolian.png" mode=""></image>
					<view class="bottom-text">分享给好友</view>
				</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
				<button class="bottom-left" open-type="share">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xiaolian.png" mode=""></image>
					<view class="bottom-text">分享给好友</view>
				</button>
			<!-- #endif -->
			<view class="bottom-right" @tap="opennew('vip')">
				<view class="r-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/quanyi.png" mode=""></image>
					<view class="r-text">立即开通</view>
				</view>
				<view class="r-news">开通VIP服务可无限报价</view>
			</view>
		</view>
		<view class="bottom" v-if="isvip">
			<!-- #ifdef APP-PLUS -->
				<view class="bottom-left02" @tap="share()">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xiaolian.png" mode=""></image>
					<view class="bottom-text">分享给好友</view>
				</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
				<button class="bottom-left02" open-type="share">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xiaolian.png" mode=""></image>
					<view class="bottom-text">分享给好友</view>
				</button>
			<!-- #endif -->
			<view class="bottom-right02" @tap="opennew('baojiabiao')">
				<view class="r-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/quanyi.png" mode=""></image>
					<view class="r-text">立即报价</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
export default {
	data() {
		return {
			isvip: true, //是否是Vip
			ismore: true, //是否显示更多
			isbao: true, //是否已报价
			ri:0,
			shi:0,
			fen:0,
			miao:0
		};
	},
	methods: {
		// 分享给好友
		share: function() {
			uni.share({
				provider: 'weixin',
				scene: 'WXSceneSession',
				type: 1,
				summary: '我正在久万久千',
				success: function(res) {
					uni.showToast({
						title:'分享成功'
					})
				},
				fail: function(err) {
					console.log('fail:' + JSON.stringify(err));
				}
			});
		},
		changemore: function() {
			// 切换更多信息
			this.ismore = !this.ismore;
		},
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		},
		// 分享
		share: function() {
			uni.share({
				provider: 'weixin',
				scene: 'WXSceneSession',
				type: 1,
				summary: '我正在久万久千',
				success: function(res) {
					console.log('success:' + JSON.stringify(res));
				},
				fail: function(err) {
					console.log('fail:' + JSON.stringify(err));
				}
			});
		},
		// 初始化数据
		myajax: function() {},
		timediff: function(startDate) {
			var diff = new Date().getTime() - startDate.getTime(); //时间差的毫秒数

			//计算出相差天数
			var days = Math.floor(diff / (24 * 3600 * 1000));

			//计算出小时数
			var leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
			var hours = Math.floor(leave1 / (3600 * 1000));
			//计算相差分钟数
			var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
			var minutes = Math.floor(leave2 / (60 * 1000));

			//计算相差秒数
			var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
			var seconds = Math.round(leave3 / 1000);

			var returnStr = seconds + '秒';
			this.miao=seconds
			if (minutes > 0) {
				returnStr = minutes + '分' + returnStr;
				this.fen=minutes
			}
			if (hours > 0) {
				returnStr = hours + '小时' + returnStr;
				this.shi=hours
			}
			if (days > 0) {
				returnStr = days + '天' + returnStr;
				this.ri=days
			}
			console.log(returnStr)
			return returnStr;
		}
	},
	onShow: function() {
		this.myajax();
		var date = '2019-08-05 17:59:00.0'
		this.timediff(new Date(date))
	},
	components: { uniCountdown }
};
</script>

<style>
	button{
		border: 0;
		border-radius: 0;
	}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.main-two {
	height: 360rpx;
	background: #ffffff;
	padding: 30rpx;
	margin-bottom: 35rpx;
}
.two-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.two-text {
	font-size: 28rpx;
	color: #333333;
}
.two-news {
	font-size: 28rpx;
	color: #666666;
}
.two-zi {
	font-size: 28rpx;
	color: #666666;
	word-break: break-all;
	height: 60rpx;
	line-height: 30rpx;
	width: 380rpx;
}
.bottom-left02 {
	width: 50%;
	height: 100%;
	background: #333333;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bottom-left02 image {
	width: 52rpx;
	height: 52rpx;
}
.bottom-right02 {
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #008a05;
}
.bottom-right02 .r-text {
	color: #ffffff;
}
.wrapper,
uni-page-body,
uni-page-refresh,
page {
	background: #f9f9f9;
	height: 100%;
	overflow: hidden;
}
.box {
	height: calc(100% - 100rpx);
}
.header {
	background: #ffffff;
	padding: 0 30rpx;
	height: 450rpx;
	margin-top: 20rpx;
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
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 160rpx;
}
.c-left {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.c-left image {
	width: 57rpx;
	height: 57rpx;
	margin-right: 20rpx;
}
.c-text {
	font-size: 40rpx;
	color: #333333;
}
.c-right {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
.c-top {
	font-size: 24rpx;
	color: #ffffff;
	background: #ff0606;
	width: 158rpx;
	height: 40rpx;
	text-align: center;
	line-height: 40rpx;
	margin-bottom: 10rpx;
}
.c-bottom {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.c-bottom image {
	width: 59rpx;
	height: 66rpx;
	margin-right: 20rpx;
}
.c-news {
	font-size: 40rpx;
	color: #333333;
}
.c-zi {
	font-size: 40rpx;
	color: #ff0000;
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
.main-seven {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80rpx;
}
.seven-left {
	width: 153rpx;
	height: 3rpx;
	background: #999999;
	margin: 0 20rpx;
}
.seven-content {
	display: flex;
	align-items: center;
	justify-content: center;
}
.seven-text {
	font-size: 28rpx;
	color: #999999;
	margin-right: 12rpx;
}
.seven-content image {
	height: 26rpx;
	width: 20rpx;
}
.main-one {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 280rpx;
	width: 630rpx;
	margin: 0 30rpx 30rpx 30rpx;
	background: #ffffff;
	padding: 0 30rpx;
	box-shadow: 4rpx 2rpx 12rpx 2rpx #e8e8e8;
}
.one-left {
	width: 180rpx;
	height: 180rpx;
}
.one-left image {
	border-radius: 10rpx;
	width: 100%;
	height: 100%;
}
.one-right {
	height: 180rpx;
}
.o-text {
	font-size: 34rpx;
	color: #111111;
	margin-bottom: 20rpx;
}
.o-news {
	font-size: 26rpx;
	color: #666666;
	margin-bottom: 16rpx;
}
.o-zi {
	font-size: 40rpx;
	color: #008a05;
	margin-left: 270rpx;
}
.o-ti {
	font-size: 28rpx;
	color: #008a05;
}
.bottom {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 100rpx;
}
.bottom-left {
	width: 50%;
	height: 100%;
	background: #333333;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bottom-left image {
	width: 52rpx;
	height: 52rpx;
}
.bottom-text {
	font-size: 30rpx;
	color: #ffffff;
	margin-left: 10rpx;
}
.bottom-right {
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(0deg, #e5bb7a, #ebd1a9);
}
.r-top {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10rpx;
}
.r-top image {
	width: 48rpx;
	height: 39rpx;
}
.r-text {
	font-size: 30rpx;
	color: #3d2f24;
}
.r-news {
	font-size: 24rpx;
	color: #514c4c;
}
</style>
