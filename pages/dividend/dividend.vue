<template>
	<scroll-view class="wrapper" scroll-y="">
		<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/hl-bj.jpg" mode="widthFix" class="backimg"></image>
		<!-- 攻略 -->
		<view class="viewidend-one">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/renwu.png" mode="widthFix" class="renwu"></image>
			<view class="gonglue-box">
				<view class="gong-top">
					攻略一：发布更多求购信息
				</view>
				<view class="gong-bottom">
					<view class="gong-bottom-one">
						已完成：0
					</view>
					<view class="gong-bottom-two">
                         奖励比重：<text class="red">40%</text>
					</view>
					<view class="gong-bottom-thre center" @tap="opennewtab('additional-items')">
						点此发布
					</view>
				</view>
			</view>
			<view class="gonglue-box">
				<view class="gong-top">
					攻略二：转发获得商家加入会员
				</view>
				<view class="gong-bottom">
					<view class="gong-bottom-one">
						已完成：0
					</view>
					<view class="gong-bottom-two">
			             奖励比重：<text class="red">30%</text>
					</view>
					<view class="gong-bottom-thre center">
						一键转发
					</view>
				</view>
			</view>
			<view class="gonglue-box">
				<view class="gong-top">
					攻略三：发布更多中标通知
				</view>
				<view class="gong-bottom">
					<view class="gong-bottom-one">
						已完成：0
					</view>
					<view class="gong-bottom-two">
			             奖励比重：<text class="red">20%</text>
					</view>
					<view class="gong-bottom-thre center" @tap="opennew('my-purchase')">
						点此发布
					</view>
				</view>
			</view>
			<view class="gonglue-box">
				<view class="gong-top">
					攻略四：转发获得商家注册
				</view>
				<view class="gong-bottom">
					<view class="gong-bottom-one">
						已完成：0
					</view>
					<view class="gong-bottom-two">
			             奖励比重：<text class="red">10%</text>
					</view>
					<view class="gong-bottom-thre center">
						一键转发
					</view>
				</view>
			</view>
		</view>
		<!-- 疑问回答 -->
		<view class="question">
			<view class="question01">
				来自火星的疑问
			</view>
			<view class="question02">
                多长时间
				<text class="green">分</text>
				一次
				<text class="red02">红利</text>
				<text class="big">？</text>
			</view>
			<div class="question03 fbold">
				答曰：
			</div>
			<div class="question04 red fbold">
				每满1000名商家加入会员
			</div>
			<div class="question05 fbold">
				开启一次红利池
			</div>
		</view>
		<!-- 本期进度 -->
		<view class="progress">
			<view class="progress01 w610">
				本期已有674名商家加入会员
			</view>
			<view class="progress02 w610">
				<text>0名</text>
				<text>1000名</text>
			</view>
			<view class="progress03 w610">
				<view class="progress03-inner" :style="{width:pro}">
					<div class="progress03-num center">
						674名
					</div>
				</view>
			</view>
			<div class="progress04 w610 dend">
				<div class="progress04-inner">
					开启红利池<br/>
					分钱啦！
				</div>
			</div>
			<div class="progress05 w610">
                 距离开启红利池还差<text>326</text>名商家
			</div>
		</view>
		<!-- 举个例子 -->
		<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/money.png" mode="widthFix"></image>
		<view class="example">
			<image src="https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/hong02.png" mode="widthFix"></image>
		</view>
		<!-- 活动规则 -->
		<view class="rule-title fbold textCenter">
			活动规则
		</view>
		<div class="rule-box">
			<div class="rule-num">
				1、
			</div>
			<div class="rule-text">
				点击上方<text class="fbold">【点此发布】</text>按钮把你想买的产品或服务， 以求购信息的形式发布到本平台，即可在平台拿分  红，按期支付。
			</div>
		</div>
		<div class="rule-box">
			<div class="rule-num">
				2、
			</div>
			<div class="rule-text">
				点击上方<text class="fbold">【一键转发】</text>按钮，将平台链接转发到你的朋友圈、微信群、QQ群、微信好友等，因你的转发吸引到一商家加入会员，你即获得最低100元现金红包一个及期期分红一次。
			</div>
		</div>
		<div class="rule-box">
			<div class="rule-num">
				3、
			</div>
			<div class="rule-text">
				每满1000名商家加入会员开启一期分红，每期红利池额度最高100万元，具体金额根据完成时间递减。
			</div>
		</div>
		<div class="rule-box">
			<div class="rule-num">
				4、
			</div>
			<div class="rule-text">
				我们设置了四项指标并且给每项指标分配了比重，每期会统计每人每项指标的完成数量的百分比，计算单项分配金。        
			</div>
		</div>
		<div class="rule-box">
			<div class="rule-num">
				5、
			</div>
			<div class="rule-text">
				 红利计算规则：<br/>
				    （1）单项指标应得红利=本期红利池总额度x该指标比
				       重x完成度占比。<br/>
				    （2）再将各单项指标应得红利加起来就是您的本期红
				       利额度。<br/>                 
			</div>
		</div>
		<div class="rule-box">
			<div class="rule-num">
				6、
			</div>
			<div class="rule-text">
				 <text class="fbold">重点：给朋友送商机、送生意，还可得百元红包雨、 期期分红期期拿双重大礼，还等什么立刻行动。</text>     
			</div>
		</div>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			pro:'67.4%'
		};
	},
	methods: {
		opennew:function(id){
			uni.navigateTo({
				url: '../'+id+'/'+id
			});
		},
		opennewtab:function(id){
			uni.switchTab({
				url: '../'+id+'/'+id
			});
		}
	}
};
</script>

