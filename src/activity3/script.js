require("./style.scss");

const testing = {
	//error: { error: { message: 'Here is some error message' } },
	//data: require('./testdata.json'),
};

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
	const goback = document.getElementById('goback');

	// templating
	const escHtml = str => str ? str
		.replace(/&/g, '&amp;')
		.replace(/>/g, '&gt;')
		.replace(/</g, '&lt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/`/g, '&#96;') : str;
	const tmplLiteral = tmpl => new Function('o', `const e = ${escHtml}; return \`${tmpl}\`;`);
	const getTemplateAndRemove = templateId => {
		const templateElem = document.getElementById(templateId);
		const templateString = templateElem.innerHTML;
		templateElem.remove();
		return templateString;
	};
	results._template = getTemplateAndRemove('result-tmpl');
	saved._template = getTemplateAndRemove('saved-tmpl');
	play._srcTemplate = getTemplateAndRemove('play-src-tmpl');
	play._template = getTemplateAndRemove('play-tmpl');

	// utilities:
	// format items from yt to friendlier format
	const formatItem = item => {
		return {
			id: item.id.videoId,
			title: item.snippet.title,
			channel: item.snippet.channelTitle,
			img: item.snippet.thumbnails.medium.url
		}
	};
	// data caching util
	const dataCache = {};
	const cacheItems = items => items.forEach(item => dataCache[item.id] = item);
	// current video item
	let currentVideo;

	// make it more obvious the app is doing something
	const fakeLoadAnim = () => {
		docel.classList.add('search-loading');
		setTimeout(() => docel.classList.remove('search-loading'), 100);
	};

	// back button (and remove hidden video on mobile)
	play._initialHTML = play.innerHTML;
	const onBackClick = () => {
		docel.classList.remove('player-open');
	};
	const attachBackClick = () => {
		goback.addEventListener('click', onBackClick, false);
	};

	// play video items
	let iframe;
	const playItem = item => {
		if (iframe) {
			iframe.src = tmplLiteral(play._srcTemplate)(item);
		} else {
			play.innerHTML = tmplLiteral(play._template)({
				...item,
				src: tmplLiteral(play._srcTemplate)(item)
			});
			iframe = play.children[0];
		}
		currentVideo = item;
	};
	const onItemClick = clickEv => {
		const btn = clickEv.currentTarget;
		const item = btn._item;
		
		if (currentVideo !== item) playItem(item);

		docel.classList.add('player-open');
	};
	const attachItemClick = btn => {
		btn.addEventListener('click', onItemClick, false);
	};

	// storage setup and utils
	let savedData = {};
	let savedIdsRgx;
	const getSavedIdsRgx = () => {
		const ids = savedData.items.map(i => i.id);
		return savedIdsRgx = new RegExp('^(' + ids.join('|') + ')$');
	};
	const isIdSaved = id => savedIdsRgx.test(id);
	const setSavedData = () => {
		const newSavedStr = JSON.stringify(savedData.items);
		if (savedData.str !== newSavedStr) {
			savedData.str = newSavedStr;
			localStorage.setItem('saved', newSavedStr);
			
			getSavedIdsRgx();

			return true;
		}
		return false;
	};
	const getSavedData = () => {
		const newSavedStr = localStorage.getItem('saved');
		// return true if string value is diff, else don't
		if (savedData.str !== newSavedStr) {
			savedData.str = newSavedStr;
			savedData.items = newSavedStr ? (JSON.parse(newSavedStr) || []) : [];

			getSavedIdsRgx();
			cacheItems(savedData.items);

			return true;
		}
		return false;
	};

	// attach and handle storage update event
	const loadStorage = () => {
		getSavedData();
		populateItems(saved, savedData.items);
	};
	const onStorageUpdate = () => {
		if (getSavedData()) {
			populateItems(saved, savedData.items);
			updateAllSaveButtons();
		}
	};
	const attachStorageUpdate = () => {
		window.addEventListener('storage', onStorageUpdate, false);
	};

	// attach and handle save click events
	const saveId = id => {
		savedData.items.unshift(dataCache[id]);
		setSavedData();
		populateItems(saved, savedData.items);
	};
	const unsaveId = id => {
		const itemIndex = savedData.items.indexOf(dataCache[id]);
		savedData.items.splice(itemIndex, 1);
		setSavedData();
		populateItems(saved, savedData.items);
	};
	const updateSaveButton = (btn, isSaved) => {
		if (typeof isSaved === 'boolean' ? isSaved : isIdSaved(btn._item.id)) {
			btn.classList.add('saved');
			btn.title = btn.title.replace(/^Save/, 'Unsave');
		} else {
			btn.classList.remove('saved');
			btn.title = btn.title.replace(/^Unsave/, 'Save');
		}
	};
	const updateAllSaveButtons = (id, isSaved, context = document) => {
		let btns = [...context.getElementsByClassName('save-video')];
		if (id) btns = btns.filter(btn => btn._item.id === id);
		btns.forEach(btn => updateSaveButton(btn, isSaved));
	};
	const onSaveUnsaveClick = clickEv => {
		const btn = clickEv.currentTarget;
		const id = btn._item.id;
		
		let isSaved = isIdSaved(id);

		if (isSaved) unsaveId(id);
		else saveId(id);

		updateAllSaveButtons(id, !isSaved);
	};
	const attachSaveClick = btn => {
		btn.addEventListener('click', onSaveUnsaveClick, false);
	};

	// populate items (search results or saved), save initial content for when no items
	results._initialHTML = results.innerHTML;
	saved._initialHTML = saved.innerHTML;
	const populateItems = (context, items) => {
		if (!items || !items.length) {
			context.innerHTML = context._initialHTML;
			return;
		}

		context.innerHTML = items.map(item => tmplLiteral(context._template)(item)).join('');

		[...context.children].forEach(li => {
			const id = li.getAttribute('data-id');

			const playbtn = li.getElementsByClassName('play-video')[0];
			playbtn._item = dataCache[id];
			attachItemClick(playbtn);

			const savebtn = li.getElementsByClassName('save-video')[0];
			savebtn._item = dataCache[id];
			attachSaveClick(savebtn);
			updateSaveButton(savebtn);
		});
	};

	// set up YT API search request
	const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
	const searchParams = searchUrl.searchParams;
	searchParams.set('key', 'AIzaSyByKVyGVMgrBeyANVC-gXcYujHPCeb1sTc');
	searchParams.set('type', 'video');
	searchParams.set('part', 'snippet');
	searchParams.set('maxResults', 25);
	let lastQuery;
	let controller;
	const withJson = data => {
		if (data.items) {
			const formattedItems = data.items.map(item => formatItem(item));
			cacheItems(formattedItems);
			results.scrollTop = 0;
			populateItems(results, formattedItems);
		}
		else if (data.error) {
			console.error('search request failed:', data.error);

			window._useTestData = () => withJson(testing.data || require('./testdata.json'));
			results.innerHTML = `
				<li>Error: ${data.error.message}</li>
				<li><a href="javascript:window._useTestData();">Use test data</a></li>
			`;
		}
		controller = null;
		docel.classList.remove('search-loading');
	};
	const fetchSearch = query => {
		if (query == lastQuery) return fakeLoadAnim();
		lastQuery = query;

		if (!query || !query.trim()) {
			results.innerHTML = results._initialHTML;
			return fakeLoadAnim();
		}

		if (controller) controller.abort();
		controller = new AbortController();

		searchParams.set('q', query);

		docel.classList.add('search-loading');
		
		if (typeof testing.error === 'object') {
			console.warn('using testError instead of API call/response:', testing.error);
			withJson(testing.error);
		}
		else if (typeof testing.data === 'object') {
			console.warn('using testData instead of API call/response:', testing.data);
			withJson(testing.data);
		} else {
			fetch(searchUrl.href, {
				signal: controller.signal
			}).then(r => r.json()).then(withJson).catch(err => {
				console.error('search request failed:', err);
			
				window._useTestData = () => withJson(testing.data || require('./testdata.json'));
				results.innerHTML = `
					<li>Error: ${(err && err.message) || err}</li>
					<li><a href="javascript:window._useTestData();">Use test data</a></li>
				`;
	
				controller = null;
				docel.classList.remove('search-loading');
			});
		}
	};

	// attach and handle click events for saved list toggle
	const onToggleClick = clickEv => {
		clickEv.preventDefault();

		docel.classList.toggle('saved-open');
	};
	const attachToggle = () => {
		toggle.addEventListener('click', onToggleClick, false);
	};

	// attach and handle search input focus + form submit events
	const onSearchSubmit = submitEv => {
		if (submitEv) submitEv.preventDefault();

		docel.classList.remove('saved-open');
		docel.classList.remove('player-open');

		fetchSearch(search.value);

		return false;
	};
	const attachSearch = () => {
		form.addEventListener('submit', onSearchSubmit, true);
	};

	// initialise: attach all listeners
	const init = () => {
		attachStorageUpdate();
		attachToggle();
		attachBackClick();
		attachSearch();
		loadStorage();
		console.debug('a3 init');
	};

	init();

})(window, document);
