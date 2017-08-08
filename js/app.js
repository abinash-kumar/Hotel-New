var iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
		$('#nav').addClass('up');
		$('#nav').removeClass('down');
		$('#nav').removeClass('animated');
    } else {
       //Scrolling Up
		$('#nav').addClass('down');
		$('#nav').removeClass('up');
    }
    iScrollPos = iCurScrollPos;
});



$('#footer').ready(function() {
	var hght = $('#footer').height();
	$('.footerSpace').css('height',hght);
	$('.footerFix').css('height',hght);
});

$('#bkNow').click(function(){
	$('#bookNowFrom').css({"transform" : "translate(0px,0px)"}, 500);
});

$('.bkcls').click(function(){
	$('#bookNowFrom').css({"transform" : "translate(0px,-150px)"}, 500);
});