<style>
	.rule-box .fbold{
		color: #333333;
	}
	.rule-title{
		font-size: 40rpx;
		padding: 70rpx 0 34rpx;
	}
	.rule-box{
		width: 649rpx;
		margin: 0 auto;
		font-size: 26rpx;
		color: #666666;
		margin-bottom: 20rpx;
		display: flex;
	}
	.example{
		background: #000000;
		overflow: hidden;
	}
	.example image{
		width: 713rpx;
		margin: 82rpx auto 55rpx;
		display: block;
	}
	.progress04-inner{
		text-align: center;
		margin-top: 14rpx;
	}
	.progress04{
		color: #E8C793;
		font-size: 26rpx;
	}
	.progress05{
		color: #E8C793;
		font-size: 34rpx;
		padding-bottom: 35rpx;
	}
	.progress05 text{
		color: #FFFFFF;
		font-size: 50rpx;
	}
	.progress03-num{
		background: url(https://9w9q.oss-cn-shanghai.aliyuncs.com/img/app_img/wx_img/hongliback.png) no-repeat;
		background-size:69rpx 79rpx;
		width: 69rpx;
		height: 79rpx;
		color: #3E3025;
		font-size: 26rpx;
		position: absolute;
		right: -34rpx;
		bottom: 24rpx;
		text-align: center;
		line-height: 28rpx;
		padding-bottom: 10rpx;
	}
	.progress03-inner{
		background: #E5BC7C;
		position: relative;
		height: 20rpx;
		border-radius: 10rpx;
	}
	.progress03{
		background: #F3EBE0;
		border-radius: 10rpx;
		height: 20rpx;
	}
	.progress02{
		display: flex;
		justify-content: space-between;
		color: #E8C793;
		font-size: #EBCFA5;
		padding-top: 71rpx;
	}
	.progress01{
		color: #E8C793;
		font-size: 34rpx;
		margin-top: 43rpx!important;
	}
	.w610{
		width: 610rpx;
		margin: 0 auto;
	}
	.question04,.question05{
		margin-left: 120rpx;
	}
	.question03{
		color: #333333;
		font-size: 44rpx;
	}
	.big{
		font-size: 90rpx;
		font-weight: 700;
	}
	.red02{
		color: #D90000;
		font-size: 60rpx;
	}
	.green{
		color: #008A05;
		font-size: 60rpx;
	}
	.question01,.question02{
		color: #5E5E5E;
		font-size: 40rpx;
		font-weight: 600;
		margin-left: 40rpx;
	}
	.question02{
		margin-left: 140rpx;
		white-space: nowrap;
	}
	.question{
		width: 620rpx;
		margin: 71rpx auto 68rpx;
	}
	.progress{
		background: #000000;
		overflow: hidden;
	}
	.gong-bottom-thre{
		width:160rpx;
		height:54rpx;
		background:rgba(51,51,51,1);
		font-size:26rpx;
		color:rgba(240,224,201,1);
		border-radius: 30rpx;
	}
	.red{
		color: #D90000;
		font-size: 40rpx;
	}
	.gong-bottom-two{
		font-size: 28rpx;
		color: #5E5E5E;
		margin-right: 75rpx;
	}
	.gong-bottom-one{
		height:28rpx;
		font-size:28rpx;
		font-weight:400;
		line-height:33rpx;
		color:rgba(102,102,102,1);
		margin-right: 40rpx;
		position: relative;
		bottom: 6rpx;
	}
	.gong-bottom{
		display: flex;
		align-items: flex-end;
		margin: 0 29rpx;
		line-height: 40rpx;
	}
	.gong-top{
		font-size:36rpx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(165,100,34,1);
		margin: 20rpx 29rpx 9rpx;
	}
	.gonglue-box{
		width:690rpx;
		height:143rpx;
		background:linear-gradient(134deg,rgba(248,230,206,1) 0%,rgba(241,206,167,1) 100%);
		border-radius:10rpx;
		overflow: hidden;
		margin-top: 29rpx;
	}
.renwu {
	width: 100%;
	margin-bottom: 30rpx;
}
.viewidend-one {
	margin: 0 30rpx;
	margin-top: -230rpx;
	z-index: 99;
	position: relative;
}
.backimg {
	width: 100%;
	height: 1067rpx;
}
.wrapper{
	background: #F3EBE0;
}
</style>
