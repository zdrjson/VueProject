<template>
	<div class="add-friend">
		<header id="wx-header">
			<div class="center">
				<div v-on:click="$router.back()" class="iconfont icon-return-arrow">
				    <span>返回</span>
				</div>
				<span>添加朋友</span>
			</div>
		</header>
		<div class="search-line">
			<span class="iconfont icon-search"></span>
			<input type="text" placeholder="微信号/手机号">
		</div>
		<p style="padding-top:8px;text-align: center;">
			<span>我的微信号：</span>
			<span>10086</span>
			<router-link> to="/self/profile/my-qrcode">&nbsp;
			 <img src="../../assets/images/contact_add-friend-my-qr.png" style="vertical-align: middle; width:24px" class="_align-middle">
			 </router-link>
		</p>
		<div class="weui-cells">
			<a class="weui-cell weui-cell_access">
				<div class="weui-cell__hd">
					<img src="../../assets/images/contact_add-friend-reda.png" alt="">
				</div>
				<div class="weui-cell_bd">
					<p>面对面进群</p>
					<p>与身边的朋友进入同一个群聊</p>
				</div>
				<div class="weui-cell__ft"></div>
			</a>
			<a class="weui-cell weui-cell_access">
				<div class="weui-cell__hd">
					<img src="../../assets//images/contact_add-friend-scanqr.png" alt="">
				</div>
				<div class="weui-cell__bd">
					<p>扫一扫</p>
					<p>扫描二维码名片</p>
				</div>
				<div class="weui-cell__ft"></div>
			</a>
			<a class="weui-cell weui-cell_access">
				<div class="weui-cell__hd">
					<img src="../../assets">
				</div>
			</a>
		</div>
	</div>
</template>