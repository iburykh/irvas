const form = (state) => {
	const forms = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('input');

	//==============Настройка отправки формы===================
	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data
		});	
		return await res.text();
	};
	//=========================================================
	const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

	if (forms.length > 0) {
		forms.forEach(item => {
			item.addEventListener('submit', (e) => {
				e.preventDefault();
				let formReq = item.querySelectorAll('.req');
				formRemoveError(formReq);
				let error = formValidate(formReq);
				if (error === 0) {
					//=========FormData=====================================
					const formData = new FormData(item);
					if (item.getAttribute('data-calc') === "end") {
						for (let key in state) {
							formData.append(key, state[key]);
						}
					}
					//======================================================
					postData('../server.php', formData)
					.finally(() => {
						clearInputs();
					});
				}
			});
		});
	}

	// Валидация формы
		
	function formValidate(selector) {
		let error = 0;
		if (selector.length > 0) {
			for (let index = 0; index < selector.length; index++) {
				const input = selector[index];
				let placeholder = input.getAttribute('placeholder');
				if (input.classList.contains('email')) {
					if (emailTest(input) || input.value == placeholder) {
						formAddError(input);
						error++;
					}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
				} else {
					if (input.value == '' || input.value == placeholder) {
						formAddError(input);
						error++;
					}
				}
			}
		}
		return error;
	}

	function formAddError(item) {
		item.parentElement.classList.add('error');
		item.classList.add('error');
	}
	function formRemoveError(selector) {
		if (selector.length > 0) {
			for (let index = 0; index < selector.length; index++) {
				const input = selector[index];
				input.parentElement.classList.remove('error');
				input.classList.remove('error');
			}
		}
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
}
export default form;