<template>
	<scroll-view class="wrapper" scroll-y="">
		<view class="header"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/fabu-wupin.png" mode=""></image></view>
		<view class="main">
			<view class="main-one" @tap="opennew('shouhuodizhi')">
				<view class="main-top">
					<view class="m-top">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
						<view class="m-text">
							收货人：
							<text class="m-zi">李晓明</text>
						</view>
					</view>
					<view class="m-bott">15252240522</view>
				</view>
				<view class="one-box">
					<view class="main-content">收货地址：江苏省徐州市鼓楼区丰财街道徐州市鼓楼区下淀小学东隔壁（白云山北）</view>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image>
				</view>
				<view class="one-bottom"><image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xiahuaxian.png"></image></view>
			</view>
			<view class="main-two">
				<view class="two-text">
					<text class="a">*</text>
					求购单标题
				</view>
				<input type="text" value="" placeholder="“求购”+您想购买的商品信息" class="two-news" placeholder-class="qiugou" />
			</view>
			<view class="main-three">物品信息</view>
			<view class="box">
				<view class="box-box" v-for="(val, index) in jiadata">
					<view class="main-two">
						<view class="two-text">
							<text class="a">*</text>
							物品名称
						</view>
						<input type="text" value="" placeholder="请输入物品名称" class="two-news" placeholder-class="qiugou" />
					</view>
					<view class="main-two" @tap="opennew('purchase-classification')">
						<view class="two-text">
							<text class="a">*</text>
							选择分类
						</view>
						<input type="text" placeholder="请选择分类" class="two-news" disabled placeholder-class="qiugou" />
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image>
					</view>
					<view class="main-two">
						<view class="two-text">
							<text class="a">*</text>
							数量
						</view>
						<input type="text" value="" placeholder="请输入求购数量" class="two-news" placeholder-class="qiugou" />
					</view>
					<view class="main-two">
						<view class="two-text">
							<text class="a">*</text>
							单位
						</view>
						<input type="text" value="" placeholder="请输入物品单位" class="two-news" placeholder-class="qiugou" />
					</view>
					<view class="main-two">
						<view class="two-text">品牌</view>
						<input type="text" value="" placeholder="请输入求购数量" class="two-news" placeholder-class="qiugou" />
					</view>
					<view class="main-two">
						<view class="two-text">规格</view>
						<input type="text" value="" placeholder="请输入物品单位" class="two-news" placeholder-class="qiugou" />
					</view>
					<view class="main-four">
						<view class="four-top">
							<view class="four-text">上传图片</view>
							<view class="four-news">上传图片能提高230%的浏览量，赶快试试吧</view>
						</view>
						<view class="four-bottom">
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/tianjia.png" mode="" @tap="choseimage(index)" v-if="val.images == ''"></image>
							<image :src="val.images" mode="" @tap="choseimage(index)" v-if="val.images != ''"></image>
							<view class="four-zi">{{ val.images == '' ? 0 : 1 }}/1</view>
						</view>
					</view>
					<view class="main-x" @tap="shan" v-if="index != 0">删除</view>
				</view>
			</view>
			<view class="main-five" @tap="jia(index)">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/jia2.png" mode=""></image>
				<view class="five-text">添加物品</view>
			</view>
			<view class="main-three">补充说明</view>
			<view class="main-sex">
				<textarea value="" placeholder="此处输入补充说明" placeholder-class="qiugou" />
				<view class="sex-text">0/100</view>
			</view>
			<view class="main-seven" @tap="moren">
				<view class="seven-left"></view>
				<view class="seven-content">
					<view class="seven-text" v-if="!bian">更多默认选项</view>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xia.png" mode="" v-if="!bian"></image>
					<view class="seven-text" v-if="bian">更多选项收齐</view>
					<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/shang.png" mode="" v-if="bian"></image>
				</view>
				<view class="seven-left"></view>
			</view>
			<transition name="fade">
				<view class="main-a" v-if="bian">
					<view class="a-box">
						<view class="a-left">截止报价日期</view>
						<view class="a-right">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input a-text">{{ date }}</view>
							</picker>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image>
						</view>
					</view>
					<view class="a-box">
						<view class="a-left">最迟收货日期</view>
						<view class="a-right">
							<picker mode="date" :value="date02" :start="startDate" :end="endDate" @change="bindDateChange02">
								<view class="uni-input a-text">{{ date02 }}</view>
							</picker>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image>
						</view>
					</view>
					<view class="a-box">
						<view class="a-left">交易方式</view>
						<view class="a-right"><view class="a-text">线下自行交易</view></view>
					</view>
					<view class="a-box">
						<view class="a-left">发票要求</view>
						<view class="a-right" @tap="showyaoqiu">
							<view class="a-text">{{ fapiao[fapiaoindex] }}</view>
							<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode=""></image>
						</view>
					</view>
					<view class="a-bott">
						<view class="bott-top">
							报价要求
							<text class="a-zi">（可多选）</text>
						</view>
						<view class="bott-box">
							<view class="bott-b" @click="change(0)">
								<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode="" v-if="shui"></image>
								<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode="" v-if="!shui"></image>
								<view class="bott-text">报价含税</view>
							</view>
							<view class="bott-b" @click="change(1)">
								<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode="" v-if="yunfei"></image>
								<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode="" v-if="!yunfei"></image>
								<view class="bott-text">报价含运费</view>
							</view>
						</view>
					</view>
				</view>
			</transition>
			<view class="main-eight" @click="change(2)">
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/xuan.png" mode="" v-if="shengming"></image>
				<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/weixuan.png" mode="" v-if="!shengming"></image>
				<view class="eight-text">我已阅读并同意</view>
				<view class="eight-news">《严禁发布规则声明》</view>
			</view>
		</view>
		<view class="bottom">提交</view>
	</scroll-view>
