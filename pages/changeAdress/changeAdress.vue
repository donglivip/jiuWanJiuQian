<template>
	<view class="wrapper">
		<view class="main">
			<view class="main-box">
				<view class="main-one">
					<view class="one-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sj.png" mode=""></image>
						<view class="one-text">收货人姓名</view>
					</view>
					<input type="text" value="" placeholder="请输入收货人姓名" class="one-news" placeholder-class="tianjia" v-model="name"/>
				</view>
				<view class="main-one">
					<view class="one-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/sj.png" mode=""></image>
						<view class="one-text">联系方式</view>
					</view>
					<input type="number" value="" placeholder="请输入手机号" class="one-news" placeholder-class="tianjia" v-model="phone"/>
				</view>
			</view>
			<view class="main-two">
				<view class="two-top" @click="showMulLinkageThreePicker">
					<view class="t-left">
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/dingwei.png" mode=""></image>
						<view class="t-zi">所在地区</view>
					</view>
					<view class="t-right">
						<view class="t-text">{{ pickerText == '' ? '请选择地区' : pickerText }}</view>
						<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/you2.png" mode="widthFix"></image>
					</view>
				</view>
				<textarea value="" placeholder="请输入详细地址" placeholder-class="tianjia" v-model="detail"/>
			</view>
		</view>
		<view class="bottom" @tap="gosubmit()">提交</view>
		<mpvue-city-picker
			:themeColor="themeColor"
			ref="mpvueCityPicker"
			:pickerValueDefault="cityPickerValueDefault"
			@onCancel="onCancel"
			@onConfirm="onConfirm"
		></mpvue-city-picker>
	</view>
</template>

<script>
import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue';

export default {
	components: {
		mpvueCityPicker
	},
	data() {
		return {
			cityPickerValueDefault: [0, 0, 1], //默认城市
			themeColor: '#008A05', //确定按钮颜色
			pickerText: '北京市-市辖区-西城区' ,//选择的地址
			name:'董小礼',
			phone:'13218573474',
			detail:'绿地世纪城绿地世纪城绿地世纪城'
		};
	},
	onShow:function(){
		this.myajax()
	},
	methods: {
		gosubmit:function(){
			if(!(/^1[3456789]\d{9}$/.test(this.phone))){ 
				uni.showToast({
					title:'手机号格式错误',
					icon:'none'
				})
				return false; 
			} 
			if(this.pickerText==''){
				uni.showToast({
					title:'所在地区不能为空',
					icon:'none'
				})
				return false; 
			}
			if(this.name==''){
				uni.showToast({
					title:'联系人姓名不能为空',
					icon:'none'
				})
				return false; 
			}
			if(this.detail==''){
				uni.showToast({
					title:'详细地址不能为空',
					icon:'none'
				})
				return false; 
			}
			uni.request({
				url: '',
				method: 'GET',
				data: {},
				success: res => {},
				fail: () => {},
				complete: () => {}
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
		onCancel(e) {
			// 点击取消事件
			// alert('取消')
		},
		// 三级联动选择
		showMulLinkageThreePicker() {
			this.$refs.mpvueCityPicker.show();
		},
		onConfirm(e) {
			// 点击确定事件
			// alert('确定')
			console.log(e)
			this.pickerText = e.label;
		}
	},
	onBackPress() {
		if (this.$refs.mpvuePicker.showPicker) {
			this.$refs.mpvuePicker.pickerCancel();
			return true;
		}
		if (this.$refs.mpvueCityPicker.showPicker) {
			this.$refs.mpvueCityPicker.pickerCancel();
			return true;
		}
	},
	onUnload() {
		if (this.$refs.mpvuePicker.showPicker) {
			this.$refs.mpvuePicker.pickerCancel();
		}
		if (this.$refs.mpvueCityPicker.showPicker) {
			this.$refs.mpvueCityPicker.pickerCancel();
		}
	}
};
</script>

<style>
.wrapper,
uni-page-body,
uni-page-refresh,
page {
	background: #f9f9f9;
	height: 100%;
	overflow: hidden;
}
input {
	flex: 1;
}
.main {
	height: calc(100% - 130rpx);
}
.main-box {
	margin: 30rpx 0;
}
.main-one {
	padding: 0 30rpx;
	height: 98rpx;
	background: #ffffff;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.one-left {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.one-left image {
	width: 25rpx;
	height: 35rpx;
	margin-right: 15rpx;
}
.one-text {
	font-size: 30rpx;
	color: #333333;
}
.one-news {
	font-size: 30rpx;
	color: #333333;
	width: 200rpx;
	height: 98rpx;
	border: 0;
	text-align: right;
}
.main-two {
	padding: 30rpx;
	background: #ffffff;
}
.two-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 98rpx;
}
.t-left {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.t-left image {
	width: 26rpx;
	height: 33rpx;
	margin-right: 18rpx;
}
.t-zi {
	font-size: 30rpx;
	color: #333333;
}
.t-text {
	font-size: 30rpx;
	color: #999999;
}
.t-right {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.t-right image {
	width: 12rpx;
	margin-left: 12rpx;
}
textarea {
	height: 155rpx;
	padding: 30rpx;
}
.bottom {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100rpx;
	background: #008a05;
	font-size: 36rpx;
	color: #ffffff;
}
</style>
