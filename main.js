let date = document.querySelector('.countdown__date');
let form = document.querySelector('.countdown');
let output = {
	year: document.querySelector('.countdown__year'),
	day: document.querySelector('.countdown__month'),
	hour: document.querySelector('.countdown__day'),
};
let dateArr;
let recived;

let rest;

function dateSplit() {
	let dateStr = date.value;
	recived = moment(dateStr);
}

function calculations() {
	let now = moment();

	rest = {
		years: recived.diff(now, 'years'),
		days: recived.diff(now, 'days'),
		hours: recived.diff(now, 'hours'),
	};

	console.log(rest.years);
	console.log(rest.days);
	console.log(rest.hours);

	if (rest.days >= 365) {
		rest.days = Math.round(rest.days % 365);
	}
	if (rest.hours >= 24) {
		rest.hours = Math.round(rest.hours % 24);
	}
}

function render() {
	if (rest.years <= 0 && rest.days <= 0 && rest.hours <= 0) {
		alert('Прошлое уже не вернуть...');
	}
	if (rest.years > 0) {
		output.year.innerText = `${rest.years} лет`;
	} else {
		output.year.innerText = '';
	}
	if (rest.days > 0) {
		output.day.innerText = `${rest.days} дней`;
	} else {
		output.day.innerText = '';
	}
	if (rest.hours > 0) {
		output.hour.innerText = `${rest.hours} часов`;
	} else {
		output.hour.innerText = '';
	}
}

form.addEventListener('submit', (event) => {
	dateSplit();
	calculations();
	render();
	event.preventDefault();
});
