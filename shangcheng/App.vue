<script>
export default {
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
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
/* @import url("uni-icon.css"); */
@font-face {
  font-family: 'iconfont';  /* project id 1796019 */
  src: url('https://at.alicdn.com/t/font_1796019_am0r3dhc2dd.eot');
  src: url('https://at.alicdn.com/t/font_1796019_am0r3dhc2dd.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_1796019_am0r3dhc2dd.woff2') format('woff2'),
  url('https://at.alicdn.com/t/font_1796019_am0r3dhc2dd.woff') format('woff'),
  url('https://at.alicdn.com/t/font_1796019_am0r3dhc2dd.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_1796019_am0r3dhc2dd.svg#iconfont') format('svg');
}
.icon{
	font-size: 64rpx;
	color: #DD524D;
	font-family: iconfont;
}
</style>
