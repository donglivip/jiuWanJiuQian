<script>
export default {
	globalData: {
		byurl: 'http://192.168.0.200:4000',   //买家api
	},
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
.wrapper,
uni-page-body,
uni-page-refresh,
page {
	height: 100%;
	overflow-x: hidden;
}
.input {
	font-size: 28rpx !important;
	color: #999999;
}
.sou {
	font-size: 24rpx;
	color: #666666;
}
.qiugou {
	font-size: 30rpx;
	color: #b2b2b2;
}
.qian {
	font-size: 28rpx;
	color: #cccccc;
}
.xiugai {
	font-size: 30rpx;
	color: #333333;
}
.tianjia {
	font-size: 30rpx;
	color: #999999;
}
.center {
	display: flex;
	align-items: center;
	justify-content: center;
} //上下左右居中
.borderBottom {
	border-bottom: 1px solid #008a05;
} //下边框绿色
.backwhite {
	background: #ffffff !important;
} //背景白色
.tcenter {
	text-align: center;
} //文本居中
.dflex {
	display: flex;
} //弹性盒模型
.fbold {
	font-weight: bold;
}
.dver {
	display: flex;
	flex-direction: column;
}
.dend {
	display: flex;
	justify-content: flex-end;
}
.textCenter {
	text-align: center;
}
</style>
