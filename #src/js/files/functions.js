
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
