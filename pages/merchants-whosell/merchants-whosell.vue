<template>
	<view class="wrapper">
		<!-- 商家入驻 -->
		<view class="header" v-if="type == 0">
			<view class="header-left">
				<view class="h-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/lv.jpg" mode=""></image>
					<view class="h-text">1</view>
				</view>
				<view class="h-bott h-zi">认证信息</view>
			</view>
			<view class="header-left">
				<view class="h-top">
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/hui.png" mode="" class="grey"></image>
					<view class="h-text">2</view>
				</view>
				<view class="h-bott">店铺信息</view>
			</view>
		</view>
		<scroll-view class="main" scroll-y="" v-if="type == 0">
			<view class="main-a">为了提高您店铺商品的排名，请优先使用企业认证</view>
			<view class="main-b">
				<view class="b-top">选择认证方式</view>
				<view class="b-bott">
					<view class="b-box" @tap="bian(0)">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode="" v-if="myindex == 0"></image>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode="" v-if="myindex == 1"></image>
						<view class="b-text">企业认证</view>
					</view>
					<view class="b-box" @tap="bian(1)">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode="" v-if="myindex == 1"></image>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode="" v-if="myindex == 0"></image>
						<view class="b-text">个人认证</view>
					</view>
				</view>
			</view>
			<view class="main-box" v-if="myindex == 0">
				<view class="box-top">
					<view class="box-text">
						<text>*</text>
						企业名称
					</view>
					<input type="text" placeholder="请输入企业完整名称" placeholder-class="qiugou" v-model="qname"/>
				</view>
				<view class="box-cont">
					<view class="box-news">
						<text>*</text>
						营业执照图片
					</view>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tianjia.png" mode="" @tap="choseimage()" v-if="shopImg==''"></image>
					<image :src="shopImg" v-if="shopImg!=''" @tap="choseimage()"></image>
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
			<view class="main-hezi" v-if="myindex == 1">
				<view class="e-box">
					<view class="e-top">
						<view class="e-text">
							<text>*</text>
							姓名
						</view>
						<input type="text" value="" placeholder="请输入姓名" placeholder-class="qiugou" v-model="uname"/>
					</view>
					<view class="e-top">
						<view class="e-text">
							<text>*</text>
							身份证号码
						</view>
						<input type="idcard" placeholder="请输入身份证号码" placeholder-class="qiugou" v-model="ucard"/>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="bottom" @tap="opennew('merchantsNext')" v-if="type==0">提 交</view>
		<!-- 正在审核 -->
		<div class="wrapper backwhite" v-if="type == 1">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/examine.png" mode="" class="examine-img"></image>
			<div class="examine-title tcenter">正在审核</div>
			<div class="examine-time tcenter">预计2小时-1天内完成</div>
			<div class="examine-alert tcenter">请您绑定手机号，审核结果我们会通过短信通知您</div>
			<!-- <div class="examine-btn center" @tap="opennew('VerificationPhone')">点此绑定手机号</div> -->
		</div>
		<!-- 审核通过 -->
		<div class="wrapper backwhite" v-if="type == 2">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/adopt.png" mode="" class="examine-img"></image>
			<div class="examine-title tcenter">审核通过</div>
			<div class="examine-time tcenter">恭喜，您已成功入驻久万久千商城</div>
			<div class="examine-time tcenter">
                 您可以登录
				<text class="examine-alert">
                www.9w9q.com
                </text>
				调整店铺信息
            </div>
			<div class="examine-btn center" @tap="copyUrl">复制链接</div>
		</div>
		<!-- 审核不通过 -->
		<div class="wrapper backwhite" v-if="type == 3">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/adoptfail.png" mode="" class="examine-img"></image>
			<div class="examine-title tcenter">审核不通过</div>
			<div class="examine-time tcenter">很遗憾，你的入驻申请审核不通过</div>
			<div class="examine-fail tcenter">
		       原因: 营业执照已过期，请重新办理后再次认证
		    </div>
			<div class="examine-btn center" @tap="reset">重新认证</div>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			myindex: 0, //0 企业 1 个人
			type: 0,    // 认证状态
			shopImg:'', //营业执照照片
			qname:'',   //企业名称
			ucard:'',   //个人身份证号
			uname:'',   //个人姓名
		};
	},
	methods: {
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
		// 切换认证方式
		bian: function(index) {
			this.myindex = index;
		},
		// 打开新页面
		opennew:function(id){
			if(this.myindex==0){
				// 企业
				if(this.qname==''||this.shopImg==''){
					uni.showToast({
						title:'企业名称或营业执照不能为空',
						icon:'none'
					})
					return
				}
			}else{
				// 个人
				if(this.ucard==''||this.uname==''){
					uni.showToast({
						title:'姓名或身份证号不能为空',
						icon:'none'
					})
					return
				}
				// 正则表达式：
				var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
				
				if(!(idcardReg.test(this.ucard))) {
				    // 合法
					uni.showToast({
						title:'身份证号格式错误',
						icon:'none'
					})
					return
				}
			}
			uni.setStorage({
				 key: 'myindex',
				 data: this.myindex
			})
			uni.navigateTo({
				url: '../'+id+'/'+id
			});
			
		},
		// 复制网址
		copyUrl:function(){
			uni.setClipboardData({
			    data: 'www.jiuwanjiuqian.com',
			    success: function () {
			        
			    }
			});
		},
		// 重新认证
		reset:function(){
			this.type=0
		},
		// 上传图片
		choseimage: function(index) {
			var that = this;
			//调取相册
			uni.chooseImage({
				count: 1, //默认9
				success: function(res) {
					uni.uploadFile({
						url: getApp().globalData.byurl + '/buyer/base/upload', //仅为示例，非真实的接口地址
						filePath: res.tempFilePaths[0],
						name: 'file',
						formData: {
							scene: 'idcard'
						},
						success: uploadFileRes => {
							that.shopImg  = JSON.parse(uploadFileRes.data).url;
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
	},
	onShow:function(){
		this.myajax()
	}
};
</script>

<style>
	.examine-fail{
		font-size:28rpx;
		font-family:Source Han Sans CN;
		font-weight:400;
		line-height:48rpx;
		color:rgba(245,108,108,1);
	}
.examine-btn {
	width: 470rpx;
	height: 98rpx;
	background: rgba(0, 138, 5, 1);
	border: 2px solid rgba(5, 5, 5, 0.08235294117647057);
	border-radius: 48rpx;
	margin: 74rpx auto 0;
	color: #FFFFFF;
}
.examine-alert {
	font-size: 28rpx;
	font-family: Source Han Sans CN;
	font-weight: 400;
	line-height: 48rpx;
	color: rgba(0, 138, 5, 1);
}
.examine-time {
	font-size: 28rpx;
	font-family: Source Han Sans CN;
	font-weight: 400;
	line-height: 48rpx;
	color: rgba(102, 102, 102, 1);
	margin: 15rpx 0 20rpx;
}
.examine-title {
	font-size: 40rpx;
	font-family: Source Han Sans CN;
	font-weight: bold;
	line-height: 68rpx;
	color: rgba(51, 51, 51, 1);
}
.examine-img {
	width: 186rpx;
	height: 186rpx;
	display: block;
	margin: 100rpx auto 55rpx;
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
