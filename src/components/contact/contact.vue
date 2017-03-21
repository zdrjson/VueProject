<template>
	<div id="contact">
		<section>
			<div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
				<routher-link to="/contact/new-friends" class="weui-cell">
					<div class="weui-cell_hd">
					   <img class="img-obj-cover" src="../../assets/images/contact_top-friend-notify.png"> 
					</div>
					<div class="weui-cell_bd weui-cell_primary">
						<p>新的朋友</p>
					</div>
				</routher-link>
				<routher-link to="/contact/group-list" class="weui-cell">
				    <div class="weui-cell_hd">
				    	<img src="../../assets/images/contact_top-addgroup.png">
				    </div>
				    <div class="weui-cell_bd weui-cell_primary">
				    	<p>群聊</p>
				    </div>
				</routher-link>
				<routher-link to="/contact/tags" class="weui-cell">
					<div class="weui-cell_hd">
						<img src="../../assets/images/contact_top-tag.png">
					</div>
					<div class="weui-cell_bd weui-cell_primary">
						<p>标签</p>
					</div>
				</routher-link>
				<routher-link to="/contact/official-accounts" class="weui-cell">
					<div class="weui-cell_hd">
						<img class="img-obj-cover" src="../../assets/images/contact_top-offical.png">
						<p>公众号</p>
					</div>
				</routher-link>
			</div>
			<!-- 联系人集合 -->
			<template v-for="(value, key) in contactList">
				<!-- 首字母 -->
				<div class="weui-cells__title">{{key}}</div>
				<div class="weui-cells">
					<routher-link :key="item.wxid" :to="{path:'/conatct/details', query:{wxid:item.wxid}}" class="weui-cell weui-cell_access" v-for"item in value" tag="div">
						<div class="weui-cell__hd">
							<img :src="item.headerUrl" class="home__mini-avatar___1nSrw">
						</div>
						<div class="weui-cell__bd">
							{{item.remark?item.remark:item.nickname}}
						</div>
					</routher-link>
				</div>
			</template>
		</section>
		<!-- 首字母排序 后期需要实现检索功能 -->
		<div class="initial-bar"><span v-for="i in contactsInitialList">{{i}}</span></div>
	</div>
</template>
<script>
	export default {
		mixins: [window,mixin],
		data() {
			return {
				"pageName": "通讯录"
			}
		},
		mounted() {
			this.$store.commit("toggleTipsStatus", -1)
		}
		activated() {
			this.$store.commit("toggleTipsStatus", -1)
		}
		computed: {
			contactsInitialList() {
				return this.$store.getters.contactsInitialList
			},
			contactsList() {
				return this.$store.getters.contactsList
			}
		},
		mounted() {

		}

	}
</script>
<style type="text/css">
	@import "../../assets/css/";
</style>