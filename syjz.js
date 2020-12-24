/*
Unlocks by WeiRen、Lao高
*/
var body = $response.body;
var url = $request.url;
const path1 = "/account/detail";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	obj.data.vip = {"isvip": "status":1,"days":999};
	body = JSON.stringify(obj);
 }
$done({body});
