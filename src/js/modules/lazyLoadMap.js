const lazyLoadMap = () => {
	const loadMapBlock = document.querySelector('.load-map');
	const windowHeight = document.documentElement.clientHeight;

	window.addEventListener("scroll", lazyScroll);

	function lazyScroll() {
		if (!loadMapBlock.classList.contains('loaded')) {
			getMap();
		}
	}

	function getMap() {
		const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
		if (pageYOffset > loadMapBlockPos - windowHeight) {
			const loadMapUrl = loadMapBlock.dataset.map;
			if (loadMapUrl) {
				loadMapBlock.insertAdjacentHTML(
					"beforeend",
					`<iframe src="${loadMapUrl}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
				);
				loadMapBlock.classList.add('loaded');
			}
		}
	}
};
export default lazyLoadMap;