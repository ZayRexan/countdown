let date = document.querySelector('.countdown__date');
let form = document.querySelector('.countdown');
let dateArr;
let recived = {
	year: '',
	month: '',
	day: '',
};

function dateSplit() {
	let dateStr = date.value;
	dateArr = dateStr.split('-');
	recived.year = dateArr[0];
	recived.month = dateArr[1];
	recived.day = dateArr[2];
}

function render() {
	let now = new Date();

	let current = {
		year: now.getFullYear(),
		month: now.getMonth(),
		day: now.getDate(),
	};

	let rest = {
		year: recived.year - current.year,
		month: recived.month - current.month,
		day: recived.day - current.day,
	};
}

form.addEventListener('submit', (event) => {
	dateSplit();
	render();
	event.preventDefault();
});
