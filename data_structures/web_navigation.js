import { Stack } from './stack.js';

const backPages = new Stack();
const nextPages = new Stack();

let currentPage = 'test.com';

// Helper Functions
showCurrentPage = action => {
	console.log(`\n${action}`);
	console.log(`Current page = ${currentPage}`);
	console.log('Back page = ', backPages.peek());
	console.log('Next page = ', nextPages.peek());
};

newPage = page => {
	backPages.push(currentPage);
	currentPage = page;
	while (!nextPages.isEmpty()) {
		nextPages.pop();
	}
	showCurrentPage('NEW: ');
};

backPage = () => {
	nextPages.push(currentPage);
	currentPage = backPages.pop();
	showCurrentPage('BACK: ');
};

nextPage = () => {
	backPages.push(currentPage);
	currentPage = nextPages.pop();
	showCurrentPage('NEXT: ');
};
// ------------------------------

const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';

let finish = false;
let showBack = false;
let showNext = false;

showCurrentPage('DEFAULT: ');

while (finish === false) {
	let instructions = baseInfo;
	if (backPages.peek() != null) {
		instructions = `${instructions}, ${backInfo}`;
		showBack = true;
	} else {
		showBack = false;
	}
	if (nextPages.peek() != null) {
		instructions = `${instructions}, ${nextInfo}`;
		showNext = true;
	} else {
		showNext = false;
	}
	instructions = `${instructions}, ${quitInfo}.`;
	console.log(instructions);
}
