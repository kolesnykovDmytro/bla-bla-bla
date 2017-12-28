$(document).ready(function(){

	var tl = new TimelineMax();
	
	$('.btn_go').click(function() {
		var tl = new TimelineMax();
		tl.to('#start_bar', 1, {right:-900}).to('#second_bar', 1, {right:0});
	});

	$('.btn-next').click(function() {
		var tl = new TimelineMax();
		tl.to('.counter_block', .5, {opacity:0}).to('#second_bar', 1, {right:-900}).to('#third_bar', 1, {right:0});
	});

	$('.content_block:not(.block-signup) input').click(function(){
		$(this).closest('.content_block').find('.btn_next').addClass('active');
		if($(this).is('[data-statistic-count]') && $(this).is('[data-statistic-text]')){
			answerInfo($(this));
		}
	});

	function answerInfo(elem){
		counterAnimate(elem.data('statistic-count'));
		typeTextAnimate(elem.data('statistic-text'));
		$('.counter_block .counter_value span').html(elem.data('statistic-count'));
		$('.counter_block p').html(elem.data('statistic-text'));
		$('.counter_block').addClass('active');
	};

	function counterAnimate(val) {
		var parseVal = parseFloat(val),
			count = 0;
		var _t = setInterval(function() {
			if(count >= parseVal){
				$('.counter_block .counter_value span').html(val);
				clearInterval(_t);
			}else{
				count += 1;
				$('.counter_block .counter_value span').html(count);
			}
		}, 10);
	};

	function typeTextAnimate(text) {
		var i = 0,
			temporaryText = [];
		var _t = setInterval(function() {
			if(i == text.length){
				clearInterval(_t);
			}else{
				temporaryText[temporaryText.length] = text[i];
				$('.counter_block p').html(temporaryText);
				i++;
			}
		}, 20);
	};
});