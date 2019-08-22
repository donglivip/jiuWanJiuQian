<template>
	<view class="wrapper">
		<view class="main" v-if="type == -1">
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
		<!-- 正在审核 -->
		<div class="wrapper backwhite" v-if="type == 1">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/examine.png" mode="" class="examine-img"></image>
			<div class="examine-title tcenter">正在审核</div>
			<div class="examine-time tcenter">预计2小时-1天内完成</div>
			<div class="examine-alert tcenter">请您绑定手机号，审核结果我们会通过短信通知您</div>
			<div class="examine-btn center" @tap="opennew('VerificationPhone')">点此绑定手机号</div>
		</div>
		<!-- 审核通过 -->
		<div class="wrapper backwhite" v-if="type == 2">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/adopt.png" mode="" class="examine-img"></image>
			<div class="examine-title tcenter">审核通过</div>
			<div class="examine-time tcenter">恭喜，您已成功入驻久万久千商城</div>
			<div class="examine-time tcenter">
		         您可以登录
				<text class="examine-alert">
		        www.9w9q.com
		        </text>
				调整店铺信息
		    </div>
			<div class="examine-btn center" @tap="copyUrl">复制链接</div>
		</div>
		<!-- 审核不通过 -->
		<div class="wrapper backwhite" v-if="type == 3">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/adoptfail.png" mode="" class="examine-img"></image>
			<div class="examine-title tcenter">审核不通过</div>
			<div class="examine-time tcenter">很遗憾，你的认证审核不通过</div>
			<div class="examine-fail tcenter">
		       原因: 营业执照已过期，请重新办理后再次认证
		    </div>
			<div class="examine-btn center" @tap="reset">重新认证</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mydata:{},//认证状态对象
				type:-1
			}
		},
		methods: {
			// 重新认证
			reset:function(){
				this.type=-1
			},
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
			opennew:function(id){
				uni.navigateTo({
					url: '../'+id+'/'+id
				});
				
			}
		},
		onShow:function(){
			this.myajax()
		}
	}
</script>

<style>
	.examine-fail{
			font-size:28rpx;
			font-family:Source Han Sans CN;
			font-weight:400;
			line-height:48rpx;
			color:rgba(245,108,108,1);
		}
	.examine-btn {
		width: 470rpx;
		height: 98rpx;
		background: rgba(0, 138, 5, 1);
		border: 2px solid rgba(5, 5, 5, 0.08235294117647057);
		border-radius: 48rpx;
		margin: 74rpx auto 0;
		color: #FFFFFF;
	}
	.examine-alert {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 48rpx;
		color: rgba(0, 138, 5, 1);
	}
	.examine-time {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 48rpx;
		color: rgba(102, 102, 102, 1);
		margin: 15rpx 0 20rpx;
	}
	.examine-title {
		font-size: 40rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		line-height: 68rpx;
		color: rgba(51, 51, 51, 1);
	}
	.examine-img {
		width: 186rpx;
		height: 186rpx;
		display: block;
		margin: 100rpx auto 55rpx;
	}
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
