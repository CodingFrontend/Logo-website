let menuParents = document.querySelectorAll('.menu-page__parent');

for (let i = 0; i < menuParents.length; i++) {
	const menuParent = menuParents[i];

	menuParent.addEventListener('mouseenter', function(e) {
		menuParent.classList.add('_active');
	});
}
