const tabs = () => {
	let tabs = document.querySelectorAll(".tabs");
	for (let index = 0; index < tabs.length; index++) {
		let tab = tabs[index];
		let tabs_items = tab.querySelectorAll(".tabs-item");
		let tabs_blocks = tab.querySelectorAll(".tabs-block");
		for (let index = 0; index < tabs_items.length; index++) {
			let tabs_item = tabs_items[index];
			tabs_item.addEventListener("click", function (e) {
				e.preventDefault();
				for (let index = 0; index < tabs_items.length; index++) {
					let tabs_item = tabs_items[index];
					tabs_item.classList.remove('active');
					tabs_blocks[index].classList.remove('active');
				}
				tabs_item.classList.add('active');
				tabs_blocks[index].classList.add('active');
			});
		}
	}
};
export default tabs;