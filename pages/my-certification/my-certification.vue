<template>
	<view class="wrapper">
		<view class="main">
			<view class="main-one"> 为增加产品及采供信息曝光度，建议商家使用“企业认证”</view>
			<view class="main-box" @tap="opennew('enterprise-certification')">
				<view class="box-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiyerenzheng.png" mode=""></image>
					<view class="box-text">企业认证</view>
				</view>
				<view class="box-content">
					<view class="box-news">认证内容：法人身份证、营业执照</view>
					<view class="box-news">适用于：企业采购商、供应商、个体经营户</view>
				</view>
				<view class="box-b">
					<view class="box-bottom">立即认证</view>
				</view>
			</view>
			<view class="main-box" @tap="opennew('personal-certification')">
				<view class="box-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/geren.png" mode=""></image>
					<view class="box-text">个人认证</view>
				</view>
				<view class="box-content">
					<view class="box-news box-zi">认证内容：姓名、身份证</view>
					<view class="box-news box-zi">适用于：个人采购者/卖家</view>
				</view>
				<view class="box-b">
					<view class="box-bottom">立即认证</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			opennew:function(id){
				uni.navigateTo({
					url: '../'+id+'/'+id
				});
				
			}
		}
	}
</script>

<style>
.wrapper,uni-page-body, uni-page-refresh,page{
		background: #F9F9F9;height: 100%;overflow: hidden;
	}
.main{
	height: 100%;
}
.main-one{
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	font-size: 26rpx ;
	color: #999999;
}
.main-box{
	height: 485rpx;
	margin: 0 30rpx 30rpx 30rpx;
	background: #FFFFFF;
	box-shadow: 1rpx 3rpx 10rpx 1rpx #E7E7E7 ;
}
.box-top{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 30rpx;
	padding-top: 20rpx;
}
.box-top image{
	width: 214rpx;
	height: 143rpx;
	margin-bottom: 14rpx;
}
.box-text{
	font-size: 34rpx ;
	color: #333333;
	font-weight: 700;
}
.box-content{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.box-news{
	width: 500rpx;
	font-size: 26rpx ;
	color: #999999;
	margin-bottom: 20rpx;
}
.box-zi{
	width: 300rpx;
}
.box-b{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30rpx;
}
.box-bottom{
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26rpx ;
	color: #008A05;
	background: #E6F3E6;
	width: 140rpx;
	height: 60rpx;
	text-align: center;
	line-height: 60rpx;
	border-radius: 4rpx;
}

</style>
