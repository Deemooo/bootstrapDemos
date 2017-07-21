$(function() {
	var $btn1 = $("input[value=发送]");
	var $btn2 = $("input[value=清屏]");
	var bodyWidth = parseInt($("body").width());
	var bodyHeight = parseInt($("body").height());
	//发送
	$btn1.click(function() {
		var inputTextVal = $("#inputText").val();
		var $span = $("<span></span>");
		$("section.container").append($span);
		$span.text(inputTextVal).addClass("spanStyle");
		//起始位置取随机数
		$span.css("top", Math.random() * (bodyHeight - 100));
		$span.animate({
			"left": bodyWidth - 160			
		}, 5000, function() {
			$span.remove();
		});
	});
	//清屏
	$btn2.click(function() {
		var $span = $("span");
		$span.remove();
	});
});