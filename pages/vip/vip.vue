<template>
	<view class="wrapper">
		<!-- 圆角背景 -->
		<view class="headback"></view>
		<!-- 会员轮播图 -->
		<swiper class="swiper" @change='swiperChange' next-margin='40rpx' previous-margin='40rpx'>
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<view class="vip-one">
						<view class="vip-one-left">
							<view class="vip-title">
								久千宝会员
							</view>
							<view class="vip-time">
								乐享价：¥1000/365天
							</view>
						</view>
						<view class="vip-one-right" @tap="openvip(0)">
							立即开通
						</view>
					</view>
					<view class="vip-two">
                         平均每天仅 
						 <text>2.7</text>
						 元
					</view>
					<view class="vip-three">
						开通会员 乐享6大权益，限时开放
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green" :style="{background: 'url('+imageURL+')','background-size':'102% 102%'}">
					<view class="vip-one">
						<view class="vip-one-left">
							<view class="vip-title">
								久万宝会员
							</view>
							<view class="vip-time">
								乐享价：¥5988/365天
							</view>
						</view>
						<view class="vip-one-right" @tap="openvip(1)">
							立即开通
						</view>
					</view>
					<view class="vip-two">
					     平均每天仅 
						 <text>16</text>
						 元
					</view>
					<view class="vip-three">
						开通会员 乐享10大权益，限时开放
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="title">
			会员权益
		</view>
		<view class="Equity-box">
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity01.png" mode=""></image>
				<view class="text">
					企业店铺
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity02.png" mode=""></image>
				<view class="text">
					发布求购信息
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity03.png" mode=""></image>
				<view class="text">
					智能商机匹配
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity04.png" mode=""></image>
				<view class="text">
					求购信息报价
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity05.png" mode=""></image>
				<view class="text">
					产品优先展示
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity06.png" mode=""></image>
				<view class="text">
					VIP客服
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity07-grey.png" mode="" v-if="swiperIndex==0"></image>
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity07.png" mode="" v-if="swiperIndex==1"></image>
				<view class="text">
					全站推广30天
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity08-grey.png" mode="" v-if="swiperIndex==0"></image>
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity08.png" mode="" v-if="swiperIndex==1"></image>
				<view class="text">
					企业独立网站
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity09-grey.png" mode="" v-if="swiperIndex==0"></image>
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity09.png" mode="" v-if="swiperIndex==1"></image>
				<view class="text">
					关键词优化
				</view>
			</view>
			<view class="Equity">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity10-grey.png" mode="" v-if="swiperIndex==0"></image>
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/Equity10.png" mode="" v-if="swiperIndex==1"></image>
				<view class="text">
					免费店铺运营
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperIndex:0,
			imageURL:'https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/vip-back02.png'
		};
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
		// 切换会员种类
		swiperChange:function(index){
			this.swiperIndex=index.detail.current
		},
		// 开通会员
		openvip:function(){
			// 5+app
			// #ifdef  APP-PLUS
			uni.showActionSheet({
			    itemList: ['支付宝支付', '微信支付'],
			    success: function (res) {
					if(res.tapIndex==0){
						//支付宝
						uni.requestPayment({
						    provider: 'alipay',
						    orderInfo: 'orderInfo', //微信、支付宝订单数据
						    success: function (res) {
						        console.log('success:' + JSON.stringify(res));
						    },
						    fail: function (err) {
						        console.log('fail:' + JSON.stringify(err));
						    }
						});
					}else{
						// 微信小程序支付
						uni.requestPayment({
						    provider: 'wxpay',
						    timeStamp: String(Date.now()),
						    nonceStr: 'A1B2C3D4E5',
						    package: 'prepay_id=wx20180101abcdefg',
						    signType: 'MD5',
						    paySign: '',
						    success: function (res) {
						        console.log('success:' + JSON.stringify(res));
						    },
						    fail: function (err) {
						        console.log('fail:' + JSON.stringify(err));
						    }
						});
					}
			    },
			    fail: function (res) {
			        console.log(res.errMsg);
			    }
			});
			// #endif
			// 小程序
			// #ifdef  MP-WEIXIN
			// 微信小程序支付
			uni.requestPayment({
			    provider: 'wxpay',
			    timeStamp: String(Date.now()),
			    nonceStr: 'A1B2C3D4E5',
			    package: 'prepay_id=wx20180101abcdefg',
			    signType: 'MD5',
			    paySign: '',
			    success: function (res) {
			        console.log('success:' + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log('fail:' + JSON.stringify(err));
			    }
			});
			// #endif
		}
	},
	onLoad:function(){
		this.myajax()
	}
};
</script>

<style>
	.Equity image{
		width: 90rpx;
		height: 90rpx;
		margin-bottom: 20rpx;
	}
	.Equity{
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #323232;
		margin: 30rpx 0;
	}
	.Equity-box{
		display: flex;
		flex-wrap: wrap;
		margin: 25rpx 25rpx 0;
	}
	.title{
		font-size: 36rpx;
		font-weight: bold;
		text-align: center;
		margin: 30rpx 0 0;
	}
	.uni-bg-green .vip-one-right{
		color: #EDD4B0;
	}
	.vip-three{
		color: #8B572A;
		font-size: 26rpx;
		margin: 35rpx 35rpx 0;
	}
	.vip-two{
		text-align: right;
		color: #D90000;
		font-size: 24rpx;
		margin: 0 35rpx;
	}
	.vip-two text{
		font-size: 40rpx;
		margin: 0 2rpx;
	}
	.vip-one{
		display: flex;
		justify-content: space-between;
		margin: 50rpx 35rpx 0;
	}
	.vip-one-right{
		width: 223rpx;
		height: 68rpx;
		text-align: center;
		line-height: 68rpx;
		background: url(https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/btn-back.png) no-repeat;
		background-size:100% 100% ;
		font-weight: 500;
		font-size: 34rpx;
	}
	.vip-time{
		font-size: 28rpx;
		color: #333333;
	}
	.vip-title{
		font-size: 36rpx;
		font-weight: bold;
		color: #2D2B31;
		margin-bottom: 30rpx;
	}
	.vip-one{
		display: flex;
		align-items: center;
	}
	.uni-bg-red .vip-title{
		color: #E7CB90;
	}
	.uni-bg-red .vip-three,.uni-bg-red .vip-time{
		color: #FFFFFF;
	}
	.uni-bg-red .vip-two{
		color: #F3EBE0;
	}
	.uni-bg-red .vip-one-right{
		color: #3D2F24;
		background: url(https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/btn-back01.png) no-repeat;
		background-size:100% 100% ;
	}
	.swiper{
		width: 100%;
		margin: 0 auto;
	}
	.swiper-item{
		width: 100%;
		height: 346rpx;
		display: flex;
		flex-direction: column;
	}
	.uni-bg-red{
		background: url(https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/vip-back01.png) no-repeat;
		background-size: 102% 102%;
		background-position: center;
	}
	.uni-bg-green{
		background-size: 102% 102%;
		background-position: center;
	}
.headback {
	background: #000000;
	position: fixed;
	top: 0;
	left: -10%;
	width: 120%;
	height: 266rpx;
	border-bottom-left-radius: 45%;
	border-bottom-right-radius: 45%;
}
</style>
