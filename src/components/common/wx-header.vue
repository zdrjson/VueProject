<template>
<!-- 复用性高， 数据交互比较频繁 -->
	<div id="wx-hear">
	<!-- 右上角图标 -->
		<div class="other">
			<span class="iconfont icon-tips-jia" v-show="$route.path==='/'" v-on:click="$store.commit('toggleTipsStatus')"></span>
			<!-- 只在“通讯录页显示” 显示添加好友图标 -->
			<router-link tag="span" to="/contact/add-friend" class="iconfont icon-tips-add-friend" v-show="$router.path==='/contact"></router-link>
			<!-- 只在“添加朋友” 页显示 -->
			<span v-show="$route.path==='/contact/new-friends'">添加朋友</span>
			<!-- 下面这个好像有些多余 sad -->
			<span class="iconfont icon-chat-friends" v-show="$route.path==='/wechat/dialogue'"></span>
            <ul class="tips-menu" :class="[$store.state.tipsStatus?`tips-open':'tips-close']" v-on:click="$store.commit('toggleTipsStatus', -1)">
            	<li>
            	<span class="iconfont icon-tips-xiaoxi"></span>
            	<div>发起群聊</div>
            	</li>
            	<routher-link tag="li" to="/wechat/add-friend">
            	  <span class="iconfont icon-tips-add-friend"></span>
            	  <div>添加朋友</div>
            	<routher-link/>
            	<li>
            		<span class="iconfont icon-itps-saoyisao"></span>
            		<div>扫一扫</div>
            	</li>
            	<li>
            		<span class="iconfont icon-tips-fukuan"></span>
            		<div>收付款</div>
            	</li>
            </ul>
		</div>
		<div class="center">
		    <!-- 显示当前页的名字 -->
			<span>{{$store.state.currentPageName}}</span>
			<!-- 微信群 显示群名以及成员人数 好像和 dialogue 组件写重了 sad -->
			<span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["pageName"],
		data() {
			return {
				//暂且用不到
				chatCount: true
			}
		},
		methods: {
			// 暂且用不到 先留着
			goBack() {
				this.$router.go(-1)
				//保证返回操作后正确显示页面名称
				//this.$store.commit("setPageName", thsi.$store.state.backPageName)
			}
		}

	}
</script>