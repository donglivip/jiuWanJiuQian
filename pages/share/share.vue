<template>
	<scroll-view class="wrapper" scroll-y="" :style="{ background: 'url(' + imageURL + ')', 'background-size': '100% 100%' }">
		<swiper class="swiper" autoplay="true" interval="3000" circular="true" vertical="true" display-multiple-items="3">
			<swiper-item><text class="font">用户158****5214已分享9人加入会员，获得900元奖金</text></swiper-item>
			<swiper-item><text class="font">用户158****5214已分享9人加入会员，获得900元奖金</text></swiper-item>
			<swiper-item><text class="font">用户158****5214已分享9人加入会员，获得900元奖金</text></swiper-item>
			<swiper-item><text class="font">用户158****5214已分享9人加入会员，获得900元奖金</text></swiper-item>
			<swiper-item><text class="font">用户158****5214已分享9人加入会员，获得900元奖金</text></swiper-item>
			<swiper-item><text class="font">用户158****5214已分享9人加入会员，获得900元奖金</text></swiper-item>
		</swiper>
		<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/share02.png" mode="" class="shareimg02" @tap="share()"></image>
		<!-- 分享进度 -->
		<view class="share03">
			<view class="share03-top">
				<view class="share03-title">转发好友赢现金</view>
				<view class="share-text">你领10%现金奖励，最低100元，最高589元</view>
			</view>
			<view class="text-box dflex">
				<view class="text">
					成功1人
					<div class="ricrle" :class="[Percentage02 > 0 ? 'red' : '']"></div>
				</view>
				<view class="text">
					10人
					<div class="ricrle" :class="[Percentage02 > 0.2 ? 'red' : '']"></div>
				</view>
				<view class="text">
					30人
					<div class="ricrle" :class="[Percentage02 > 0.6 ? 'red' : '']"></div>
				</view>
				<view class="text">
					50人
					<div class="ricrle" :class="[Percentage02 == 1 ? 'red' : '']"></div>
				</view>
			</view>
			<view class="bar">
				<view class="bar-inner" :style="{ width: Percentage }"><view class="num center">20人</view></view>
			</view>
			<view class="text-box dflex">
				<view class="text">最低100元</view>
				<view class="text">1000元</view>
				<view class="text">3000元</view>
				<view class="text">5000元</view>
			</view>
			<view class="text-bottom tcenter">
				已累计领取 <text class="cred">56777</text>元
			</view>
		</view>
		<!-- 活动规则 -->
		<view class="rule" :style="{ background: 'url(' + imageURL02 + ')', 'background-size': '100% 100%' }">
			<div class="rule-inner">
				活动规则：
				<br />
				1、点击上方
				<text>【一键转发领奖励】</text>
				按钮，将包含海量求购信息的本网站链接转发到你的朋友圈、微信 群、 QQ群、微信好友等，因你的转发吸引到一商家加入会员，你即获得最低100元现金红包一个及期期分红一次。
				<br />
				2、本活动永久开启，欢迎成为久万久千网站推广大使，携手共创辉煌。
				<br />
				3、如有疑问请致电400—88888888
			</div>
		</view>
		<!-- 一键转发 -->
		<div class="btn center" @tap="share()">一键转发领奖励</div>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			Percentage: '40%', //20% 60%
			Percentage02: 0.4,
			imageURL: 'https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shareback.jpg',
			imageURL02: 'https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/share04back.png',
			mydata:{}
		};
	},
	onLoad:function(){
		this.myajax()
	},
	methods: {
		// 初始化数据
		myajax:function(){
			var that=this
			uni.showLoading({
			    title: '加载中',
				mask:true
			});
			uni.request({
			    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
			    data: {
			        text: 'uni.request'
			    },
			    success: (res) => {
			        console.log(res.data);
					that.mydata=res.data
			    }
			});
			setTimeout(function() {
				uni.hideLoading()
			}, 1000);
		},
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
		}
	},
	onShareAppMessage(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		return {
			title: '转发赚钱',
			path: '/pages/index/index?id=123'
		};
	}
};
</script>

<style>
	.cred{
		color: #FF0000;
		font-size: 30rpx;
		font-weight: 600;
		margin: 0 6rpx;
	}
	.text-bottom{
		font-size: 26rpx;
		margin: 60rpx auto 0;
	}
.btn {
	width: 592rpx;
	height: 96rpx;
	background: url(https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sharebtn.png) no-repeat;
	background-size: 100% 100%;
	margin: 55rpx auto;
	color: #532121;
	font-size: 36rpx;
	font-weight: 600;
}
.rule-inner {
	width: 587rpx;
	height: 410rpx;
	font-size: 26rpx;
	font-family: Source Han Sans CN;
	font-weight: 400;
	line-height: 44rpx;
	color: rgba(51, 51, 51, 1);
	margin: 276rpx 70rpx 0;
}
.rule {
	width: 700rpx;
	height: 750rpx;
	background-size: 100% 100%;
	margin: 0 auto;
	overflow: hidden;
}
.red {
	background: #bf2422 !important;
}
.num {
	width: 70rpx;
	height: 32rpx;
	background: rgba(255, 212, 52, 1);
	border-radius: 16rpx;
	font-size: 22rpx;
	color: rgba(199, 45, 43, 1);
}
.bar-inner {
	height: 5rpx;
	background: #bf2422;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	min-width: 70rpx;
}
.bar {
	width: 600rpx;
	height: 5rpx;
	background: #eeeee9;
	margin: 30rpx auto 30rpx 60rpx;
}
.text-box {
	margin: 0 10rpx;
	display: flex;
}
.text-box .ricrle {
	position: absolute;
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	top: 55rpx;
	left: 25rpx;
	background: #eeeee9;
}
.text-box .text {
	font-size: 24rpx;
	font-family: Source Han Sans CN;
	font-weight: 400;
	color: rgba(102, 102, 102, 1);
	white-space: nowrap;
	width: 50rpx;
	position: relative;
}
.text-box .text:nth-of-type(1) {
	width: 100rpx;
}
.text-box .text:nth-of-type(2) {
	margin-left: 18rpx;
}
.text-box .text:nth-of-type(3) {
	margin-left: 180rpx;
}
.text-box .text:nth-of-type(4) {
	margin-left: 190rpx;
}
.share-text {
	font-size: 24rpx;
	font-family: Source Han Sans CN;
	font-weight: 400;
	line-height: 30rpx;
	color: rgba(153, 153, 153, 1);
	text-align: right;
}
.share03-title {
	color: #bb2021;
	font-size: 30rpx;
	text-align: right;
}
.share03-top {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	height: 120rpx;
	margin-right: 30rpx;
}
.share03 {
	width: 700rpx;
	height: 361rpx;
	box-shadow: 0rpx 5rpx 10rpx rgba(0, 0, 0, 0.1);
	background: url(https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/share03.png) no-repeat;
	background-size: 100% 100%;
	margin: 90rpx auto 80rpx;
}
.shareimg02 {
	width: 690rpx;
	height: 797rpx;
	display: block;
	margin: 0 auto;
}
.swiper {
	color: #ffffff;
	width: 690rpx;
	height: 170rpx;
	background: rgba(51, 51, 51, 0.43);
	border-radius: 10rpx;
	margin: 390rpx 30rpx 30rpx;
	font-size: 0.26rem;
}
uni-swiper-item,
swiper-item {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26rpx;
}
.wrapper {
	background-size: 100% 100%;
	border: 1px solid #ffffff;
}
</style>
