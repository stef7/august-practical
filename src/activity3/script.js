require("./index.html");
require("./style.scss");

console.debug("a3 start", { process });

(function(window, document){

	const toggle = document.getElementById('toggle');
	const form = document.getElementById('form');
	const search = document.getElementById('search');
	const results = document.getElementById('results');
	const saved = document.getElementById('saved');

	const searchPromise = keywords => {
		return fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyA3GH1GMqUhsOsx32ix2wnwYdgAgEDvE1I');
	};
	const handlePromise = promise => {

	};
	const populateResults = results => {

	};
	const populateSaved = saved => {

	};

	const display = item => {

	};
	const onItemClick = item => {

	};

	const onStorageUpdate = storageEv => {

	};
	const attachStorageUpdate = () => {
		window.addEventListener('storage', ev => {
			
			//console.log(JSON.parse(window.localStorage.getItem('sampleList')));
		}, false);
	};
	const save = () => {

	};
	const unsave = () => {

	};
	const onSaveUnsaveClick = clickEv => {

	};
	const attachSaveUnsave = () => {
		toggle.addEventListener('click', ev => {
			
		}, false);
	};

	const onToggleClick = clickEv => {

	};
	const attachToggle = () => {
		toggle.addEventListener('click', ev => {

		}, false);
	};

	const onSearchFocus = focusEv => {

	};
	const onSearchInput = inputEv => {

	};
	const attachSearch = () => {
		
	};

	const attachListeners = () => {
		attachStorageUpdate();
		attachSaveUnsave();
		attachToggle();
		attachSearch();
	};

	const init = () => {
		console.debug('a3 init');
	};

	init();

})(window, document);
