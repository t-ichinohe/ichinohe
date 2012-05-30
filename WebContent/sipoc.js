/** crateymd():日付生成するために。画面読み込み時にID取得する
 */
window.onload = function crateymd() {
	setEvent_to_OBJ("document.getElementById('year')", "change", "iniD")
	setEvent_to_OBJ("document.getElementById('month')", "change", "iniD")
	setEvent_to_OBJ("document.getElementById('freeyear')", "change", "f_iniD")
	setEvent_to_OBJ("document.getElementById('freemonth')", "change", "f_iniD")
	setEvent_to_OBJ("document.getElementById('againstyear')", "change", "a_iniD")
	setEvent_to_OBJ("document.getElementById('againstmonth')", "change", "a_iniD")
	setEvent_to_OBJ("document.getElementById('resyear')", "change", "r_iniD")
	setEvent_to_OBJ("document.getElementById('resmonth')", "change", "r_iniD")

	ini();
}
function setEvent_to_OBJ(objNameStr, eventTypeNameStr, fncNameStr) {
	eval(objNameStr + ".on" + eventTypeNameStr + "=" + fncNameStr);
}

// 各月の日数、Arrag型y配列オブジェくトの生成
arrM = new Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
// 日付オブジェクトを生成
var dayT = new Date;
// 年月日を取得
var strY = dayT.getYear();
var strM = dayT.getMonth();
var strD = dayT.getDate();
//NN系対策
if (strY < 1900) {
	strY += 1900;
}
// それぞれの年月日の関数叩く
function ini() {
	iniY();
	iniM();
	iniD();
	f_iniY();
	f_iniM();
	f_iniD();
	a_iniY();
	a_iniM();
	a_iniD();
	r_iniY();
	r_iniM();
	r_iniD();
}

function iniY() {
	var yr = document.getElementById("year");
	// -2年から+2年まで
	yr.options.length = 5;
	yr.options[0].text = strY - 2;
	yr.options[1].text = strY - 1;
	yr.options[2].text = strY;
	yr.options[3].text = strY + 1;
	yr.options[4].text = strY + 2;
	yr.options[0].value = strY - 2;
	yr.options[1].value = strY - 1;
	yr.options[2].value = strY;
	yr.options[3].value = strY + 1;
	yr.options[4].value = strY + 2;
	yr.options[2].selected = "selected";
}

function f_iniY() {
	var yr = document.getElementById("freeyear");
	// -2年から+2年まで
	yr.options.length = 5;
	yr.options[0].text = strY - 2;
	yr.options[1].text = strY - 1;
	yr.options[2].text = strY;
	yr.options[3].text = strY + 1;
	yr.options[4].text = strY + 2;
	yr.options[0].value = strY - 2;
	yr.options[1].value = strY - 1;
	yr.options[2].value = strY;
	yr.options[3].value = strY + 1;
	yr.options[4].value = strY + 2;
	yr.options[2].selected = "selected";
}

function a_iniY() {
	var yr = document.getElementById("againstyear");
	// -2年から+2年まで
	yr.options.length = 5;
	yr.options[0].text = strY - 2;
	yr.options[1].text = strY - 1;
	yr.options[2].text = strY;
	yr.options[3].text = strY + 1;
	yr.options[4].text = strY + 2;
	yr.options[0].value = strY - 2;
	yr.options[1].value = strY - 1;
	yr.options[2].value = strY;
	yr.options[3].value = strY + 1;
	yr.options[4].value = strY + 2;
	yr.options[2].selected = "selected";
}

function r_iniY() {
	var yr = document.getElementById("resyear");
	// -2年から+2年まで
	yr.options.length = 5;
	yr.options[0].text = strY - 2;
	yr.options[1].text = strY - 1;
	yr.options[2].text = strY;
	yr.options[3].text = strY + 1;
	yr.options[4].text = strY + 2;
	yr.options[0].value = strY - 2;
	yr.options[1].value = strY - 1;
	yr.options[2].value = strY;
	yr.options[3].value = strY + 1;
	yr.options[4].value = strY + 2;
	yr.options[2].selected = "selected";
}
function iniM() {
	var mt = document.getElementById("month");
	mt.options.length = 12;
	for ( var i = 0; i < 12; i++) {
		mt.options[i].text = i + 1;
		mt.options[i].value = i + 1;
		if (i == strM) {
			mt.options[i].selected = "selected";
		}
	}
}

