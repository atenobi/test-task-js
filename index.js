// main container
const divContainer = document.querySelector('.collapsible');

// little style for container just easier to work
divContainer.style.display = 'flex';
divContainer.style.flexDirection = 'column';
divContainer.style.alignItems = 'center';

// DOM elements
const collapseButtonEl = document.querySelector('.collapsible__button');
const spanButtonElArr = document.querySelectorAll('.collapsible__action');
const textContentPEl = document.querySelector('.collapsible__content');

const spanShowButtonEl = spanButtonElArr[1];
const spanHideButtonEl = spanButtonElArr[0];

// default button text
collapseButtonEl.textContent = spanShowButtonEl.textContent;

// content default visibility
textContentPEl.style.opacity = '0';

// function for change button value / hide content / animate content
const collapseButtonFunction = (e) => {
	e.preventDefault();
	if (e.target.textContent === spanHideButtonEl.textContent) {
		e.target.textContent = spanShowButtonEl.textContent

		textContentPEl.animate([
			{ opacity: '1', },
			{ opacity: '0', },
		], {
			duration: 1000,
			iterations: 1,
			easing: 'ease-in-out',
		}).finished.then(()=>{
				textContentPEl.style.opacity = '0';
			});
	} else {
		e.target.textContent = spanHideButtonEl.textContent

		textContentPEl.animate([
			{ opacity: '0', },
			{ opacity: '1', },
		], {
			duration: 1000,
			iterations: 1,
		}).finished.then(()=> {
			textContentPEl.style.opacity = '1';
		})
	}
}

collapseButtonEl.addEventListener('click', (e) => collapseButtonFunction(e));
