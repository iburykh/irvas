const popup = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
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
};
export default popup;