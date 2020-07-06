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
	const play = document.getElementById('play');

	// templating
	const escHtml = (str => str ? str
		.replace(/&/g, '&amp;')
		.replace(/>/g, '&gt;')
		.replace(/</g, '&lt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/`/g, '&#96;') : str).toString();
	const tmplLiteral = tmpl => {
		const tidy = tmpl.trim()
			.replace(/\>(\s+\n\s*|\s*\n\s+)\</g, '><')
			.replace(/\s*\n\s*/g, ' ');
		//console.debug(tidy);
		return new Function('o', `const e = ${escHtml}; return \`${tidy}\`;`);
	};
	const getTmplAndRemove = id => {
		const el = document.getElementById(id);
		const tmpl = el.innerHTML;
		el.remove();
		return tmpl;
	};
	const resultTmpl = getTmplAndRemove('result-tmpl');
	const savedTmpl = getTmplAndRemove('saved-tmpl');
	const playTmpl = getTmplAndRemove('play-tmpl');

	// view utilities
	const changeView = (view, toggle) => {
		if (toggle && docel.getAttribute('data-view') == view) {
			docel.removeAttribute('data-view');
		}
		else docel.setAttribute('data-view', view);
	};

	// populate search results
	const resultsInit = results.innerHTML;
	const populateResults = items => {
		let newHtml = '';
		items.forEach(item => {
			newHtml += tmplLiteral(resultTmpl)(item).trim();
		});
		results.innerHTML = newHtml;
	};

	// set up YT API search request
	
	const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
	const searchParams = searchUrl.searchParams;
	searchParams.set('key', 'AIzaSyA3GH1GMqUhsOsx32ix2wnwYdgAgEDvE1I');
	searchParams.set('type', 'video');
	searchParams.set('part', 'snippet');
	searchParams.set('maxResults', 6);

	let lastQuery;
	let controller;

	const fakeLoadAnim = () => {
		docel.classList.add('search-loading');
		setTimeout(() => docel.classList.remove('search-loading'), 100);
	};

	const fetchSearch = query => {
		if (query == lastQuery) return fakeLoadAnim();
		lastQuery = query;

		if (!query) {
			results.innerHTML = resultsInit;
			return fakeLoadAnim();
		}

		if (controller) controller.abort();
		controller = new AbortController();

		searchParams.set('q', query);

		results.innerHTML = '';
		docel.classList.add('search-loading');

		fetch(searchUrl.href, {
			signal: controller.signal
		}).then(r => r.json()).then(data => {
			if (data.items) populateResults(data.items);
			else if (data.error) {
				results.innerHTML = `<li><b>Error:</b> ${data.error.message}</li>`;
			}
			
			//results.focus();

			controller = null;
			docel.classList.remove('search-loading');
		}).catch(err => {
			console.error('search request failed:', err);

			controller = null;
			docel.classList.remove('search-loading');
		});
	};

	// display video items
	const playInit = play.innerHTML;
	const display = item => {

	};
	const onItemClick = item => {

	};

	// populate saved items after save/unsave or storage event
	const savedInit = saved.innerHTML;
	const populateSaved = items => {

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
		//saved.focus();
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
		//results.focus();

		fetchSearch(search.value);
	};
	const attachSearch = () => {
		search.addEventListener('focus', onSearchFocus);
		form.addEventListener('submit', onSearchSubmit);
	};

	const test = () => {
		window.addEventListener('click', () => {
			saved.innerHTML = tmplLiteral(savedTmpl)({
				id: {
					videoId: 'M7lc1UVf-VE'
				},
				snippet: {
					title: 'Title title title title title title title title title title title title',
					channelTitle: 'channelTitle'
				}
			});
			if (play.getAttribute('data-id') !== 'M7lc1UVf-VE') {
				play.setAttribute('data-id', 'M7lc1UVf-VE');
				play.innerHTML = tmplLiteral(playTmpl)({
					id: 'M7lc1UVf-VE',
					snippet: {
						title: 'Title title title title title title title title title title title title',
						channelTitle: 'channelTitle'
					}
				});
			}
		}, false);
		document.querySelector('header').click();
	};

	// initialise: attach all listeners
	const init = () => {
		attachStorageUpdate();
		attachSaveUnsave();
		attachToggle();
		attachSearch();
		test();
		console.debug('a3 init');
	};

	init();

})(window, document);
