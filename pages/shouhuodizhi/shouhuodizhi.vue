<template>
	<view class="wrapper">
		<scroll-view class="main" scroll-y="">
			<view class="main-box">
				<view class="main-top">
					<view class="m-top" @tap="godefault()">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
						<view class="m-text">李晓明</view>
					</view>
					<view class="m-bott">15252240522</view>
				</view>
				<view class="main-content">江苏省徐州市云龙区绿地世纪城江苏省徐州市云龙区绿地世纪城江苏省徐州市云龙区绿地世纪城</view>
				<view class="main-bottom">
					<view class="m-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode=""></image>
						<view class="m-news">默认地址</view>
					</view>
					<view class="m-right">
						<view class="right-box" @tap="opennew('changeAdress')">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/bianji.png" mode=""></image>
							<view class="m-zi">编辑</view>
						</view>
						<view class="right-box">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shanchu.png" mode=""></image>
							<view class="m-zi" @tap="godelete()">删除</view>
						</view>
					</view>
				</view>
			</view>
			<view class="main-box">
				<view class="main-top">
					<view class="m-top">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
						<view class="m-text">李晓明</view>
					</view>
					<view class="m-bott">15252240522</view>
				</view>
				<view class="main-content">江苏省徐州市云龙区绿地世纪城江苏省徐州市云龙区绿地世纪城江苏省徐州市云龙区绿地世纪城</view>
				<view class="main-bottom">
					<view class="m-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
						<view class="m-news">默认地址</view>
					</view>
					<view class="m-right">
						<view class="right-box">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/bianji.png" mode=""></image>
							<view class="m-zi">编辑</view>
						</view>
						<view class="right-box">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shanchu.png" mode=""></image>
							<view class="m-zi">删除</view>
						</view>
					</view>
				</view>
			</view>
			<view class="main-box">
				<view class="main-top">
					<view class="m-top">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
						<view class="m-text">李晓明</view>
					</view>
					<view class="m-bott">15252240522</view>
				</view>
				<view class="main-content">江苏省徐州市云龙区绿地世纪城江苏省徐州市云龙区绿地世纪城江苏省徐州市云龙区绿地世纪城</view>
				<view class="main-bottom">
					<view class="m-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode=""></image>
						<view class="m-news">默认地址</view>
					</view>
					<view class="m-right">
						<view class="right-box">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/bianji.png" mode=""></image>
							<view class="m-zi">编辑</view>
						</view>
						<view class="right-box">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shanchu.png" mode=""></image>
							<view class="m-zi">删除</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="bottom" @tap="opennew('add-address')">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/baijia.png" mode=""></image>
			<view class="bottom-text">添加地址</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mydata:[],//收货地址数组
			}
		},
		methods: {
			// 设置默认地址
			godefault:function(id){
				uni.request({
				    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
				    data: {
				        text: 'uni.request'
				    },
				    success: (res) => {
						uni.showToast({
							title:'修改成功',
							icon:'none'
						})
				        this.myajax()
				    }
				});
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
			// 打开新页面
			opennew:function(id){
				uni.navigateTo({
					url: '../'+id+'/'+id
				});
				
			},
			// 删除收货地址
			godelete:function(index){
				uni.showModal({
				    title: '温馨提示',
				    content: '您确定删除此收货地址吗？',
					confirmColor:'rgb(0, 138, 5)',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		},
		onShow:function(){
			this.myajax()
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
.main-box{
	height: 260rpx;
	background: #FFFFFF;
	padding: 0 30rpx;
	margin-bottom: 30rpx;
}
.main-top{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 90rpx;
}
.m-top{
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.m-top image{
	height: 34rpx;
	width: 27rpx;
	margin-right: 16rpx;
}
.m-text{
	font-size: 30rpx;
	color: #333333;
}
.m-bott{
	font-size: 30rpx;
	color: #333333;
}
.main-content{
	font-size: 28rpx;
	color: #666666;
	word-break: break-all;
	height: 60rpx;
	line-height: 30rpx;
	padding-bottom: 30rpx;
	border-bottom: 1px solid #E8E8E8;
}
.main-bottom{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80rpx;
}
.m-left{
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.m-left image{
	width: 34rpx;
	height: 34rpx;
	margin-right: 10rpx;
}
.m-news{
	font-size: 28rpx;
	color: #333333;
}
.m-right{
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.right-box{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 110rpx;
	margin-left: 20rpx;
}
.right-box image{
	width: 30rpx;
	height: 30rpx;
	margin-right: 10rpx;
}
.m-zi{
	font-size: 28rpx;
	color: #999999;
}
.bottom{
	height: 100rpx;
	background: #000000;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bottom image{
	width: 42rpx;
	height: 42rpx;
	margin-right: 20rpx;
}
.bottom-text{
	font-size: 36rpx;
	color: #FFFFFF;
}


</style>
