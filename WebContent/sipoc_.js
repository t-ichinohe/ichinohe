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

arrM = new Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var dayT = new Date;
var strY = dayT.getYear();
var strM = dayT.getMonth();
var strD = dayT.getDate();
if (strY < 1900) {
	strY += 1900;
}//NN系対策

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
function a_iniD() {
	var yr = document.getElementById("againstyear");
	var dt = document.getElementById("againstdate");
	var mt = document.getElementById("againstmonth");
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
function r_iniD() {
	var yr = document.getElementById("resyear");
	var dt = document.getElementById("resdate");
	var mt = document.getElementById("resmonth");
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

function uruu(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		return 1;
	} else {
		return 0;
	}
}

function AddRow() {
	var j,objNode,objNodeList,nLength,objResult;

	// 対象テーブル
	objNode = document.getElementById( "target" );

	// 対象テーブル内の TR ノード
	objNodeList = objNode.getElementsByTagName( "tr" );

	// 行数
	nLength = objNodeList.length;

	// 一行目のクローンを作成 ( TH があるので、最初の行は 1 )
	var cloneNode = objNodeList.item(1).cloneNode( true );
	// クローンノードの設定
	var nodeTDList = cloneNode.getElementsByTagName( "td" );
/*	nodeTDList.item( 0 ).firstChild.nodeValue = "[0001]";
	nodeTDList.item( 1 ).style.cssText = "font-weight: bold";
	// 個別設定
//	nodeTDList.item( 1 ).style.fontWeight = "bold";
	nodeTDList.item( 2 ).setAttribute("align", "right");
*/
	// ２行目の前に追加
	// insertBefore を実行する為に、TR ノードの親ノードを取得
	var parentNode = objNodeList.item(2).parentNode;
//	for(i = 3; i <= 7; i++){
		parentNode.insertAfter( cloneNode, parentNode );

//	}
//	alert( parentNode.nodeName );
	// 以下でも同様
//	var parentNode = objNode.getElementsByTagName( "TBODY" )[0];
//	parentNode.insertBefore( cloneNode, objNodeList[2] );

}
Node.prototype.insertAfter = function(node, referenceNode) {
    this.insertBefore(node, referenceNode.nextSibling);
};
var count = 0;
function AddRowResult() {
	var i,j,objNode1,objNode2,objNode3,objNodeList,nLength,objResult;
	var tmp_objNodeList;
	var x;
	num = new Array("2", "3", "4", "5");

	// 対象テーブル
	objNode = document.getElementById("target2");

	// 対象テーブル内の TR ノード
	objNodeList = objNode.getElementsByTagName("tr");

	// 行数
	nLength = objNodeList.length;

	// 一行目のクローンを作成 ( th があるので、最初の行は 1 )
	var cloneNode1 = objNodeList.item(1).cloneNode(true);
	var cloneNode2 = objNodeList.item(2).cloneNode(true);
	var cloneNode3 = objNodeList.item(3).cloneNode(true);

	// クローンノードの設定
	var nodeTDList = cloneNode1.getElementsByTagName("td");

	nodeTDList.item(0).firstChild.nodeValue = num[count++];

	nodeTDList.item(1).style.cssText = "";
	nodeTDList.item(2).style.cssText = "";
	nodeTDList.item(3).style.cssText = "";
//	var nodeTDList = cloneNode2.getElementsByTagName( "td" );
	// 個別設定
//	nodeTDList.item( 1 ).style.fontWeight = "bold";
//	nodeTDList.item( 2 ).setAttribute("align", "center");

	// ２行目の前に追加
	// insertBefore を実行する為に、TR ノードの親ノードを取得
	var parentNode1 = objNodeList.item(1).parentNode;
	var parentNode2 = objNodeList.item(2).parentNode;
	var parentNode3 = objNodeList.item(3).parentNode;

	// objNodeList[4]の位置から挿入する
	parentNode1.insertBefore(cloneNode1, objNodeList[4]);
	parentNode2.insertBefore(cloneNode2, objNodeList[5]);
	parentNode3.insertBefore(cloneNode3, objNodeList[6]);
}