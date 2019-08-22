<script>
export default {
	globalData: {
		byurl: 'http://192.168.0.200:7002' //买家api
	},
	onLaunch: function() {
		// 微信小程序在线升级
		// #ifdef MP-WEIXIN
		const updateManager = uni.getUpdateManager();
		updateManager.onCheckForUpdate(function(res) {
			// 请求完新版本信息的回调
			console.log(res.hasUpdate);
		});

		updateManager.onUpdateReady(function(res) {
			uni.showModal({
				title: '更新提示',
				content: '新版本已经准备好，是否重启应用？',
				success(res) {
					if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate();
					}
				}
			});
		});

		updateManager.onUpdateFailed(function(res) {
			// 新的版本下载失败
		});
		// #endif
		// app热更新
		// #ifdef APP-PLUS
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
			uni.request({
				url: 'http://www.example.com/update/',
				data: {
					version: widgetInfo.version,
					name: widgetInfo.name
				},
				success: result => {
					var data = result.data;
					if (data.update && data.wgtUrl) {
						uni.downloadFile({
							url: data.wgtUrl,
							success: downloadResult => {
								if (downloadResult.statusCode === 200) {
									plus.runtime.install(
										downloadResult.tempFilePath,
										{
											force: false
										},
										function() {
											console.log('install success...');
											plus.runtime.restart();
										},
										function(e) {
											console.error('install fail...');
										}
									);
								}
							}
						});
					}
				}
			});
		});
		// #endif
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
