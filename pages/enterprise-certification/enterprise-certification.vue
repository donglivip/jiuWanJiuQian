<template>
	<view class="wrapper">
		<view class="main">
			<view class="main-one">适用：企业采购商、供应商、个体经营户</view>
			<view class="main-box">
				<view class="box-top">
					<view class="box-text">
						<text>*</text>
						企业名称
					</view>
					<input type="text" value="" placeholder="请输入企业完整名称" placeholder-class="qiugou" />
				</view>
				<view class="box-cont">
					<view class="box-news">
						<text>*</text>
						营业执照图片
					</view>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tianjia.png" mode="" @tap="upimg()" v-if="enImg==''"></image>
					<image :src="enImg" @tap="upimg()" v-if="enImg!=''"></image>
				</view>
				<view class="box-bottom">
					要求：
					<br />
					·执照或副本必须在有效期内，且带有最新年检章（当年成立的公司可以无年检章）
					<br />
					·必须是彩色扫描件或数码照片，复印件无效
					<br />
					·营业执照四边角需清晰，信息需完整,不能遮挡、不能涂抹、不能修改
					<br />
					·必须为中国大陆工商局颁发
				</view>
			</view>
		</view>
		<view class="bottom" @tap="opennew('VerificationPhone')">提 交</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			enImg:''
		};
	},
	methods: {
		//跳转页面
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		},
		upimg: function() {
			var that=this
			//调取相册
			uni.chooseImage({
				count: 1, //默认9
				success: function(res) {
					console.log(res.tempFilePaths[0]);
					uni.uploadFile({
						url: getApp().globalData.byurl + '/buyer/base/upload', //仅为示例，非真实的接口地址
						filePath: res.tempFilePaths[0],
						name: 'file',
						formData: {
							scene: 'idcard'
						},
						success: uploadFileRes => {
							that.enImg=JSON.parse(uploadFileRes.data).url
						},
						fail: err => {
							console.log(err);
						}
					});
				},
				fail: function(fa) {
					//提示框
					uni.showToast({
						title: '失败，请重试',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style>
.wrapper,
uni-page-body,
uni-page-refresh,
page {
	background: #f9f9f9;
	height: 100%;
	overflow: hidden;
}
.main {
	height: calc(100% - 100rpx);
}
.main-one {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 90rpx;
	font-size: 26rpx;
	color: #999999;
	padding: 0 30rpx;
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