function f_iniM() {
	var mt = document.getElementById("freemonth");
	mt.options.length = 12;
	for ( var i = 0; i < 12; i++) {
		mt.options[i].text = i + 1;
		mt.options[i].value = i + 1;
		if (i == strM) {
			mt.options[i].selected = "selected";
		}
	}
}
function a_iniM() {
	var mt = document.getElementById("againstmonth");
	mt.options.length = 12;
	for ( var i = 0; i < 12; i++) {
		mt.options[i].text = i + 1;
		mt.options[i].value = i + 1;
		if (i == strM) {
			mt.options[i].selected = "selected";
		}
	}
}
function r_iniM() {
	var mt = document.getElementById("resmonth");
	mt.options.length = 12;
	for ( var i = 0; i < 12; i++) {
		mt.options[i].text = i + 1;
		mt.options[i].value = i + 1;
		if (i == strM) {
			mt.options[i].selected = "selected";
		}
	}
}
function iniD() {
	var yr = document.getElementById("year");
	var dt = document.getElementById("date");
	var mt = document.getElementById("month");
	var u_flg = 0;//うるう年か否か
	var d_flg = 0;//年月が現在と同じか否か
	//月末の日数
	var lngD = arrM[mt.options[mt.selectedIndex].value];
	if (mt.options[mt.selectedIndex].value == 2) {
		u_flg = uruu(yr.options[yr.selectedIndex].value);
	}
	if (u_flg != 0) {
		lngD++;
	}
	if (mt.options[mt.selectedIndex].value == strM + 1
			&& yr.options[yr.selectedIndex].value == strY) {
		d_flg = 1;
	}

	dt.options.length = lngD;
	for ( var i = 0; i < lngD; i++) {
		dt.options[i].text = i + 1;
		dt.options[i].value = i + 1;
		if (i == strD - 1 && d_flg == 1) {
			dt.options[i].selected = "selected";
		}
	}
	if (d_flg == 0) {
		dt.options[0].selected = "selected";
	}
}
function f_iniD() {
	var yr = document.getElementById("freeyear");
	var dt = document.getElementById("freedate");
	var mt = document.getElementById("freemonth");
	var u_flg = 0;//うるう年か否か
	var d_flg = 0;//年月が現在と同じか否か
	//月末の日数
	var lngD = arrM[mt.options[mt.selectedIndex].value];
	if (mt.options[mt.selectedIndex].value == 2) {
		u_flg = f_uruu(yr.options[yr.selectedIndex].value);
	}
	if (u_flg != 0) {
		lngD++;
	}
	if (mt.options[mt.selectedIndex].value == strM + 1
			&& yr.options[yr.selectedIndex].value == strY) {
		d_flg = 1;
	}

	dt.options.length = lngD;
	for ( var i = 0; i < lngD; i++) {
		dt.options[i].text = i + 1;
		dt.options[i].value = i + 1;
		if (i == strD - 1 && d_flg == 1) {
			dt.options[i].selected = "selected";
		}
	}
	if (d_flg == 0) {
		dt.options[0].selected = "selected";
	}
}
function a_iniD() {
	var yr = document.getElementById("againstyear");
	var dt = document.getElementById("againstdate");
	var mt = document.getElementById("againstmonth");
	var u_flg = 0;//うるう年か否か
	var d_flg = 0;//年月が現在と同じか否か
	//月末の日数
	var lngD = arrM[mt.options[mt.selectedIndex].value];
	if (mt.options[mt.selectedIndex].value == 2) {
		u_flg = a_uruu(yr.options[yr.selectedIndex].value);
	}
	if (u_flg != 0) {
		lngD++;
	}
	if (mt.options[mt.selectedIndex].value == strM + 1
			&& yr.options[yr.selectedIndex].value == strY) {
		d_flg = 1;
	}

	dt.options.length = lngD;
	for ( var i = 0; i < lngD; i++) {
		dt.options[i].text = i + 1;
		dt.options[i].value = i + 1;
		if (i == strD - 1 && d_flg == 1) {
			dt.options[i].selected = "selected";
		}
	}
	if (d_flg == 0) {
		dt.options[0].selected = "selected";
	}
}
function r_iniD() {
	var yr = document.getElementById("resyear");
	var dt = document.getElementById("resdate");
	var mt = document.getElementById("resmonth");
	var u_flg = 0;//うるう年か否か
	var d_flg = 0;//年月が現在と同じか否か
	//月末の日数
	var lngD = arrM[mt.options[mt.selectedIndex].value];
	if (mt.options[mt.selectedIndex].value == 2) {
		u_flg = r_uruu(yr.options[yr.selectedIndex].value);
	}
	if (u_flg != 0) {
		lngD++;
	}
	if (mt.options[mt.selectedIndex].value == strM + 1
			&& yr.options[yr.selectedIndex].value == strY) {
		d_flg = 1;
	}

	dt.options.length = lngD;
	for ( var i = 0; i < lngD; i++) {
		dt.options[i].text = i + 1;
		dt.options[i].value = i + 1;
		if (i == strD - 1 && d_flg == 1) {
			dt.options[i].selected = "selected";
		}
	}
	if (d_flg == 0) {
		dt.options[0].selected = "selected";
	}
}

/**
 * 閏年判別用関数
 * @param year 選択された年
 * @returns 1:閏年 0:閏年以外
 */
function uruu(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		return 1;
	} else {
		return 0;
	}
}
function f_uruu(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		return 1;
	} else {
		return 0;
	}
}
function a_uruu(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		return 1;
	} else {
		return 0;
	}
}
function r_uruu(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		return 1;
	} else {
		return 0;
	}
}

/**
 *
 */
