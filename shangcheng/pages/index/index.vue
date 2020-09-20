<template>
	<view class="container">
		<view class="content">
			<view class="search">
				<view class="searchList">
					<text class="icon icon-leimupinleifenleileibie2 fenlei">&#xe602;</text>
					<text class="list-wz">分类</text>
				</view>
				<!-- 搜索框 -->
				<!-- <uni-search-bar 
					placeholder="休闲零食" 
					@confirm="search" 
					:radius="100"
					:maxlength="10"
					cancelButton="none"
					class="searchbar"
					>
				
				</uni-search-bar> -->
				<input type="text" value="" placeholder="休闲零食" placeholder-style="font-size:32rpx; color:#999; margin-left:50rpx "/>
			</view>
			<view class="tag">
				<text class="taglist">热搜</text>
				<text class="taglist">自热火锅</text>
				<text class="taglist">华为手机</text>
				<text class="taglist">有机酸奶</text>
				<text class="taglist">苹果手机</text>
			</view>
		</view>
		
		<!-- 轮播图 -->
		<swiper class="swiper" 
				indicator-dots="true" 
				autoplay="true" 
				interval="5000" 
				duration="1500"	>
				<swiper-item>
					<image class="sw-img" src="../../static/img/1.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="sw-img" src="../../static/img/2.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="sw-img" src="../../static/img/3.jpg"></image>
				</swiper-item>
		</swiper>
		
		<!-- 图标 -->
		<view class="query">
			<view class="queryList">
				<view class="queryItem">
					<text class="icon icon-duanxiu-">&#xe6c5;</text>
				</view>
				<view class="queryItem">
					<text class="icon icon-zuqiu1">&#xe612;</text>
				</view>
				<view class="queryItem">
					<text class="icon icon-fushi-yundongxie">&#xe8ac;</text>
				</view>
				<view class="queryItem">
					<text class="icon icon-zhonglaonian">&#xe62c;</text>
				</view>
				<view class="queryItem">
					<text class="icon icon-shaonv">&#xe60e;</text>
				</view>
			</view>
			<view class="queryText">
			    <text>短袖T恤</text>
			    <text>足球</text>
			    <text>运动鞋</text>
			    <text>中老年</text>
				<text>甜美风</text>
			</view>
			<view class="queryList">
				<view class="queryItem">
					<text class="icon icon-qunzi">&#xe789;</text>
				</view>
				<view class="queryItem">
					<text class="icon icon-iconhuazhuangzaoxing">&#xe603;</text>
				</view>
				<view class="queryItem">
					<text class="icon icon-fushi-yundongxie">&#xe601;</text>
				</view>
				<view class="queryItem">
					<text class="icon icon-danjianbao">&#xe615;</text>
				</view>
				<view class="queryItem">
					<text class="icon icon-weiyi">&#xe69f;</text>
				</view>
			</view>
			<view class="queryText">
			    <text>鱼尾裙</text>
			    <text>相机</text>
			    <text>护肤品</text>
			    <text>单肩包</text>
				<text>卫衣</text>
			</view>
		</view>
		
		<!-- 新人专享 -->
		<view class="sort">
			<view class="sortList">
				<text>新人专享</text>
				<text class="icon icon-arrow-right jiantou">&#xe629;</text>
			</view>
			
			<swiper class="swiper"
					indicator-dots="true" 
					autoplay="true" 
					interval="5000" 
					duration="1500"	>
					<swiper-item>
						<image class="sw-img" src="../../static/img/4.jpg"></image>
					</swiper-item>
					<swiper-item>
						<image class="sw-img" src="../../static/img/5.jpg"></image>
					</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '../../components/uni-search-bar/uni-search-bar.vue';
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				count: 0
			}
		},
		methods: {

		},
		components: {
			     uniSearchBar,
				 uniIcons
			}
	}
</script>

<style>
	.content {
		padding :10rpx;
		background: red;
	}
	
	input{
		width: 100%;
		height: 80rpx;
		background: #FFFFFF;
		border: 2rpx solid red;
		border-radius: 50rpx;
		margin-top: 10rpx;
		margin-left: 30rpx;
		padding: 0rpx 40rpx;
	}
	.search{
		background: red;
		display: flex;
		flex-flow: row nowrap; 
	}
	
	/* .searchbar{
		width: 100%;
		height: 100rpx;
		background: red;
		border: 2rpx solid #007AFF;
	} */
	/* 分类图例 */
	.searchList{
		display: flex;
		flex-flow: column nowrap;
		margin: 10rpx 10rpx;
	}
	.list-wz{
		font-size: 24rpx;
		color: #fff;
		margin-left: 5rpx;
	}
	.fenlei{
		font-size: 56rpx;
		color: #fff;
	}
	/* 热搜 */
	.tag{
		color: #F8F8F8;
		font-size: 26rpx;
		border: 1rpx solid red;
		margin: 20rpx 15rpx;
	}	
	.taglist{
		border-radius: 30rpx;
		margin: 0rpx 12rpx;
		padding: 10rpx 15rpx;
		background: #DD524D;
	}
	
	/* 轮播图 */
	.swiper{
		width: 100%;
		height: 300rpx;
		padding: 0rpx 0rpx;
	}
	.sw-img{
		width: 100%;
		height: 100%;
	}
	
	/* 图例 */
	.query{
	  background: #fff;
	  padding: 15rpx 0rpx;
	}
	.queryList{
	  display: flex;
	  align-content: center;
	  justify-content: space-around;
	}
	.queryItem{
	  display: flex;
	  align-content: center;
	  padding: 20rpx 25rpx 10rpx 25rpx;
	  border-radius: 50%;
	}
	.queryText{
	  display: flex;
	  align-content: center;
	  justify-content: space-around;
	  margin: 10rpx 0rpx;
	  font-size: 30rpx;
	}
	
	/* 新人 */
	.sortList{
		font-size: 52rpx;
		font-weight: bold;
		align-content: center;
		margin: 25rpx 0rpx;
		margin-left: 250rpx;
	}
	.jiantou{
		color: #666;
		font-size: 46rpx;
		margin-left: 5rpx;
	}
</style>
