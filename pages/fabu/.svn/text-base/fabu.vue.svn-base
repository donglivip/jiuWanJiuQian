<template>
	<view class="wrapper">
		<view class="header">
			<view class="header-left">
				<view class="h-text">想买什么？</view>
				<view class="h-news">发出来<text class="b">有钱赚！</text></view>
			</view>
			<view class="header-right">
				查看攻略
			</view>
		</view>
		<view class="main">
			<view class="main-one" @click="opennew('shouhuodizhi')">
				<view class="one-top">
					<image src="../../static/dingwei2.png" mode=""></image>
					<view class="one-content">请选择联系人及收货地址</view>
				</view>
				<view class="one-bottom">
					<image src="../../static/xiahuaxian.png" ></image>
				</view>
			</view>
			<view class="main-two">
				<view class="two-text"><text class="a">*</text>求购单标题</view>
				<input type="text" value="" placeholder="“求购”+您想购买的商品信息" class="two-news" placeholder-class="qiugou"/>
			</view>
			<view class="main-three">物品信息</view>
			<view class="main-two">
				<view class="two-text"><text class="a">*</text>物品名称</view>
				<input type="text" value="" placeholder="请输入物品名称" class="two-news" placeholder-class="qiugou"/>
			</view>
			<view class="main-two">
				<view class="two-text"><text class="a">*</text>选择分类</view>
				<input type="text"placeholder="请选择分类" class="two-news" disabled placeholder-class="qiugou"/>
				<image src="../../static/you2.png" mode=""></image>
			</view>
			<view class="main-two">
				<view class="two-text"><text class="a">*</text>数量</view>
				<input type="text" value="" placeholder="请输入求购数量" class="two-news" placeholder-class="qiugou"/>
			</view>
			<view class="main-two">
				<view class="two-text"><text class="a">*</text>单位</view>
				<input type="text" value="" placeholder="请输入物品单位" class="two-news" placeholder-class="qiugou"/>
			</view>
			<view class="main-two">
				<view class="two-text">品牌</view>
				<input type="text" value="" placeholder="请输入求购数量" class="two-news" placeholder-class="qiugou"/>
			</view>
			<view class="main-two">
				<view class="two-text">规格</view>
				<input type="text" value="" placeholder="请输入物品单位" class="two-news" placeholder-class="qiugou"/>
			</view>
			<view class="main-four">
				<view class="four-top">
					<view class="four-text">上传图片</view>
					<view class="four-news">上传图片能提高230%的浏览量，赶快试试吧</view>
				</view>
				<view class="four-bottom">
					<image src="../../static/tianjia.png" mode=""></image>
					<view class="four-zi">0/1</view>
				</view>
			</view>
			<view class="main-five">
				<image src="../../static/jia2.png" mode=""></image>
				<view class="five-text">添加物品</view>
			</view>
			<view class="main-three">补充说明</view>
			<view class="main-sex">
				<textarea value="" placeholder="此处输入补充说明"  placeholder-class="qiugou"/>
				<view class="sex-text">0/100</view>
			</view>
			<view class="main-seven">
				<view class="seven-left"></view>
				<view class="seven-content">
					<view class="seven-text">更多默认选项</view>
					<image src="../../static/xia.png" mode=""></image>
				</view>
				<view class="seven-left"></view>
			</view>
			<view class="main-eight">
				<image src="../../static/weixuan.png" mode=""></image>
				<view class="eight-text">我已阅读并同意</view>
				<view class="eight-news">《严禁发布规则声明》</view>
			</view>
		</view>
		<view class="bottom">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			opennew:function(id){
				uni.navigateTo({
					url: '../'+id+'/'+id
				});
				
			}
		}
	}
</script>

<style>
.wrapper{
	background: #F9F9F9;
}
.header{
	height: 200rpx;
	background: #666666;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 45rpx;
	margin-bottom: 30rpx;
}
.header-left{
	width: 550rpx;
	
}
.h-text{
	font-size: 40rpx;
	color: #FFFFFF;
	margin-bottom: 10rpx;
}
.h-news{
	font-size: 30rpx;
	color: #FFFFFF;
	margin-left: 100rpx;
}
.b{
	font-size: 40rpx;
	color: #FFFFFF;
}
.header-right{
	font-size: 28rpx;
	color: #D8CDAF;
	width: 170rpx;
	height: 54rpx;
	text-align: center;
	line-height: 50rpx;
	background: #353235;
	border-radius: 26rpx;
}
.main-one{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #FFFFFF;
	margin-bottom: 30rpx;
	height: 200rpx;
}
.one-top{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 188rpx;
}
.one-top image{
	height: 76rpx;
	width: 80rpx;
	margin-bottom: 10rpx;
}
.one-content{
	font-size: 30rpx;
	color: #999999;	
}
.one-bottom{
	height: 12rpx;
	width: 100%;
}
.one-bottom image{
	height: 12rpx;
	width: 100%;
	position: relative;
	top: -10rpx;
}
.main-two{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	background: #FFFFFF;
	height: 100rpx;
	border-bottom: 1px solid #E5E5E5;
}
.main-two image{
	height: 32rpx;
	width: 20rpx;
}
.two-text{
	font-size: 30rpx;
	color: #000;	
}
.a{
	font-size: 30rpx;
	color: #FF0000;
}
.two-news{
	width: 480rpx;
	border: 0;
	text-align: right;
}
input::-webkit-placeholder{color: #999999;}
.main-three{
	font-size: 30rpx;
	color: #333333;
	height:90rpx ;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	border-bottom: 1px solid #E5E5E5;
}
.main-four{
	height: 240rpx ;
	background: #FFFFFF;
	padding: 0 30rpx;
	margin-bottom: 30rpx;
}
.four-top{
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.four-text{
	font-size: 30rpx;
	color: #000000;
}
.four-news{
	font-size: 26rpx;
	color: #E6A23C;
}
.four-bottom{
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
}
.four-bottom image{
	height: 116rpx;
	width: 116rpx;
	margin-right: 30rpx;
}
.four-zi{
	font-size: 30rpx;
	color: #999999;
}
.main-five{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100rpx;
	background: #FFFFFF;
}
.main-five image{
	height: 44rpx;
	width: 44rpx;
	margin-right: 20rpx;
}
.five-text{
	font-size: 36rpx;
	color: #008A05;
}
.main-sex{
	height: 240rpx;
	background: #FFFFFF;
	padding: 30rpx;
}
textarea{
	width: 700rpx;
	height: 190rpx;
	border: 0;
	
}
.sex-text{
	font-size: 30rpx;
	color: #999999;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.main-seven{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 140rpx;
}
.seven-left{
	width: 153rpx;
	height: 3rpx;
	background: #999999;
	margin: 0 20rpx;
}
.seven-content{
	display: flex;
	align-items: center;
	justify-content: center;
}
.seven-text{
	font-size: 28rpx;
	color: #999999;
	margin-right: 12rpx;
}
.seven-content image{
	height: 26rpx;
	width: 20rpx;
}
.main-eight{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90rpx;
}
.main-eight image{
	height: 34rpx;
	width: 34rpx;
	margin-right: 20rpx;
}
.eight-text{
	font-size: 28rpx;
	color: #666666;
	margin-right: 12rpx;
}
.eight-news{
	font-size: 28rpx;
	color: #008A05;
}
.bottom{
	font-size: 36rpx;
	color: #FFFFFF;
	height: 98rpx;
	width: 680rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #BDBDBD;
	border-radius: 50rpx;
	margin: 30rpx;
}


</style>
