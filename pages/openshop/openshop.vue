<template>
	<scroll-view class="wrapper" scroll-y>
		<view class="back"></view>
		<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/opshopback.jpg" mode=""></image>
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
		<view class="submit" @tap="opennew('merchants-whosell')">提交</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				checksate:1
			}
		},
		methods: {
			changecheck:function(index){
				this.checksate=index
			},
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
	height: 100%;overflow: hidden;
}
image{width: 100%;height: 871rpx;position: relative;z-index: 99999;}
.back{
	background: #FFF2CA;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 500rpx;
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
	margin-top: 90rpx;
}
.statement image {
	width: 34rpx;
	height: 34rpx;
	margin-right: 20rpx;
}
.statement {
	display: flex;
	align-items: center;
}
</style>
