<template>
	<view class="wrapper">
		<view class="header">
			<view class="header-left">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sousuo.png" mode=""></image>
				<input type="text" value="" placeholder="请输入求购信息关键字" placeholder-class="sou" confirm-type="search" @confirm="myajax"/>
			</view>
			<view class="header-right" @tap="back">取消</view>
		</view>
		<view class="main">
			<view class="main-one">
				<view class="one-top">热门搜索</view>
				<view class="one-bottom">
					<view class="one-text">内容内容</view>
					<view class="one-text">哈哈哈</view>
					<view class="one-text">内容内容内容内容内容内容</view>
					<view class="one-text">内容内容</view>
					<view class="one-text">内容内容内容内容内容内容</view>
					<view class="one-text">内容内容</view>
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
			// 搜索热门
			myajax:function(){
				uni.request({
				    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
				    data: {
				        text: 'uni.request'
				    },
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
				        console.log(res.data);
				        this.text = 'request success';
				    }
				});
			},
			// 返回上一页
			back:function(){
				uni.navigateBack();
			}
		},
		onShow:function(){
			this.myajax()
		}
	}
</script>

<style>
.wrapper{
	background: #FFFFFF;
}
.header{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	border-bottom: 1px solid #E8E8E8;
}
.header-left{
	width: 610rpx;
	height: 60rpx;
	background: #F5F5F5;
	border-radius: 6rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.header-left image{
	height: 28rpx;
	width: 28rpx;
	padding: 0 20rpx;
}
input{
	width: 500rpx;
	height: 56rpx;
	border: 0;
	font-size: 28rpx;
}
.header-right{
	font-size: 28rpx;
	color: #333333;
}
.main-one{
	height: 200rpx;
	padding: 0 30rpx;
}
.one-top{
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 26rpx;
	color: #666666;
}
.one-bottom{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
}
.one-text{
	background: #F5F5F5;
	border-radius: 4rpx;
	padding: 14rpx 22rpx ;
	font-size: 24rpx;
	color: #333333;
	margin: 15rpx 20rpx 15rpx 0;
	max-width: 180rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
