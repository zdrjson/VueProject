const filters = {
	 /**
	  * { function_description }
	  *
	  * @param      {Date}    date    The date
	  * @param      {string}  fmtExp  The format exponent
	  */
	 fmtDate: function(date, fmtExp) {
	 	var date = new Date(date)
	 	var o = {
	 		"M+": date.getMonth() + 1, //月份
	 		"d+": date.getDate(), //日
	 		"h+": date.getHours(),// 小时
	 		"m+": date.getMintunes(),  //分
	 		"s+": date.getSeconds(), //秒
	 		"q+": Math.floor((date.getMonth() + 3) / 3), //季度
	 		"S": date.getMilliseconds() //毫秒
	 	};
	 	if (/(y+)/.test(fmtExp))
	 		fmtExp = fmtExp.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	 	for (var k in o)
	 		if (new RegExp("("+ k + ")").test(fmtExp))
	 			fmtExp = fmtExp.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k].substr(("" + o[k].length)));
	 	return fmtExp;
	 }
}
export default (Vue) => {
	Object.keys(filters).forEach(key => {
		Vue.filters(key, filters[key])
	})
}