$(function(){
	
	$(".main").fullpage({
				"navigation":true,
//			"navigationPosition":"left",
//			"navigationColor":"red",
			"scrollBar":true
			})
	
	$("#stage").change(function(){
//			alert($("#province").val())
			if ($("#stage").val()== "2") {
				$("#grade").html('<option value="02">一年级</option><option value="03">二年级</option><option value="04">三年级</option><option value="05">四年级</option><option value="06">五年级</option><option value="07">六年级</option>')
				$("#subject").html('<option value="002">语文</option><option value="003">数学</option><option value="004">英语</option>')
			}
			if ($("#stage").val()== "3") {
				$("#grade").html('<option value="02">小升初</option>')
				$("#subject").html('<option value="002">语文</option><option value="003">数学</option><option value="004">英语</option>')
				
			}
			if ($("#stage").val()== "4") {
				$("#grade").html('<option value="02">预初</option><option value="02">初一</option><option value="初二">初二</option><option value="初三">初三</option>')
				$("#subject").html('<option value="002">语文</option><option value="003">数学</option><option value="004">英语</option>')
				
			}
			if ($("#stage").val()== "5") {
				$("#grade").html('<option value="02">中考冲刺</option>')
				$("#subject").html('<option value="002">语文</option><option value="003">数学</option><option value="004">英语</option><option value="004">物理</option><option value="004">化学</option>')
				
			}
			if ($("#stage").val()== "6") {
				$("#grade").html('<option value="02">高一</option><option value="02">高二</option><option value="02">高三</option>')
				$("#subject").html('<option value="002">语文</option><option value="003">数学</option><option value="004">英语</option><option value="004">物理</option><option value="004">化学</option>')
				
			}
			if ($("#stage").val()== "7") {
				$("#grade").html('<option value="02">高考冲刺</option>')
				$("#subject").html('<option value="002">语文</option><option value="003">数学</option><option value="004">英语</option><option value="004">物理</option><option value="004">化学</option>')
				
			}
			
		})
		$("#grade").change(function(){
			if($("#grade").val()=="初二"){
				$("#subject").html('<option value="002">语文</option><option value="003">数学</option><option value="004">英语</option><option value="004">物理</option>')
				
			}if($("#grade").val()=="初三"){
				$("#subject").html('<option value="002">语文</option><option value="003">数学</option><option value="004">英语</option><option value="004">物理</option><option value="004">化学</option>')
				
			}
		})
		
		
	
	
	
})
