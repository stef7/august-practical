require("./style.scss");

console.debug("a2 start", { process });

(function(window, document){

	const attachNavToggle = function(){
		const toggles = [...document.getElementsByClassName('nav-toggle')];
		toggles.forEach(toggle => {
			toggle.addEventListener('click', () => {
				document.documentElement.classList.toggle('nav-open');
			});
		});
	};

	const onReady = function(callback) {
		document.addEventListener('DOMContentLoaded', callback);
	};

	const attachOnReady = function() {
		onReady(function(){
			attachNavToggle();
		});
	};

	const init = function() {
		attachOnReady();
		console.debug('a2 init');
	};

	init();

})(window, document);
