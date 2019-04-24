// JavaScript Document
$(document).ready(function(e) {
  
	var fenye_w=(36)*parseFloat($(".fenye a").length+1)+150;
	var fenye_left=parseFloat($(".fenye").css("margin-left"));
	var l= fenye_left -(fenye_w / 2 );
	$(".fenye").css({"margin-left":l,"width":fenye_w});
	
	$(".newsline").last().css("border-bottom","#dddddd solid 1px");
});

 