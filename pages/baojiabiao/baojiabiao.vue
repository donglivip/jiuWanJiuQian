<template>
	<view class="wrapper">
		<scroll-view class="main" scroll-y="">
			<view class="main-two">
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
			<view class="main-box">
				<view class="main-one">
					<view class="one-top">
						<view class="one-left">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
						</view>
						<view class="one-right">
							<view class="o-text">汽车轮胎内胎汽车轮胎内胎</view>
							<view class="o-news">品牌：德国制造品牌德国</view>
							<view class="o-news">规格：直径50cm</view>
							<view class="o-zi">1000<text class="o-ti">个</text></view>
						</view>
					</view>
					<view class="one-bottom">
						<view class="b-text">报价金额</view>
						<input type="text" value="" placeholder="请输入报价金额" placeholder-class="input"/>
					</view>
				</view>
				<view class="main-one">
					<view class="one-top">
						<view class="one-left">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
						</view>
						<view class="one-right">
							<view class="o-text">汽车轮胎内胎汽车轮胎内胎</view>
							<view class="o-news">品牌：德国制造品牌德国</view>
							<view class="o-news">规格：直径50cm</view>
							<view class="o-zi">1000<text class="o-ti">个</text></view>
						</view>
					</view>
					<view class="one-bottom">
						<view class="b-text">报价金额</view>
						<input type="text" value="" placeholder="请输入报价金额" placeholder-class="input"/>
					</view>
				</view>
				<view class="main-one">
					<view class="one-top">
						<view class="one-left">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
						</view>
						<view class="one-right">
							<view class="o-text">汽车轮胎内胎汽车轮胎内胎</view>
							<view class="o-news">品牌：德国制造品牌德国</view>
							<view class="o-news">规格：直径50cm</view>
							<view class="o-zi">1000<text class="o-ti">个</text></view>
						</view>
					</view>
					<view class="one-bottom">
						<view class="b-text">报价金额</view>
						<input type="text" value="" placeholder="请输入报价金额" placeholder-class="input"/>
					</view>
				</view>
			</view>			
		</scroll-view>
		<view class="bottom" @tap="opennew('biaojiachenggong')">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				opennew:function(id){
					uni.navigateTo({
						url: '../'+id+'/'+id
					});
					
				}
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
	height: calc(100% - 100rpx);
}
.main-two{
	height: 360rpx;
	background: #FFFFFF;
	padding: 30rpx;
	margin-bottom: 35rpx;
}
.two-box{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.two-text{
	font-size: 28rpx;
	color: #333333; 
}
.two-news{
	font-size: 28rpx;
	color: #666666; 
}
.two-zi{
	font-size: 28rpx;
	color: #666666; 
	word-break: break-all;
	height: 60rpx;
	line-height: 30rpx;
	width: 380rpx;
}
.main-one{	
	height: 380rpx;
	width: 630rpx;
	margin: 0 30rpx 30rpx 30rpx;
	background: #FFFFFF;
	padding: 0 30rpx;
	box-shadow: 4rpx 2rpx 12rpx 2rpx #E8E8E8;
}
.one-top{
	height: 290rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #E8E8E8;
}
.one-left{
	width: 180rpx;
	height: 180rpx;
	
}
.one-left image{
	border-radius: 10rpx;
	width: 100%;
	height: 100%;
}
.one-right{
	height: 180rpx;
}
.o-text{
	font-size: 34rpx;
	color: #111111;
	margin-bottom: 20rpx;
}
.o-news{
	font-size: 26rpx;
	color: #666666;
	margin-bottom: 16rpx;
}
.o-zi{
	font-size: 40rpx;
	color: #008A05;
	margin-left: 270rpx;
}
.o-ti{
	font-size: 28rpx;
	color: #008A05;
}
.one-bottom{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 90rpx;
}
.b-text{
	font-size: 30rpx;
	color: #333333;
}
input{
	width: 240rpx;
	height: 80rpx;
	border: 0;
	text-align: right;
}
.bottom{
	height: 100rpx;
	background: #000000;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 36rpx;
	color: #FFFFFF;
}

</style>
