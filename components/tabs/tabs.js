let tabList = document.querySelectorAll('.tabs');

if (tabList) {
	tabList.forEach((tab) => {
		let tabsItems = tab.querySelectorAll('.tabs__item');
		let tabsBlocks = tab.querySelectorAll('.tabs__block');

		tabsItems.forEach((item, number) => {
			item.addEventListener('click', (e) => {
				tabsItems.forEach((link) => {
					if (link.classList.contains('_active-tabs_item')) {
						link.classList.remove('_active-tabs_item');
					}
				});
				tabsBlocks.forEach((block) => {
					if (block.classList.contains('_active-tabs_block')) {
						block.classList.remove('_active-tabs_block');
					}
				});
				e.preventDefault();
				tabsBlocks[number].classList.add('_active-tabs_block');
				e.target.classList.add('_active-tabs_item');
			});
		});
	});
}
