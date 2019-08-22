<template>
	<view class="wrapper">
		<view class="main">
			<view class="header">
				<view class="header-z" @tap="showtype">
					<view class="header-text">全部</view>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sanjiao.png" mode=""></image>
				</view>
				<view class="header-left">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sousuo.png" mode=""></image>
					<input type="text"  v-model="seartext" placeholder="请输入求购信息关键字" placeholder-class="sou"/>
				</view>
				<view class="header-right" @tap="gosearch">搜索</view>
			</view>
			<scroll-view class="main-box" scroll-y="" @scrolltolower='myajax()'>
				<view class="main-three" @tap="opennew('baojiabiao')">
					<view class="three-top">
						<view class="t-text">求购单编号:2019071085478R</view>
						<view class="t-news">采购商评标中</view>
					</view>
					<view class="three-box">
						<view class="three-left">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
						</view>
						<view class="three-content">
							<view class="c-top">
								<view class="c-text">求购汽车轮胎内胎</view>
							</view>
							<view class="c-bottom">
								<view class="c-zi">报价时间：2019年8月20日</view>
							</view>
							<view class="c-cont">
								<view class="c-word">采购商：江苏我的家网络科技有限公司</view>
							</view>
						</view>
						<view class="three-right">
							<view class="r-top">12家已报价</view>
						</view>
					</view>
					<view class="b-b">
						<view class="three-text" @tap.stop="opennew('baojiabiao')">修改报价</view>
						<view class="three-y">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dianhua.png" mode=""></image>
							<view class="three-word" @tap.stop="tellphone('13218573474')">联系采购商</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-top">
						<view class="t-text">求购单编号:2019071085478R</view>
						<view class="t-news t-zi">已中标</view>
					</view>
					<view class="three-box">
						<view class="three-left">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
						</view>
						<view class="three-content">
							<view class="c-top">
								<view class="c-text">求购汽车轮胎内胎</view>
							</view>
							<view class="c-bottom">
								<view class="c-zi">报价时间：2019年8月20日</view>
							</view>
							<view class="c-cont">
								<view class="c-word">采购商：江苏我的家网络科技有限公司</view>
							</view>
						</view>
						<view class="three-right">
							<view class="r-top">12家已报价</view>
						</view>
					</view>
					<view class="b-b">
						<view class="three-y">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dianhua.png" mode=""></image>
							<view class="three-word">联系采购商</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-top">
						<view class="t-text">求购单编号:2019071085478R</view>
						<view class="t-news t-word">未中标</view>
					</view>
					<view class="three-box">
						<view class="three-left">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
						</view>
						<view class="three-content">
							<view class="c-top">
								<view class="c-text">求购汽车轮胎内胎</view>
							</view>
							<view class="c-bottom">
								<view class="c-zi">报价时间：2019年8月20日</view>
							</view>
							<view class="c-cont">
								<view class="c-word">采购商：江苏我的家网络科技有限公司</view>
							</view>
						</view>
						<view class="three-right">
							<view class="r-top">12家已报价</view>
						</view>
					</view>
					<view class="b-b">
						<view class="three-y">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dianhua.png" mode=""></image>
							<view class="three-word">联系采购商</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-top">
						<view class="t-text">求购单编号:2019071085478R</view>
						<view class="t-news t-word">已流标</view>
					</view>
					<view class="three-box">
						<view class="three-left">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
						</view>
						<view class="three-content">
							<view class="c-top">
								<view class="c-text">求购汽车轮胎内胎</view>
							</view>
							<view class="c-bottom">
								<view class="c-zi">报价时间：2019年8月20日</view>
							</view>
							<view class="c-cont">
								<view class="c-word">采购商：江苏我的家网络科技有限公司</view>
							</view>
						</view>
						<view class="three-right">
							<view class="r-top">12家已报价</view>
						</view>
					</view>
					<view class="b-b">
						<view class="three-y">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dianhua.png" mode=""></image>
							<view class="three-word">联系采购商</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'', //求购单分类
				pageNum:0, //当前页数
				mydata:[], //求购单数组
				seartext:'', //搜索关键字
			}
		},
		onShow:function(){
			this.myajax()
		},
		methods: {
			// 点击搜索
			gosearch:function(){
				this.pageNum++
				this.mydata=[]
				this.myajax()
			},
			// 初始化数据
			myajax:function(){
				var that=this
				this.pageNum++
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
						that.mydata.push(res.data)
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
				
			},
			opennew02:function(id){
				uni.switchTab({
					url: '../'+id+'/'+id
				});
				
			},
			// 联系采购商
			tellphone:function(phone){
				uni.makePhoneCall({
				    phoneNumber: phone 
				});
			},
			// 展示求购单类型
			showtype:function(){
				uni.showActionSheet({
				    itemList: ['全部', '已过期', '审核中'],
				    success: function (res) {
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						that.gosearch()
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
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
.header{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	background: #FFFFFF;
	margin-bottom: 30rpx;
}
.header-z{
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 110rpx;
	margin-right: 30rpx;
}
.header-z image{
	width: 35rpx;
	height: 33rpx;
}
.header-text{
	font-size: 30rpx;
	color: #333333;
}
.header-left{
	width: 460rpx;
	height: 60rpx;
	background: #F5F5F5;
	border-radius: 6rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 24rpx;
}
.header-left image{
	height: 28rpx;
	width: 28rpx;
	padding: 0 20rpx;
}
input{
	width: 300rpx;
	height: 56rpx;
	border: 0;
	font-size: 28rpx;
	border-radius: 10rpx;
}

.header-right{
	font-size: 28rpx;
	color: #333333;
}
.main-box{
	height: calc(100% - 100rpx);
}
.main-three{
	background: #FFFFFF;
	padding: 0 30rpx;
	margin: 0 30rpx 30rpx 30rpx;
}
.three-top{
	height: 86rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #E8E8E8;
}
.t-text{
	font-size: 26rpx;
	color: #666666;
}
.t-news{
	font-size: 26rpx;
	color: #008A05;
}
.t-zi{
	color: #FF2626;
}
.t-word{
	color: #666666;
}
.three-box{
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		height: 170rpx;
		padding-top: 30rpx;
	}
	.three-left{
		height: 140rpx;
		width: 140rpx;
		margin-right: 28rpx;
	}
	.three-left image{
		width: 100%;
		height: 100%;
		border-radius: 12rpx;
	}
	.three-content{
		width: 300rpx;
		flex: 1;
	}
	.c-top{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 10rpx;
	}
	.c-top image{
		height: 30rpx;
		width: 30rpx;
	}
	.c-text{
		font-size: 36rpx;
		color: #111111;
		margin-right: 15rpx;
	}
	.c-cont{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 10rpx;
		position: relative;
		height: 30rpx;
	}
	.c-word{
		font-size: 26rpx;
		color: #666666;
		position: absolute;
		width:470rpx;
		top: 0;left: 0;
	}
	.c-bottom{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 20rpx;
	}
	.c-bottom image{
		height: 20rpx;
		width: 20rpx;
		margin-right: 20rpx;
	}
	.c-zi{
		color: #666666;
		font-size: 24rpx;
	}
	.three-right{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.r-top{
		color: #666666;
		font-size: 26rpx;
		word-break: break-all;
		width: 78rpx;
		text-align: right;
		text-indent: 12rpx;
	}
	.bott-top{
		height: 160rpx;
		display: flex;
		justify-content: flex-start;
	}
	.bott-l{
		color: #666666;
		font-size: 26rpx;
	}
	.b-x{
		color: #666666;
		font-size: 26rpx;
		margin-bottom: 20rpx;
	}
	
	.b-b{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 90rpx;
	}
	.three-text{
		color: #666666;
		font-size: 22rpx;
		margin-left: 16rpx;
		border: 1px solid #666666;
		width: 174rpx;
		height: 50rpx;
		border-radius: 28rpx;
		text-align: center;
		line-height: 50rpx;
	}
	.three-y{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 15rpx;
		border-radius: 28rpx;
		width: 212rpx;
		height: 50rpx;
		background: #008A05;
	}
	.three-y image{
		width: 28rpx;
		height: 28rpx;
		margin-right: 11rpx;
	}
	.three-word{
		color: #FFFFFF;
		font-size: 22rpx;
		
	}
</style>
