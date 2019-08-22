<template>
	<scroll-view class="wrapper" scroll-y="" @scrolltolower='myajax()'>
		<view class="main">
			<view class="main-one">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qianback.png" mode="" class="back"></image>
				<view class="one-box">
					<view class="one-text">868.00</view>
					<view class="one-news">￥余额</view>
					 <!-- @tap="opennew('cash-withdrawal')" -->
					<view class="one-x">
						<!-- <image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/suo.png" mode=""></image>
						<view class="one-word">提现</view> -->
						<view class="one-word">移动端暂不支持提现,请点击<text class="url" @tap="gourl">www.9w9q.cn</text>提现。</view>
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
		return {
			pageNum:0, //当前页数
			mydata:[],  //收支记录数组
		};
	},
	methods: {
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		},
		gourl:function(){
			uni.setClipboardData({
			    data: 'www.9w9q.cn',
			    success: function () {
			       
			    }
			});
		},
		// 初始化数据
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
	},
	onShow:function(){
		this.pageNum=0
		this.mydata=[]
		this.myajax()
	}
};
</script>

<style>
	.url{
		color: #008a05;
	}
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
