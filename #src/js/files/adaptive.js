$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	let lang = $('.lang');
	if (w < 767) {
		if(!lang.hasClass('done')){
			lang.addClass('done').appendTo($('.footer__credits'));
		}
	} else {
		if (lang.hasClass('done')){
			lang.removeClass('done').appendTo($('.footer__col_social'));
		}
	}
}

function adaptive_function() {
	let w=$(window).outerWidth();
	let h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();

	