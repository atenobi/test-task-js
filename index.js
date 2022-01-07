// main container
const divContainer = document.getElementsByClassName('collapsible').item(0);

// little style for container just for easier read
divContainer.style.display = 'flex';
divContainer.style.flexDirection = 'column';
divContainer.style.alignItems = 'center';

// DOM elements
const collapseButtonEl = document.getElementsByTagName('button').item(0);
const spanShowButtonEl = document.getElementsByClassName('collapsible__action').item(1);
const spanHideButtonEl = document.getElementsByClassName('collapsible__action').item(0);
const textContentPEl = document.getElementsByClassName('collapsible__content').item(0);

// default button text
collapseButtonEl.textContent = spanShowButtonEl.textContent;

// content default visibility
textContentPEl.style.visibility = 'hidden';

// function for change button value and hide content
const collapseButtonFunction = (e) => {
	e.preventDefault();
	if(e.target.textContent === spanHideButtonEl.textContent) {
		e.target.textContent = spanShowButtonEl.textContent
		textContentPEl.style.visibility = 'hidden';
	} else {
		e.target.textContent = spanHideButtonEl.textContent
		textContentPEl.style.visibility = 'visible';
	}
}

collapseButtonEl.addEventListener('click', (e) => collapseButtonFunction(e));