</template>

<script>
export default {
	data() {
		const currentDate = this.getDate({
			format: true
		});
		return {
			bian: true, //更多选项boo
			shui: true, //报价含税
			yunfei: true, //报价含税
			fapiao: ['增值税发票', '其他发票'], //发票数组
			fapiaoindex: 0, //发票index
			date: currentDate, //当前日期
			date02: currentDate, //当前日期
			shengming:true, //声明
			jiadata: [
				{
					cao: '',
					images: ''
				}
			]
		};
	},
	methods: {
		// 展示发票要求
		showyaoqiu: function() {
			var that = this;
			uni.showActionSheet({
				itemList: that.fapiao,
				success: function(res) {
					that.fapiaoindex = res.tapIndex;
				},
				fail: function(res) {
					console.log(res.errMsg);
				}
			});
		},
		// 修改报价要求
		change: function(type) {
			if (type == 0) {
				this.shui = !this.shui;
			} else if (type == 1) {
				this.yunfei = !this.yunfei;
			}else if (type == 2) {
				this.shengming = !this.shengming;
			}
		},
		//点击删除，删除添加内容
		shan: function(index) {
			this.jiadata.splice(index, 1);
		},
		//添加内容，点击展示下面内容
		jia: function() {
			this.jiadata.push({
				cao: '',
				images: ''
			});
		},
		//跳转页面
		opennew: function(id) {
			uni.navigateTo({
				url: '../' + id + '/' + id
			});
		},
		//点击展开更多默认选项 展示下面内容
		moren: function() {
			this.bian = !this.bian;
		},
		// 上传图片
		choseimage: function(index) {
			var that = this;
			uni.chooseImage({
				count: 1,
				success: chooseImageRes => {
					that.jiadata[index].images = chooseImageRes.tempFilePaths[0];
					const tempFilePaths = chooseImageRes.tempFilePaths;
					uni.uploadFile({
						url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
						filePath: tempFilePaths[0],
						name: 'file',
						success: uploadFileRes => {
							console.log(uploadFileRes.data);
						}
					});
				}
			});
		},
		// 获取当前时间
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year;
			} else if (type === 'end') {
				year = year + 10;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		// 获取截止报价日期回调
		bindDateChange: function(e) {
			this.date = e.target.value;
		},
		// 获取最迟收货日期回调
		bindDateChange02: function(e) {
			this.date02 = e.target.value;
		}
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	}
};
</script>

