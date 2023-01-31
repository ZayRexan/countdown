import moment from 'moment';

let date = document.querySelector('.countdown__date');
let form = document.querySelector('.countdown');
let output = {
	year: document.querySelector('.countdown__year'),
	day: document.querySelector('.countdown__month'),
	hour: document.querySelector('.countdown__day'),
};
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

	let nowYear = now.year();
	let recivedYear = recived.year();
	let leapYears = 0;

	for (year = nowYear; year <= recivedYear; year++) {
		if (moment([year]).isLeapYear()) {
			leapYears++;
		}
	}

	if (rest.days >= 365) {
		rest.days = Math.round((rest.days - leapYears) % 365);
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
		output.year.classList.add('visible');
	} else {
		output.year.innerText = '';
		output.year.classList.remove('visible');
	}
	if (rest.days > 0) {
		output.day.innerText = `${rest.days} дней`;
		output.day.classList.add('visible');
	} else {
		output.day.innerText = '';
		output.day.classList.remove('visible');
	}
	if (rest.hours > 0) {
		output.hour.innerText = `${rest.hours} часов`;
		output.hour.classList.add('visible');
	} else {
		output.hour.innerText = '';
		output.hour.classList.remove('visible');
	}
}

form.addEventListener('submit', (event) => {
	dateSplit();
	calculations();
	render();
	event.preventDefault();
});
