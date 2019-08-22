<template>
	<view class="wrapper">
		<view class="header">
			<view class="header-left">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sousuo.png" mode=""></image>
				<input type="text" value="" placeholder="请输入求购信息关键字" placeholder-class="sou" confirm-type='search' @confirm='myajax' v-model="seartext"/>
			</view>
			<view class="header-right" @tap="cancel">取消</view>
		</view>
		<view class="main">
			<view class="main-one">
				<view class="one-left" :class="(time01==0&&time02==0)?'one-active':''" @tap="sort(0)">综合</view>
				<view class="one-content" @tap="sort(1)">
					<view class="one-text">发布时间</view>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/lvshang.png" mode="" v-show="time01==1"></image>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/lvxia.png" mode="" v-show="time01==0"></image>
				</view>
				<view class="one-content"  @tap="sort(2)">
					<view class="one-text">截止时间</view>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/lvshang.png" mode="" v-show="time02==1"></image>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/lvxia.png" mode="" v-show="time02==0"></image>
				</view>
			</view>
			<scroll-view class="main-box" scroll-y="" @scrolltolower='myajax()'>
				<view class="main-three"  @tap="opennew('qiugouxiangqing')">
					<view class="three-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
					</view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
					</view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
					</view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
					</view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
					</view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
					</view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
						</view>
					</view>
				</view>
				<view class="main-three">
					<view class="three-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tu.png" mode=""></image>
					</view>
					<view class="three-content">
						<view class="c-top">
							<view class="c-text">求购汽车轮胎内胎</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/qiye.png" mode=""></image>
						</view>
						<view class="c-cont">
							<view class="c-red">轮胎</view>
							<view class="c-yellow">轮胎</view>
							<view class="c-green">1000个</view>
						</view>
						<view class="c-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shijian.png" mode=""></image>
							<view class="c-zi">截止日期：2019-11-11</view>
						</view>
					</view>
					<view class="three-right">
						<view class="r-top">立即报价</view>
						<view class="r-bot">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
							<view class="r-text">江苏·徐州</view>
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
				time01:0,  //  发布时间升序  发布时间降序
				time02:0,  //  截止时间升序  截止时间降序
				seartext:'',   //搜索内容
				pageNum:0, //当前页数
				mydata:[]
			}
		},
		methods: {
			cancel:function(){
				// 取消搜索
				this.seartext=''
				uni.hideKeyboard()
			},
			// 筛选条件
			sort:function(type){
				if(type==0){
					// 综合排序
					this.time01=this.time02=0
				}else if(type==1){
					// 发布时间排序
					this.time01=this.time01==0?1:0
				}else if(type==2){
					// 发布时间排序
					this.time02=this.time02==0?1:0
				}
				this.pageNum=0
				this.mydata=[]
				this.myajax()
			},
			opennew:function(id){
				uni.navigateTo({
					url: '../'+id+'/'+id
				});
			},
			// 拉取数据
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
					method:'POST',
				    success: (res) => {
						that.mydata.push(res.data)
				    }
				});
				setTimeout(function() {
					uni.hideLoading()
				}, 1000);
			}
		},
		onShow: function(){
			this.pageNum=0
			this.mydata=[]
			this.myajax()
		}
	}
</script>

<style>
.wrapper,uni-page-body, uni-page-refresh,page{
		background: #F9F9F9;height: 100%;overflow: hidden;
	}
.header{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	border-bottom: 1px solid #E8E8E8;
	background: #FFFFFF;
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
}
input::-webkit-input-placeholder{font-size: .12rpx;}
.header-right{
	font-size: 28rpx;
	color: #333333;
}
.main{
	height: calc(100% - 100rpx);
}
.main-one{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80rpx;
	padding: 0 30rpx;
	background: #FFFFFF;
}
.one-left{
	font-size: 28rpx;
	font-weight: 600;
}
.one-active{
	color: #008A05;
}
.one-content{
	display: flex;
	align-items: center;
	justify-content: center;
}
.one-content image{
	width: 15rpx;
	height: 30rpx;
}
.one-text{
	font-size: 28rpx;
	color: #333333;
	margin-right: 15rpx;
}
.main-box{
	height: calc(100% - 80rpx);
}
.main-three{
		height: 200rpx;
		background: #FFFFFF;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
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
		width: 340rpx;
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
	}
	.c-red{
		font-size: 22rpx;
		color: #F56C6C;
		width: 96rpx;
		height: 42rpx;
		margin-right: 20rpx;
		border-radius: 6rpx;
		background: #FEF0F0;
		text-align: center;
		line-height: 42rpx;
	}
	.c-yellow{
		font-size: 22rpx;
		color: #E6A23C;
		width: 96rpx;
		height: 42rpx;
		margin-right: 20rpx;
		border-radius: 6rpx;
		background: #FDF6EC;
		text-align: center;
		line-height: 42rpx;
	}
	.c-green{
		font-size: 22rpx;
		color: #67C23A;
		width: 96rpx;
		height: 42rpx;
		margin-right: 20rpx;
		border-radius: 6rpx;
		background: #F0F9EB;
		text-align: center;
		line-height: 42rpx;
	}
	.c-bottom{
		display: flex;
		align-items: center;
		justify-content: flex-start;
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
		color: #FFFFFF;
		font-size: 22rpx;
		background: #008A05;
		border-radius: 26rpx;
		width: 130rpx;
		height: 50rpx;
		text-align: center;
		line-height: 50rpx;
		margin-bottom: 20rpx;
	}
	.r-bot{
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.r-bot image{
		height: 24rpx;
		width: 20rpx;
	}
	.r-text{
		color: #666666;
		font-size: 24rpx;
		margin-left: 15rpx;
	}

</style>
