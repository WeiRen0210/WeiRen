/*
Unlocks by WeiRen、Lao高
*/
var body = $response.body;
var url = $request.url;
const path1 = "/account/detail";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	obj.data.vip = "vip":{"status": 1,
    "finish_date": "2026-06-06 06:06:06",
    "finish_date_ios": "2026.06.06",
    "pre_date": "2020-06-10 16:28:58",
    "days": 2019,
    "last_buy_date": "2020-06-11 03:17:09",
    "auto_buy": 0,
    "buy_status": 1,
    "id": 901828,
    "pre_status": 1}
	body = JSON.stringify(obj);
 }
$done({body});
