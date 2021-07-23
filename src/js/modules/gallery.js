const gallery = () => {
	let imageItems = document.querySelectorAll('.works__link');
	let imageBig =document.querySelectorAll('.works-gallery');
	let closeImage = document.querySelectorAll('.works-gallery__close');
	let imageOpen = false;
	scroll = calcScrollGallery();
	let lastFocus;

	for (let index = 0; index < imageItems.length; index++) {
		let imageItem = imageItems[index];
		imageItem.addEventListener("click", function (e) {
			e.preventDefault();
			imageBig[index].classList.add('active');
			document.body.classList.add('scroll-lock');
			document.body.style.paddingRight = `${scroll}px`;
			imageOpen = true;
			lastFocus = document.activeElement;
			imageBig[index].setAttribute('tabindex', '0');
			imageBig[index].focus();
		});
	}

	
	closeImage.forEach(item => {
		item.addEventListener('click', () => {
			galleryClose();
		});
	});


	imageBig.forEach(item => {
		item.addEventListener('click', (e) => {
			let images = item.querySelectorAll('img');
			images.forEach(image => {
				if (imageOpen && e.target !== image) {
					galleryClose(); 
				}
			});
		});
	});
	
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && imageOpen) {
			galleryClose();
		}
	});

	function galleryClose() {
		imageOpen = false;

		imageBig.forEach(item => {
			item.classList.remove('active');
			item.setAttribute('tabindex', '-1');
		});
		document.body.classList.remove('scroll-lock');
		document.body.style.paddingRight = `0px`;

		lastFocus.focus();
	}
	  
	function calcScrollGallery() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	}

};
export default gallery;