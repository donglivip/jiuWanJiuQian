<template>
	<view class="wrapper">
		<view class="main">
			<view class="header">
				<view class="header-left">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sousuo.png" mode=""></image>
					<input type="text" placeholder="请输入求购信息关键字" placeholder-class="sou" confirm-type="search" @confirm="myajax" v-model="seartext"/>
				</view>
				<view class="header-right">取消</view>
			</view>
			<scroll-view class="main-box" scroll-y="">
				<view class="main-one" v-for="(i,index) in shopdata" :key="index" @tap="change(index)">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode="" v-if="!i.choose"></image>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode="" v-if="i.choose"></image>
					<view class="one-text" :class="i.choose?'one-zi':''">江苏哈哈哈网络科技有限公司</view>
				</view>
			</scroll-view>
		</view>
		<view class="bottom" @tap="opennew('my-purchase')">提  交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//公司数组
				shopdata:[  
					{
						name:'江苏哈哈哈网络科技有限公司',
						choose:false
					},
					{
						name:'江苏哈哈哈网络科技有限公司',
						choose:false
					},
					{
						name:'江苏哈哈哈网络科技有限公司',
						choose:false
					},
					{
						name:'江苏哈哈哈网络科技有限公司',
						choose:false
					}
				],
				seartext:'', //搜索关键字
			}
		},
		methods: {
			opennew:function(id){
				uni.navigateTo({
					url: '../'+id+'/'+id
				});
			},
			// 选择中标公司
			change:function(index){
				this.shopdata[index].choose=!this.shopdata[index].choose
			},
			//初始化数据
			myajax:function(){
				console.log('shuju')
			}
		}
	}
</script>

<style>
.wrapper,uni-page-body, uni-page-refresh,page{
		background: #FFFFFF;height: 100%;overflow: hidden;
	}
.main{
	height: calc(100% - 100rpx) ;
}
.header{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
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
.main-box{
	height: calc(100% - 100rpx);
}
.main-one{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	height: 90rpx;
}
.main-one image{
	width: 34rpx;
	height: 34rpx;
	margin-right: 44rpx;
}
.one-text{
	font-size: 34rpx;
	color: #666666;
}
.one-zi{
	color: #008A05;
}
.bottom{
	height: 100rpx;
	background: #008A05;
	font-size: 36rpx;
	color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
