// burger
$('.icon-menu').click(function(event){
	$(this).toggleClass('_active');
	$('.menu__body').toggleClass('_active');
	if($(this).hasClass('_active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('_lock');
})
// 

// logo click => scroll top
// $('.logo').click(function(event){
// 	$('body').data('scroll',$(window).scrollTop());
// })
// 

//fancybox hide content when clicked
// $(".info-main__video").fancybox({
//    afterShow: function(){
//       $('.info-main__video').toggleClass('changed');
//    },
//    afterClose: function(){
//        $('.info-main__video').toggleClass('changed');
//         $("body").css({'overflow-y':'visible'});
//    },
//    beforeShow: function(){
//     $("body").css({'overflow-y':'hidden'});
// 	},
// });
// 

// fancybox images
// $('[data-fancybox="images"]').fancybox({
// 	mobile : {
// 		clickContent : "close",
// 		clickSlide : "close"
// 	},
// 	afterLoad : function(instance, current) {
// 		var pixelRatio = window.devicePixelRatio || 1;

// 		if ( pixelRatio > 1.5 ) {
// 			current.width  = current.width  / pixelRatio;
// 			current.height = current.height / pixelRatio;
// 		}
// 	}
// });
// 

// datepicker
//  $( function() {
//     $( "#date" ).datepicker({
//       firstDay: 1,
//       autoSize: true,
//       minDate: new Date(),
//       dateFormat: "dd.mm.yy",
//     }).datepicker("setDate", new Date());
// });
// 

// input mask
// $(document).ready(function(){
//   $('#tel').inputmask("+7 (999) 999-99-99");
//   $('#expiryDate').inputmask("99/99");  //static mask
//   // $(selector).inputmask({"mask": "(999) 999-9999"}); //specifying options
//   // $(selector).inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax
// });
// 

// background-image
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
//

// Slick slider photos
// $(document).ready(function(){
// 	$('.info-main__photos').slick({
// 		arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         mobileFirst: true,
//         variableWidth: true,
//     		responsive: [
//         	{
//            	breakpoint: 767,
//            	settings: "unslick"
//         	}
//      	]
// 	});
// });
//

// Slick slider map card
// $(document).ready(function(){
// 	$('.content-card__row').slick({
// 		prevArrow: $('.control-card-content__arrow_prev'),
// 		nextArrow: $('.control-card-content__arrow_next'),
// 		slidesToShow: 1,
// 		dots: true,
// 		mobileFirst: true,
// 		responsive: [
// 			{
// 				breakpoint: 767,
// 				settings: "unslick"
// 			}
// 		]
// 	});
// });
// 

//show more - show less for photos
// $(document).ready(function(){
// 	let i = 0;
// 	$('.togglePhoto').click(function() {
// 		if (!i) {
// 			$('.info-main__img_more').toggle();
// 			$(this).toggleClass('active');
// 			if ($(this).text() == 'Показать больше фото') {
// 					$(this).text('Меньше фото');
// 			}

// 			i = 1;
// 		} else {
// 			$('.info-main__img_more').toggle();
// 			$(this).toggleClass('active');
// 			$(this).text('Показать больше фото')

// 			i = 0;
// 		}
// 	})
// })
// 

// multiple show more - show less for text
// $(document).ready(function(){
// 	let i = 0;
// 	$('.toggleButton').click(function() {
// 		if (!i) {
// 			$(this).parent().prev().children().find('.text-autor__more').css('display','inline');
// 			$(this).parent().prev().children().find('.dots').toggle();
// 			$(this).toggleClass('active');
// 			if ($(this).text() == 'Читать еще') {
// 					$(this).text('Меньше');
// 			}

// 			i = 1;
// 		} else {
// 			$(this).parent().prev().children().find('.text-autor__more').css('display','none');
// 			$(this).parent().prev().children().find('.dots').toggle();
// 			$(this).toggleClass('active');
// 			$(this).text('Читать еще')

// 			i = 0;
// 		}
// 	})
// })
// 

// multiple show more - show less for reviews
// $(document).ready(function(){
// 	let i = 0;
// 	$('.toggleReviews').click(function() {
// 		if (!i) {
// 			$(this).parent().prev().css('display','flex');
// 			$(this).toggleClass('active');
// 			if ($(this).text() == 'Показать Все (134)') {
// 					$(this).text('Меньше');
// 			}

// 			i = 1;
// 		} else {
// 			$(this).parent().prev().css('display','none');
// 			$(this).toggleClass('active');
// 			$(this).text('Показать Все (134)')

// 			i = 0;
// 		}
// 	})
// })
// 

// multiple show more - show less for photographer info
// $(document).ready(function(){
// 	let i = 0;
// 	$('.toggleInfo').click(function() {
// 		if (!i) {
// 			$(this).parent().prev().css('display','inline');
// 			if ($(this).text() == 'Читать еще') {
// 					$(this).text('Меньше');
// 			}

// 			i = 1;
// 		} else {
// 			$(this).parent().prev().css('display','none');
// 			$(this).text('Показать больше информации о фотографе')

// 			i = 0;
// 		}
// 	})
// })
// 

// multiple show more - show less for photographer info
// $(document).ready(function(){
// 	let i = 0;
// 	$('.text-card__toggle').click(function() {
// 		if (!i) {
// 			$(this).parent().prev().css('display','block');
// 			if ($(this).text() == 'Читать еще') {
// 					$(this).text('Меньше');
// 			}

// 			i = 1;
// 		} else {
// 			$(this).parent().prev().css('display','none');
// 			$(this).text('Показать больше информации')

// 			i = 0;
// 		}
// 	})
// })
//

// Smooth scroll to the target except when opening popup
// $(document).ready(function(){
// 	$('a[href*="#"]:not(a[href="#bookPopup"])').on('click', function (e) {
// 			event.preventDefault();
// 			var id  = $(this).attr('href'),
// 				 top = $(id).offset().top - ($('.navbar').height() + 25);
// 			$('body,html').animate({scrollTop: top}, 800);
//     });
// });
//
