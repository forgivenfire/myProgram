
new WOW().init()
$(function(){
	
	//轮播图
	jQuery(".slideBox").slide({mainCell:".bd ul",effect:"left",autoPlay:true,delayTime:700});
	
	
	$("#yuyue").mouseover(function(){
		$("#yuyue").css({"opacity":0.5})
	}).mouseout(function(){
		$("#yuyue").css({"opacity":1})
	})
		
	$("#class").mouseover(function(){
		
	})
		$(".classA ul").eq(0).siblings().hide()
	$("#class ul li").mouseover(function(){
		var i=$(this).index();
		$(this).css({"background":"red","color":"white"})
		$(this).siblings().css({"background":"white","color":"red"})
	
		$(".classA ul").eq(i).show()
		
		$(".classA ul").eq(i).siblings().hide()

	})
	$(".classA ul li").mouseover(function(){
		$(this).css({"background":"red","color":"white"})
		$(this).siblings().css({"background":"white","color":"red"})
	})
	
	/*$("#fullpage").fullpage({
		'verticalCentered': false,
        		'navigationPosition': 'right',
      
	})*/
	//小学课程轮换的联动
		$(".box").eq(0).show().siblings().hide()
		$(".box2").hide()
	$(".ul li").mouseover(function(){
		$(".box2").hide()
	var i=$(this).index()
		$(".box").eq(i).show().siblings().hide()
	})
	//中学课程的联动
	
	$(".classA .ul2 li").mouseover(function(){
		$(".box").hide()
//		$(".box2").eq(0).show().siblings().hide()
		var a=$(this).index()
		$(".box2").eq(a).show().siblings().hide()
		
	})
	
	
	
	
	//模态框
	$(".mtk").hide();
	$(".opacity").hide();
	$("#motai").click(function(){
		fun();
		/*$(window).resize(function(){
			fun()
		})*/
		
		
	})
	
	function fun(){
		var vW=$(window).width()
		var vH=$(window).height()
		var dW=$(".mtk").outerWidth()
		var dH=$(".mtk").outerHeight()
		var oH=$(window).scrollTop()
		$(".mtk").css({"left":(vW-dW)/2+"px","bottom":100+"px"})
//		$(".opacity").css({"top":oH+"px"})
		$(".mtk").show();
		$(".opacity").show();
	
	}
	$("#disappear").click(function(){
		$(".opacity").fadeOut(1000)
		$(".mtk").fadeOut(1000)
	})
	
	//fullpage的插件
	/*$(".main").fullpage({
				"navigation":true,
//			"navigationPosition":"left",
//			"navigationColor":"red",
			})*/
	
	//wow插件
	
	//最底部课程select联动
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