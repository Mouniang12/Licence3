var solo = document.getElementsClassName('Solo');
var multijoueur = document.getElementsClassName('Multijoueur');
var multiCheck = document.getElementById('Multijoueur-filter');
var soloCheck = document.getElementById('Solo-filter');

if (soloCheck.unchecked) {
	for (var i = 0; i < solo.length; i++) {
		solo[i].style.display = none;
	}
}

if (multiCheck.unchecked) {
	for (var i = 0; i < multijoueur.length; i++) {
		multijoueur[i].style.display = none;
	}
}