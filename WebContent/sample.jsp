<%@page pageEncoding="Windows-31J" contentType="text/html; charset=Windows-31J" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Windows-31J"/>
<title></title>

<script type="text/javascript">
<!--

var example = document.getElementById(sample);
var text = document.form.text.value;

alert(text);
for (i=0;i<12;i++){
  example.options[i].text = i;
  example.options[i].value = i;
}
// -->
</script>
</head>
<body>
<form id="form">	
<select id="sample" name="example">
<option value="サンプル1">01</option>
<option value=""></option>
			</select>
		
<input type="text" id="text" value="test">
</form>
</body>
</html>