function AddRow() {
	var objNode1,objNode2,objNode3,objNodeList,nLength;
	var i,j,objResult;
	objResult = document.getElementById( "result" );
	// 対象テーブルを指定する
	objNode = document.getElementById("target1");

	// 対象テーブル内の TR ノード
	objNodeList = objNode.getElementsByTagName("tr");

	// 行数
	nLength = objNodeList.length;

	// クローンを作成 ( th があるので、最初の行は 1 )
	var cloneNode1 = objNodeList.item(2).cloneNode(true);
//	var cloneNode2 = objNodeList.item(3).cloneNode(true);
//	var cloneNode3 = objNodeList.item(4).cloneNode(true);

	// クローンノードの設定
	var nodeTDList = cloneNode1.getElementsByTagName("td");

	// 0:項番 1:
//	nodeTDList.item(0).firstChild.nodeValue = no++;

//	nodeTDList.item(2).style.cssText = "2";
//	nodeTDList.item(2).style.cssText = "";
//	nodeTDList.item(3).style.cssText = "";
//	var data1_1 = document.getElementById("chktd1");
//	alert(data1_1.nextSibling.nodeValue);
	// 年月日
	nodeTDList.item(0).setAttribute("bgcolor", "brack");
	// 確認履歴(および改善事項)
	nodeTDList.item(1).setAttribute("bgcolor", "brack");
	// 支社長
	nodeTDList.item(2).setAttribute("bgcolor", "brack");
	// 支社長確認日
	nodeTDList.item(3).setAttribute("bgcolor", "brack");

	//nodeTDList.item(3).setAttribute("align", "center");
	//nodeTDList.setAttribute("width", 192);


	// ２行目の前に追加
	// insertBefore を実行する為に、TR ノードの親ノードを取得
	var parentNode1 = objNodeList.item(1).parentNode;
//	var parentNode2 = objNodeList.item(2).parentNode;
//	var parentNode3 = objNodeList.item(3).parentNode;

	// objNodeList[4]の位置から挿入する
	parentNode1.insertBefore(cloneNode1, objNodeList[3]);
//	parentNode2.insertBefore(cloneNode2, objNodeList[5]);
//	parentNode3.insertBefore(cloneNode3, objNodeList[6]);

	// objNodeList[4]の位置から挿入する
//	parentNode1.insertAfter(cloneNode1, parentNode1);
//	parentNode2.insertAfter(cloneNode2, parentNode2);
//	parentNode3.insertAfter(cloneNode3, parentNode3);
}
Node.prototype.insertAfter = function(node, referenceNode) {
    this.insertBefore(node, referenceNode.nextSibling);
};


var no = 1;
var maxlength = 5;

function AddRowResult() {
	var objNode1,objNode2,objNode3,objNodeList,nLength;
	var i,j,objResult;
	objResult = document.getElementById( "result" );
	// 対象テーブルを指定する
	objNode = document.getElementById("target2");

	// 対象テーブル内の TR ノード
	objNodeList = objNode.getElementsByTagName("tr");

	// 行数
	nLength = objNodeList.length;

	// クローンを作成 ( th があるので、最初の行は 1 )
	var cloneNode1 = objNodeList.item(1).cloneNode(true);
	var cloneNode2 = objNodeList.item(2).cloneNode(true);
	var cloneNode3 = objNodeList.item(3).cloneNode(true);

	// クローンノードの設定
	var nodeTDList = cloneNode1.getElementsByTagName("td");

	// 0:項番 1:
	if ( no == undefined ){
		no = 1;
	}
	nodeTDList.item(0).firstChild.nodeValue = no++;

//	nodeTDList.item(2).style.cssText = "2";
//	nodeTDList.item(2).style.cssText = "";
//	nodeTDList.item(3).style.cssText = "";
//	var data1_1 = document.getElementById("chktd1");
//	alert(data1_1.nextSibling.nodeValue);
//	// 年月日
//	nodeTDList.item(0).setAttribute("bgcolor", "brack");
//	// 確認履歴(および改善事項)
//	nodeTDList.item(1).setAttribute("bgcolor", "brack");
//	// 支社長
//	nodeTDList.item(2).setAttribute("bgcolor", "brack");
//	// 支社長確認日
//	nodeTDList.item(3).setAttribute("bgcolor", "brack");

	//nodeTDList.item(3).setAttribute("align", "center");
	//nodeTDList.setAttribute("width", 192);


	// ２行目の前に追加
	// insertBefore を実行する為に、TR ノードの親ノードを取得
	var parentNode1 = objNodeList.item(1).parentNode;
	var parentNode2 = objNodeList.item(2).parentNode;
	var parentNode3 = objNodeList.item(3).parentNode;

	// objNodeList[4]の位置から挿入する
	parentNode1.insertBefore(cloneNode1, objNodeList[4]);
	parentNode2.insertBefore(cloneNode2, objNodeList[5]);
	parentNode3.insertBefore(cloneNode3, objNodeList[6]);

	// objNodeList[4]の位置から挿入する
//	parentNode1.insertAfter(cloneNode1, parentNode1);
//	parentNode2.insertAfter(cloneNode2, parentNode2);
//	parentNode3.insertAfter(cloneNode3, parentNode3);
}
function count() {
    no = no + 1;
    return no;
}