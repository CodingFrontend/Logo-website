
// Яндекс карты
	// ymaps.ready(init); 
	// var myMap;
	
	// function init() {
	
	// 	myMap = new ymaps.Map("map", {
	// 		center: [55.76314129323675,37.58982066113282], // Координаты центра карты
	// 		zoom: 13 // Маштаб карты
	// 	}); 
	
	// 	myMap.controls.remove('searchControl');
	
	// 	myPlacemark = new ymaps.Placemark([55.758901398901,37.61951869642621], {
 //            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
 //            balloonContentBody: "Встречаемся тут!",
 //        });

 //    myMap.geoObjects.add(myPlacemark);
	// };
// 

// agree checkbox
// window.addEventListener("DOMContentLoaded", function(e) {

  //   var myForm = document.getElementById("popupForm");
  //   var checkForm = function(e) {
  //     if(!this.terms.checked) {
  //       alert("Please indicate that you accept the Terms and Conditions");
  //       this.terms.focus();
  //       e.preventDefault(); // equivalent to return false
  //       return;
  //     }
  //   };

  //   // attach the form submit handler
  //   myForm.addEventListener("submit", checkForm, false);

  //   var myCheckbox = document.getElementById("agree");
  //   var myCheckboxMsg = "Please indicate that you accept the Terms and Conditions";

  //   // set the starting error message
  //   myCheckbox.setCustomValidity(myCheckboxMsg);

  //   // attach checkbox handler to toggle error message
  //   myCheckbox.addEventListener("change", function(e) {
  //     this.setCustomValidity(this.validity.valueMissing ? myCheckboxMsg : "");
  //   }, false);

  // }, false);
// 

// popup
// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 300;

// if (popupLinks.length > 0) {
// 	for (let i = 0; i < popupLinks.length; i++) {
// 		const popupLink = popupLinks[i];
// 		popupLink.addEventListener('click', function(e) {
// 			const popupName = popupLink.getAttribute('href').replace('#', '');
// 			const currentPopup = document.getElementById(popupName);
// 			popupOpen(currentPopup);
// 			e.preventDefault();
// 		});
// 	}
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
// 	for (let i = 0; i < popupCloseIcon.length; i++) {
// 		const el = popupCloseIcon[i];
// 		el.addEventListener('click', function(e) {
// 			popupClose(el.closest('.popup'));
// 			e.preventDefault();
// 		})
// 	}
// }

// function popupOpen(currentPopup) {
// 	if(currentPopup && unlock) {
// 		const popupActive = document.querySelector('.popup.open');
// 		if(popupActive) {
// 			popupClose(popupActive, false);
// 		} else {
// 			bodyLock();
// 		}
// 		currentPopup.classList.add('open');
// 		currentPopup.addEventListener('click', function(e) {
// 			if (!e.target.closest('.popup__body')) {
// 				popupClose(e.target.closest('.popup'));
// 			}
// 		});
// 	}
// }

// function popupClose(popupActive, doUnlock = true) {
// 	if(unlock) {
// 		popupActive.classList.remove('open');
// 		if(doUnlock) {
// 			bodyUnlock();
// 		}
// 	}
// }

// function bodyLock() {
// 	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

// 	if (lockPadding.length > 0) {
// 		for (let i = 0; i < lockPadding.length; i++) {
// 			const el = lockPadding[i];
// 			el.style.paddingRight = lockPaddingValue;
// 		}
// 	}
// 	body.style.paddingRight = lockPaddingValue;
// 	body.classList.add('lock');

// 	unlock = false;
// 	setTimeout(function () {
// 		unlock = true;
// 	}, timeout);
// }
// function bodyUnlock() {
// 	setTimeout(function () {
// 		if (lockPadding.length > 0) {
// 			for (let i = 0; i < lockPadding.length; i++) {
// 				const el = lockPadding[i];
// 				el.style.paddingRight = '0px';
// 			}
// 		}
// 		body.style.paddingRight = '0px';
// 		body.classList.remove('lock');
// 	}, timeout);

// 	unlock = false;
// 	setTimeout(function() {
// 		unlock = true;
// 	}, timeout);
// }

// document.addEventListener('keydown', function(e) {
// 	if (e.which === 27) {
// 		const popupActive = document.querySelector('.popup.open');
// 		popupClose(popupActive);
// 	}
// });

// (function() {
  // проверяем поддержку
  // if (!Element.prototype.closest) {
    // реализуем
//     Element.prototype.closest = function(css) {
//       var node = this;
//       while (node) {
//         if (node.matches(css)) return node;
//         else node = node.parentElement;
//       }
//       return null;
//     };
//   }
// })();
// (function() {
  // проверяем поддержку
  // if (!Element.prototype.matches) {

    // определяем свойство
//     Element.prototype.matches = Element.prototype.matchesSelector ||
//       Element.prototype.webkitMatchesSelector ||
//       Element.prototype.mozMatchesSelector ||
//       Element.prototype.msMatchesSelector;
//   }
// })();
// 


// show more - show less

// let i = 0;

// const toggleButton = () => {
// 	if (!i) {
// 		document.querySelector('.info-main__photos_more').style.display = "flex";
// 		document.querySelector('#toggleButton').innerHTML = "Меньше";
// 		document.querySelector('#toggleButton').classList.add('active');

// 		i = 1;
// 	} else {
// 		document.querySelector('.info-main__photos_more').style.display = "none";
// 		document.querySelector('#toggleButton').innerHTML = "Показать больше фото";
// 		document.querySelector('#toggleButton').classList.remove('active');
// 		i = 0;
// 	}
// }

// 

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

	