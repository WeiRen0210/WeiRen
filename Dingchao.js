/*
Dingchao music unlock vip

QX1.0.0:
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

MITM = apiv2.dingstock.net
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const path1 = "/xserver/user/u/detail";

if (url.indexOf(path1) != -1) {
	obj.data["isVip"] = "true";
	obj.data["vipValidity"] = "1745659932000";
	body = JSON.stringify(obj);
}

$done({body});
