import Vue from 'vue'
import Vuex from 'vuex'
import OfficialAccounts from "./official-account" //存放存放所有关注的公众号
import contact from './contacts' //存放所有联系人的数据
import mutations from "./mutations"
import actions from "./actions"                                 
import getters from "./getters"
Vue.sue(Vuex)
 // 统一管理接口域名
 let apiPublicDomain = '//vrapi.snail.com/'
 const state = {
 	currentLang: "zh", //当前使用的语言 zh: 简体中文 en：英文 后期需要
 	newMsgCount: 0, //新消息数量
 	allContacts: contact.contacts //所有联系人
 	OfficialAccounts: OfficialAccounts, //所有关注的公众好
 	cureentPageName: "微信", //用于在wx-header组件中显示当前页标题
 	headerStatus: true, //显示(true)/隐藏(false) wx-header组件
 	tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
 	//所有接口地址 后期需要
 	apiUrl: {
 		demo: apiPublicDomain + ""
 	}
 	msgList: {
 		stickMsg: [], //置顶消息列表 后期需要
 		baseMsg:[{ //普通消息列表
              "mid":1, //消息的id 唯一标识， 重要
              "type": "freind",
              "group_name": "",
              "group_qrCode":"",
              "read":true,
              "newMsgCount":1,
              "quiet": false, // true: 消息免打扰 false: 提示此好友/群的新消息
              "msg": [{ //对话框的聊天记录 新消息 push进

              }]

 		}]
 	}
 }
