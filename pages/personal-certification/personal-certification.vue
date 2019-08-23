<template>
	<view class="wrapper">
		<view class="main">
			<view class="main-one">适用：个人采购、供应者</view>
			<view class="main-box">
				<view class="main-x"> 为增加产品及采供信息曝光度，建议商家使用“企业认证”</view>
				<view class="box-top">
					<view class="box-text"><text>*</text>姓名</view>
					<input type="text" placeholder="请输入姓名" placeholder-class="qiugou" v-model="uname"/>
				</view>
				<view class="box-top">
					<view class="box-text"><text>*</text>身份证号码</view>
					<input type="idcard"  placeholder="请输入身份证号码" placeholder-class="qiugou" v-model="ucard"/>
				</view>
			</view>
		</view>
		<view class="bottom" @tap="opennew('VerificationPhone')">提  交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uname:'', //用户名
				ucard:'', //用户身份证号
			}
		},
		methods: {
			gosubmit:function(){
				// 正则表达式：
				var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
				if(!(idcardReg.test(this.ucard))) {
				    uni.showToast({
				    	title:'身份证号格式错误',
						icon:'none'
				    })
					return
				}
				if(this.uname==''){
					uni.showToast({
						title:'用户名不能为空',
						icon:'none'
					})
					return
				}
				// 提交认证
				uni.request({
					url: '',
					method: 'GET',
					data: {},
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
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
		background: #F9F9F9;height: 100%;overflow: hidden;
}
.main{
	width: 100%;
	height: calc(100% - 100rpx);
}
.main-one{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 90rpx;
	font-size: 26rpx;
	color: #999999;
	padding: 0 30rpx;
}
.main-box{
	height: 280rpx;
	padding: 0 30rpx;
	background: #FFFFFF;
}
.main-x{
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 26rpx;
	color: #F56C6C;
}
.box-top{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 95rpx;
	border-bottom: 1rpx solid #E5E5E5;
}
.box-text{
	font-size: 30rpx;
	color: #000000;
}
text{
	font-size: 30rpx;
	color: #FF0000;
}
input{
	text-align: right;
	font-size: 28rpx;
	padding: 0 30rpx;
}
.bottom{
	height: 100rpx;
	background: #008A05;
	width: 100%;
	font-size: 36rpx;
	color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