<style>
.box {
	background: #f9f9f9;
}
.box-box {
	margin-bottom: 20rpx;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.wrapper {
	background: #f9f9f9;
}
.header image {
	width: 100%;
	height: 216rpx;
}

.main-one {
	background: #ffffff;
	margin-bottom: 30rpx;
	height: 200rpx;
}
.main-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 90rpx;
	padding: 0 30rpx;
}
.m-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.m-top image {
	height: 34rpx;
	width: 27rpx;
	margin-right: 30rpx;
}
.m-text {
	font-size: 30rpx;
	color: #333333;
}
.m-zi {
	font-size: 30rpx;
	color: #333333;
	font-weight: 600;
}
.m-bott {
	font-size: 30rpx;
	color: #333333;
	font-weight: 600;
	margin-right: 40rpx;
}
.one-box {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 68rpx;
	padding: 0 30rpx 0 90rpx;
}
.one-box image {
	width: 20rpx;
	height: 32rpx;
	margin-left: 12rpx;
	padding-bottom: 30rpx;
}
.main-content {
	width: 590rpx;
	font-size: 28rpx;
	color: #666666;
	word-break: break-all;
	height: 60rpx;
	line-height: 30rpx;
	padding-bottom: 30rpx;
}
.one-bottom {
	height: 12rpx;
	width: 100%;
}
.one-bottom image {
	height: 12rpx;
	width: 100%;
	position: relative;
	top: -10rpx;
}
.main-two {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	background: #ffffff;
	height: 100rpx;
	border-bottom: 1px solid #e5e5e5;
}
.main-two image {
	height: 32rpx;
	width: 20rpx;
}
.two-text {
	font-size: 30rpx;
	color: #000;
}
.a {
	font-size: 30rpx;
	color: #ff0000;
}
.two-news {
	width: 480rpx;
	border: 0;
	text-align: right;
}
input::-webkit-placeholder {
	color: #999999;
}
.main-three {
	font-size: 30rpx;
	color: #333333;
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx;
	border-bottom: 1px solid #e5e5e5;
}
.main-four {
	height: 240rpx;
	background: #ffffff;
	padding: 0 30rpx;
	margin-bottom: 30rpx;
}
.four-top {
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.four-text {
	font-size: 30rpx;
	color: #000000;
}
.four-news {
	font-size: 26rpx;
	color: #e6a23c;
}
.four-bottom {
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
}
.four-bottom image {
	height: 116rpx;
	width: 116rpx;
	margin-right: 30rpx;
}
.four-zi {
	font-size: 30rpx;
	color: #999999;
}
.main-x {
	font-size: 28rpx;
	color: #ff0000;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 30rpx 30rpx;
	background: #f9f9f9;
}
.main-five {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100rpx;
	background: #ffffff;
}
.main-five image {
	height: 44rpx;
	width: 44rpx;
	margin-right: 20rpx;
}
.five-text {
	font-size: 36rpx;
	color: #008a05;
}
.main-sex {
	height: 240rpx;
	background: #ffffff;
	padding: 30rpx;
}
textarea {
	width: 700rpx;
	height: 190rpx;
	border: 0;
}
.sex-text {
	font-size: 30rpx;
	color: #999999;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.main-seven {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 140rpx;
}
.seven-left {
	width: 153rpx;
	height: 3rpx;
	background: #999999;
	margin: 0 20rpx;
}
.seven-content {
	display: flex;
	align-items: center;
	justify-content: center;
}
.seven-text {
	font-size: 28rpx;
	color: #999999;
	margin-right: 12rpx;
}
.seven-content image {
	height: 26rpx;
	width: 20rpx;
}
.main-a {
	background: #ffffff;
	margin-bottom: 30rpx;
}
.a-box {
	height: 98rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	border-bottom: 1px solid #e5e5e5;
}
.a-left {
	font-size: 30rpx;
	color: #000000;
}
.a-right {
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.a-right image {
	height: 32rpx;
	width: 20rpx;
	margin-left: 16rpx;
}
.a-text {
	font-size: 30rpx;
	color: #666666;
}
.a-bott {
	padding: 0 30rpx;
	height: 178rpx;
}
.bott-top {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 78rpx;
	font-size: 30rpx;
	color: #666666;
}
.a-zi {
	font-size: 30rpx;
	color: #008a05;
}
.bott-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
}
.bott-b {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.bott-b image {
	width: 34rpx;
	height: 34rpx;
	margin-right: 20rpx;
}
.bott-text {
	font-size: 30rpx;
	color: #666666;
}

.main-eight {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90rpx;
}
.main-eight image {
	height: 34rpx;
	width: 34rpx;
	margin-right: 20rpx;
}
.eight-text {
	font-size: 28rpx;
	color: #666666;
	margin-right: 12rpx;
}
.eight-news {
	font-size: 28rpx;
	color: #008a05;
}
.bottom {
	font-size: 36rpx;
	color: #ffffff;
	height: 98rpx;
	width: 680rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #bdbdbd;
	border-radius: 50rpx;
	margin: 30rpx;
}
</style>
