// triggerSelector - кнопка открытия модального окна
// modalSelector - модальное окно, которое открывается при нажатии на кнопку
// closeSelector - крестик, закрывающий окно
// time (в функции showModalByTime) - время, через которое появится окно
// data-modal - добавить всем модальным окнам (если их несколько)
// lock - добавить этот класс для блоков с position: absolute или fixed (добавится padding)
// small - добавить этот класс для маленьких блоков с position: absolute или fixed (добавится margin)
// gallery=false - атрибут true для окна с галереей

const popupGallery = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, gallery=false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              wrapper = document.querySelector('.works-gallery__wrapper'),
              popupImg = document.querySelector('.works-gallery__image'),
              scroll = calcScroll();
        let modalOpen = false;
        let lastFocus;

        trigger.forEach(function(item) {
            item.addEventListener('click', function(e) {
                let target = e.target
                if (target) {
                    e.preventDefault();
                }
                modalOpen = true;
                windows.forEach(item => {
                    item.classList.remove('active');
                });
    
                modal.classList.add('active');
                document.body.classList.add('scroll-lock');
                document.body.style.paddingRight = `${scroll}px`;

				if (gallery) {
					let webp = item.querySelector('source').getAttribute('srcset');
					let img = item.querySelector('img').getAttribute('src');
					let webpMin = webp.substring(14); //  обрезаются 14 знаков от начала строки (1.webp)
					let imgMin = img.substring(14);
					popupImg.innerHTML = `
					<picture>
						<source srcset="img/our_works/big_img/${webpMin}" type="image/webp">
						<img src="img/our_works/big_img/${imgMin}" alt="фото остекления и отделки балкона">
					</picture>
					`;	
				}

                lastFocus = document.activeElement;
                modal.setAttribute('tabindex', '0');
                modal.focus();
                focusRestrict();
            });
        });

        function popapClose() {
            modalOpen = false;

            windows.forEach(item => {
                item.classList.remove('active');
            });

            modal.classList.remove('active');
            document.body.classList.remove('scroll-lock');
            document.body.style.paddingRight = `0px`;

            modal.setAttribute('tabindex', '-1');
            lastFocus.focus();
        }

        close.addEventListener('click', () => {
            popapClose();
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                popapClose(); 
            }
        });

        // вложенные блоки в модальном окне
        wrapper.addEventListener('click', (e) => {
            if (e.target == wrapper) {
                popapClose(); 
            }
        });

        popupImg.addEventListener('click', (e) => {
            if (e.target == popupImg) {
                popapClose(); 
            }
        });


        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modalOpen) {
                popapClose();
            }
        });
  
        function calcScroll() {
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
        

        function focusRestrict() {
            document.addEventListener('focus', function(event) {
                if (modalOpen && !modal.contains(event.target)) {
                    event.stopPropagation();
                    modal.focus();
                }
            }, true);
        }

    };

    bindModal('.header__btn', '.popup', '.popup__close');
	bindModal('.works__link', '.works-gallery', '.works-gallery__close', true);
    bindModal('.content-item__btn', '.popup-calc', '.popup-calc .popup-calc__close');
    bindModal('.popup-calc .popup-calc__btn', '.popup-calc-profile', '.popup-calc-profile .popup-calc__close');
    bindModal('.popup-calc-profile .popup-calc__btn', '.popup-form', '.popup-form .popup__close');
};
export default popupGallery;