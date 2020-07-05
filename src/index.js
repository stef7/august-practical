require("./styles.scss");

(function(window, document){

	const attachNavToggle = function(){
		const burgers = [...document.getElementsByClassName("navbar-burger")];
		burgers.forEach(burger => {
			const target = document.getElementById(burger.getAttribute('data-target'));
			burger.addEventListener("click", () => {
				burger.classList.toggle("is-active");
				target.classList.toggle("is-active");
			});
		});
	};

	const onReady = function(callback) {
		document.addEventListener("DOMContentLoaded", callback);
	};

	const attachOnReady = function() {
		onReady(function(){
			attachNavToggle();
		});
	};

	const init = function() {
		attachOnReady();
		console.debug('init?');
	};

	init();

})(window, document);
