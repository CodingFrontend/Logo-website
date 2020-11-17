let menuParents = document.querySelectorAll('.menu-page__parent');

for (let i = 0; i < menuParents.length; i++) {
	const menuParent = menuParents[i];

	menuParent.addEventListener('mouseenter', function(e) {
		menuParent.classList.add('_active');
	});
	menuParent.addEventListener('mouseleave', function(e) {
		menuParent.classList.remove('_active');
	});
}

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');

menuPageBurger.addEventListener('click', function(e) {
	this.classList.toggle('_active');
	_slideToggle(menuPageBody);
});

let searchPageSelect = document.querySelector('.search-page__select');
let categoriesSearch = document.querySelector('.categories-search');

searchPageSelect.addEventListener('click', function(e) {
	this.classList.toggle('_active');
	categoriesSearch.classList.toggle('_active');
	_slideToggle(categoriesSearch);
});
