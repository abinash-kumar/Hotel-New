var iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
		$('#nav').addClass('up');
		$('#nav').removeClass('down');
    } else {
       //Scrolling Up
		$('#nav').addClass('down');
		$('#nav').removeClass('up');
    }
    iScrollPos = iCurScrollPos;
});