<template>
	<view class="wrapper">
		<!-- 商家入驻 -->
		<view class="header">
			<view class="header-left">
				<view class="h-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/lv.png" mode=""></image>
					<view class="h-text">1</view>
				</view>
				<view class="h-bott h-zi">认证信息</view>
			</view>
			<view class="header-left">
				<view class="h-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/lv.png" mode=""></image>
					<view class="h-text">2</view>
				</view>
				<view class="h-bott">店铺信息</view>
			</view>
		</view>
		<scroll-view class="main" scroll-y="">
			<view class="main-a">为保证产品及采供信息曝光率，请务必认真填写</view>
			<view class="main-hezi">
				<view class="e-box">
					<view class="e-top">
						<view class="e-text">
							<text>*</text>
							店铺名称
						</view>
						<input type="text" value="" placeholder="请填写店铺名称" placeholder-class="qiugou" />
					</view>
					<view class="e-top">
						<view class="e-text">
							<text>*</text>
							客服QQ
						</view>
						<input type="number" value="" placeholder="请填写客服QQ号码" placeholder-class="qiugou" />
					</view>
					<view class="e-top">
						<view class="e-text">
							<text>*</text>
							联系人
						</view>
						<input type="text" value="" placeholder="请输入联系人姓名" placeholder-class="qiugou" />
					</view>
					<view class="e-top">
						<view class="e-text">
							<text>*</text>
							联系电话
						</view>
						<input type="number" value="" placeholder="请填写店铺联系电话" placeholder-class="qiugou" />
					</view>
					<view class="e-top" @tap="showAction">
						<view class="e-text">
							<text>*</text>
							经营类目
						</view>
						<input type="text" :value="navdata[navindex]" placeholder="请选择类目" placeholder-class="qiugou" disabled=""/>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode="" class="right"></image>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="bottom" @tap="opennew('businessmen-stationed')">提 交</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			navdata:['分类1', '分类2', '分类3'],
			navindex:-1
		};
	},
	methods: {
		bian: function(index) {
			this.myindex = index;
		},
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		},
		showAction:function(){
			var that=this
			uni.showActionSheet({
			    itemList: that.navdata,
			    success: function (res) {
					that.navindex=res.tapIndex
			    },
			    fail: function (res) {
			        console.log(res.errMsg);
			    }
			});
		}
	}
};
</script>

<style>
input {
	flex: 1;
}
.right {
	height: 26rpx;
	width: 18rpx;
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
	height: calc(100% - 230rpx);
}
.grey {
	top: 2rpx;
}
.header {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100rpx;
	background: #ffffff;
	margin-bottom: 30rpx;
}
.header-left {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.h-top {
	position: relative;
}
.h-top image {
	width: 194rpx;
	height: 36rpx;
	margin-left: 3rpx;
}

.h-text {
	font-size: 24rpx;
	color: #ffffff;
	position: absolute;
	top: 5rpx;
	left: 93rpx;
}
.h-bott {
	font-size: 24rpx;
	color: #999999;
}
.h-zi {
	color: #008a05;
}
.main-a {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	height: 90rpx;
	font-size: 26rpx;
	color: #f56c6c;
	background: #ffffff;
}
.main-b {
	height: 190rpx;
	background: #ffffff;
	padding: 0 30rpx;
}
.b-top {
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 30rpx;
	color: #000000;
	font-weight: 600;
}
.b-bott {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.b-box {
	width: 180rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.b-box image {
	width: 34rpx;
	height: 34rpx;
}
.b-text {
	font-size: 30rpx;
	color: #666666;
}
.main-box {
	height: 725rpx;
	padding: 0 30rpx;
	background: #ffffff;
}
.box-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 95rpx;
	border-bottom: 1rpx solid #e5e5e5;
}
.box-text {
	font-size: 30rpx;
	color: #000000;
}
text {
	font-size: 30rpx;
	color: #ff0000;
}
input {
	text-align: right;
	font-size: 28rpx;
	padding: 0 30rpx;
}
.box-cont {
	height: 240rpx;
}
.box-news {
	font-size: 30rpx;
	color: #000000;
	padding-top: 30rpx;
}
.box-cont image {
	width: 116rpx;
	height: 116rpx;
	margin-top: 30rpx;
}
.box-bottom {
	background: #f9f9f9;
	height: 290rpx;
	padding: 30rpx;
	font-size: 26rpx;
	color: #999999;
	line-height: 40rpx;
}
.main-hezi {
	height: 90rpx;
	font-size: 26rpx;
	color: #999999;
}
.e-box {
	padding: 0 30rpx;
	background: #ffffff;
}
.e-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 95rpx;
	border-bottom: 1rpx solid #e5e5e5;
}
.e-text {
	font-size: 30rpx;
	color: #000000;
}
text {
	font-size: 30rpx;
	color: #ff0000;
}
input {
	text-align: right;
	font-size: 28rpx;
	padding: 0 30rpx;
}
.e-cont {
	height: 240rpx;
}
.e-news {
	font-size: 30rpx;
	color: #000000;
	padding-top: 30rpx;
}
.e-cont image {
	width: 116rpx;
	height: 116rpx;
	margin-top: 30rpx;
}
.e-bottom {
	background: #f9f9f9;
	height: 290rpx;
	padding: 30rpx;
	font-size: 26rpx;
	color: #999999;
	line-height: 40rpx;
}
.e-one {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 90rpx;
	font-size: 26rpx;
	color: #999999;
	padding: 0 30rpx;
}
.e-x {
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 26rpx;
	color: #f56c6c;
}
.e-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 95rpx;
	border-bottom: 1rpx solid #e5e5e5;
}
.e-text {
	font-size: 30rpx;
	color: #000000;
}
text {
	font-size: 30rpx;
	color: #ff0000;
}
input {
	text-align: right;
	font-size: 28rpx;
	padding: 0 30rpx;
}
.bottom {
	height: 100rpx;
	background: #008a05;
	width: 100%;
	font-size: 36rpx;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
