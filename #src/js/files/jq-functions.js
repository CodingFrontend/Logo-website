// burger
$('.icon-menu').click(function (event) {
	$(this).toggleClass('_active');
	$('.menu__body').toggleClass('_active');
	if ($(this).hasClass('_active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('_lock');
})
// 

// background-image
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();
//