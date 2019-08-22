<template>
	<scroll-view class="wrapper" scroll-y="" @scrolltolower='myajax()'>
		<view class="back"></view>
		<view class="header">
			<view class="header-top" @tap="opennew('sousuo')">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sousuo.png" mode=""></image>
				<input type="text" value="请输入关键字" class="sousuo" disabled="" placeholder-class="input" />
			</view>
			<view class="header-bottom">
				<swiper class="swiper" autoplay="true"  circular='true' indicator-dots='true' indicator-active-color='#ffffff' indicator-color='rgba(255,255,255,.6)'>
					<swiper-item><view class="swiper-item uni-bg-red"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/banner1.png"></image></view></swiper-item>
					<swiper-item><view class="swiper-item uni-bg-green"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/banner1.png"></image></view></swiper-item>
					<swiper-item><view class="swiper-item uni-bg-blue"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/banner1.png"></image></view></swiper-item>
				</swiper>
			</view>
		</view>
		<view class="main">
			<view class="main-one" @tap="opennew('shaixuan')">
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/wujin.png" mode=""></image>
					<view class="one-text">机械五金</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/jiaju.png" mode=""></image>
					<view class="one-text">建材家居</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/fuzhuang.png" mode=""></image>
					<view class="one-text">服装纺织</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/huagong.png" mode=""></image>
					<view class="one-text">化工橡塑</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shangwu.png" mode=""></image>
					<view class="one-text">商务服务</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/feiji.png" mode=""></image>
					<view class="one-text">安防消防</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dianzi.png" mode=""></image>
					<view class="one-text">电工电子</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/kuangchan.png" mode=""></image>
					<view class="one-text">冶金矿产</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/nonglin.png" mode=""></image>
					<view class="one-text">农林牧渔</view>
				</view>
				<view class="one-box">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/bangong.png" mode=""></image>
					<view class="one-text">包装办公</view>
				</view>
			</view>
			<view class="main-two">
				<view class="two-text">求购信息</view>
				<view class="two-news">
					最新求购信息
					<text>1,334,489条</text>
					待报价
				</view>
			</view>
			<view class="box" @tap="opennew('qiugouxiangqing')">
				<view class="main-three">
					<view class="three-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image></view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image></view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image></view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image></view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			pageNum:0, //当前页数
			mydata:[], //求购单数组
		};
	},
	onLoad() {
		this.myajax()
	},
	methods: {
		//跳转页面
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		},
		// 拉取数据
		myajax:function(){
			var that=this
			this.pageNum++
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
					that.mydata.push(res.data)
			    }
			});
			setTimeout(function() {
				uni.hideLoading()
			}, 1000);
		}
	}
};
</script>

<style>
.wrapper {
	background: #f9f9f9;
}

.back {
	background: linear-gradient(-55deg, red, blue);
	position: fixed;
	top: 0;
	left: -5%;
	width: 110%;
	height: 226rpx;
	border-bottom-left-radius: 15%;
	border-bottom-right-radius: 15%;
}

.header {
	position: relative;
	z-index: 99;
	margin: 10rpx 0;
}

.header-top {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 56rpx;
	width: 680rpx;
	background: #ffffff;
	margin: 0 30rpx;
	border-radius: 8rpx;
}

.header-top image {
	height: 24rpx;
	width: 24rpx;
}

.sousuo {
	border: 0;
	width: 150rpx;
	height: 50rpx;
	margin-left: 10rpx;
	font-size: 24rpx;
	color: #b2b2b2;
}

.header-bottom {
	margin: 0 30rpx;
	height: 260rpx;
	width: 680rpx;
	border-radius: 8rpx;
}
.uni-swiper-dots-horizontal{
	bottom: 30rpx!important;
}
.header-bottom image {
	height: 300rpx;
	width: 680rpx;
}

.main {
	position: relative;
	z-index: 33;
}

.main-one {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100%;
	height: 365rpx;
	background: #ffffff;
	padding: 10rpx 30rpx;
}

.one-box {
	width: 145rpx;
	height: 160rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.one-box image {
	width: 104rpx;
	height: 82rpx;
	margin-bottom: 10rpx;
}

.one-text {
	font-size: 26rpx;
	color: #323232;
}

.main-two {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20rpx;
	height: 100rpx;
	background: #f9f9f9;
}

.two-text {
	color: #333333;
	font-size: 40rpx;
}

.two-news {
	color: #999999;
	font-size: 20rpx;
}

text {
	color: #ff9900;
	font-size: 30rpx;
}

.main-three {
	height: 200rpx;
	background: #ffffff;
	padding: 0 20rpx;
	margin-bottom: 20rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.three-left {
	height: 140rpx;
	width: 140rpx;
	margin-right: 28rpx;
}

.three-left image {
	width: 100%;
	height: 100%;
	border-radius: 12rpx;
}

.three-content {
	width: 340rpx;
	flex: 1;
}

.c-top {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 10rpx;
}

.c-top image {
	height: 30rpx;
	width: 30rpx;
}

.c-text {
	font-size: 36rpx;
	color: #111111;
	margin-right: 15rpx;
}

.c-cont {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 10rpx;
}

.c-red {
	font-size: 22rpx;
	color: #f56c6c;
	width: 96rpx;
	height: 42rpx;
	margin-right: 20rpx;
	border-radius: 6rpx;
	background: #fef0f0;
	text-align: center;
	line-height: 42rpx;
}

.c-yellow {
	font-size: 22rpx;
	color: #e6a23c;
	width: 96rpx;
	height: 42rpx;
	margin-right: 20rpx;
	border-radius: 6rpx;
	background: #fdf6ec;
	text-align: center;
	line-height: 42rpx;
}

.c-green {
	font-size: 22rpx;
	color: #67c23a;
	width: 96rpx;
	height: 42rpx;
	margin-right: 20rpx;
	border-radius: 6rpx;
	background: #f0f9eb;
	text-align: center;
	line-height: 42rpx;
}

.c-bottom {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.c-bottom image {
	height: 20rpx;
	width: 20rpx;
	margin-right: 20rpx;
}

.c-zi {
	color: #666666;
	font-size: 24rpx;
}

.three-right {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.r-top {
	color: #ffffff;
	font-size: 22rpx;
	background: #008a05;
	border-radius: 26rpx;
	width: 130rpx;
	height: 50rpx;
	text-align: center;
	line-height: 50rpx;
	margin-bottom: 20rpx;
}

.r-bot {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.r-bot image {
	height: 24rpx;
	width: 20rpx;
}

.r-text {
	color: #666666;
	font-size: 24rpx;
	margin-left: 15rpx;
}
</style>
