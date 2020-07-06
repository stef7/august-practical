require("./style.scss");

console.debug("a3 start", { process });

(function(window, document){

	// get elements
	const docel = document.documentElement;
	const toggle = document.getElementById('toggle');
	const form = document.getElementById('form');
	const search = document.getElementById('search');
	const results = document.getElementById('results');
	const saved = document.getElementById('saved');

	// get templates
	const resultTemplate = document.getElementById('result-item-template').innerHTML;
	const savedTemplate = document.getElementById('saved-item-template').innerHTML;
	const playTemplate = document.getElementById('play-template').innerHTML;

	// utilities
	const changeView = (view, toggle) => {
		if (toggle && docel.getAttribute('data-view') == view) {
			docel.removeAttribute('data-view');
		}
		else docel.setAttribute('data-view', view);
	};
	const templateLiteral = str => new Function('return `' + str + '`;');

	// set up and handle YT API search fetching
	const populateResults = items => {
		let newHtml = '';
		items.forEach(item => {
			newHtml += (
				new Function('item','return `' + resultTemplate + '`;')
			)(item).trim();
		});
		results.innerHTML = newHtml;
	};
	const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
	const searchParams = searchUrl.searchParams;
	searchParams.set('key', 'AIzaSyA3GH1GMqUhsOsx32ix2wnwYdgAgEDvE1I');
	searchParams.set('type', 'video');
	searchParams.set('part', 'snippet');
	searchParams.set('maxResults', 20);
	let lastQuery;
	let currentResults;
	const fetchSearch = query => {
		if (query == lastQuery) return;
		lastQuery = query;

		searchParams.set('q', query);

		results.innerHTML = '';
		docel.classList.add('search-loading');

		fetch(searchUrl.href).then(r => r.json()).then(data => {

			populateResults(data.items);

			docel.classList.remove('search-loading');
		}).catch(rejectReason => {
			console.error('search request failed:', rejectReason);

			docel.classList.remove('search-loading');
		});
	};

	// display video items
	const display = item => {

	};
	const onItemClick = item => {

	};

	// populate saved items after save/unsave or storage event
	const populateSaved = saved => {

	};

	// attach and handle storage update event
	const onStorageUpdate = storageEv => {

	};
	const attachStorageUpdate = () => {
		window.addEventListener('storage', ev => {
			
			//console.log(JSON.parse(window.localStorage.getItem('sampleList')));
		}, false);
	};

	// attach and handle save click events
	const save = () => {

	};
	const unsave = () => {

	};
	const onSaveUnsaveClick = clickEv => {

	};
	const attachSaveUnsave = () => {
		
	};

	// attach and handle click events for saved list toggle
	const onToggleClick = clickEv => {
		clickEv.preventDefault();

		changeView('saved', true);
		saved.focus();
	};
	const attachToggle = () => {
		toggle.addEventListener('click', onToggleClick, false);
	};

	// attach and handle search input focus + form submit events
	const onSearchFocus = focusEv => {
	};
	const onSearchSubmit = submitEv => {
		submitEv.preventDefault();

		changeView('results');
		results.focus();

		fetchSearch(search.value);
	};
	const attachSearch = () => {
		search.addEventListener('focus', onSearchFocus);
		form.addEventListener('submit', onSearchSubmit);
	};

	// initialise: attach all listeners
	const init = () => {
		attachStorageUpdate();
		attachSaveUnsave();
		attachToggle();
		attachSearch();
		console.debug('a3 init');
	};

	init();

})(window, document);
