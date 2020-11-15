$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	let bottomHeaderColumn_1 = $('.bottom-header__column').eq(0);
	let bottomHeaderColumn_2 = $('.bottom-header__column').eq(1);
	if (w < 640) {
		if(!bottomHeaderColumn_1.hasClass('done') && !bottomHeaderColumn_2.hasClass('done')){
			bottomHeaderColumn_1.addClass('done').prependTo($('.menu__body'));
			bottomHeaderColumn_2.addClass('done').appendTo($('.menu__body'));
		}
	} else {
		bottomHeaderColumn_1.removeClass('done').prependTo($('.bottom-header__content'));
		bottomHeaderColumn_2.removeClass('done').appendTo($('.bottom-header__content'));
	}
}

function adaptive_function() {
	let w=$(window).outerWidth();
	let h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();

	