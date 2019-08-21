<template>
	<view class="wrapper">
		<view class="title">请绑定手机号</view>
		<view class="text">方便跟您联系</view>
		<view class="alert">如果您已有久万久千账号，请使用该账号绑定手机号进行关联</view>
		<view class="phone-box">
			<view class="phone-top">
				<input type="number" value="" placeholder="请输入手机号" placeholder-class="qiugou" />
				<view class="phone-btn">发送验证码</view>
			</view>
			<view class="code-box">
				<input type="number" value="" />
				<input type="number" value="" />
				<input type="number" value="" />
				<input type="number" value="" />
			</view>
		</view>
		<view class="bottom">
			<view class="statement">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/check-actice.png" mode="" v-if="checksate == 1" @tap="changecheck(0)"></image>
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/check.png" mode="" v-if="checksate == 0" @tap="changecheck(1)"></image>
				<view class="statement-text">
					我已阅读并同意
					<text>《严禁发布规则声明》</text>
				</view>
			</view>
		</view>
		<view class="submit">提交</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			checksate: 1
		};
	},
	methods: {
		changecheck:function(index){
			this.checksate=index
		}
	}
};
</script>

<style>
.statement image {
	width: 34rpx;
	height: 34rpx;
	margin-right: 20rpx;
}
.statement {
	display: flex;
	align-items: center;
}
.submit {
	background:rgba(0,138,5,1);
	border:2rpx solid rgba(5,5,5,0.08235294117647057);
	border-radius: 50rpx;
	text-align: center;
	width: 670rpx;
	height: 98rpx;
	line-height: 98rpx;
	color: #ffffff;
	font-size: 36rpx;
	margin: 30rpx auto;
}
.bottom text {
	color: #008a05;
	
}
.bottom {
	display: flex;
	justify-content: center;
	color: #666666;
	font-size: 26rpx;
}
.code-box input {
	width: 60rpx;
	border-bottom: 1px solid #008a05;
	height: 60rpx;
	text-align: center;
	line-height: 60rpx;
	margin: 0 36rpx;
}
.code-box {
	display: flex;
	padding: 70rpx 30rpx 50rpx;
	justify-content: center;
}
.phone-btn {
	border: 1px solid #008a05;
	color: #008a05;
	border-radius: 30rpx;
	width: 200rpx;
	height: 60rpx;
	text-align: center;
	line-height: 60rpx;
	margin: 0 30rpx;
	font-size: 30rpx;
}
.phone-top {
	border-bottom: 1px solid #e8e8e8;
	height: 97rpx;
	display: flex;
	align-items: center;
}
.phone-top input {
	flex: 1;
	text-indent: 35rpx;
}
.phone-box {
	background: #ffffff;
	border-radius: 20rpx;
	margin: 39rpx 30rpx 239rpx;
	box-shadow:0px 3px 10px rgba(0,0,0,0.16);
}
.wrapper,
uni-page-body,
uni-page-refresh,
page {
	background: #f9f9f9;
	height: 100%;
	overflow: hidden;
}
.title {
	font-size: 40rpx;
	color: #333333;
	margin: 43rpx 30rpx 20rpx;
	font-weight: 600;
}
.text {
	font-size: 30rpx;
	color: #666666;
	margin: 0 30rpx 87rpx;
	font-weight: 600;
}
.alert {
	color: #008a05;
	text-align: center;
	font-size: 24rpx;
}
</style>
