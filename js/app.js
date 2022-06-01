// show rigth navbar
const navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () => {
	navbar.classList.toggle('active');
};

// hidden rigth navbar
document.querySelector('#close').onclick = () => {
	navbar.classList.toggle('active');
};

// window scroll
Window.oncroll = () => {
	navbar.classList.toggle('active');
	if (window.onscroll > 100) {
		document.querySelector('header').classList.add('active');
	} else {
		document.querySelector('header').classList.remove('active');
	}
};

// change images
document.querySelectorAll('.small-image-1').forEach(e => {
	e.onclick = () => {
		document.querySelector('.big-image-1').src = e.getAttribute('src');
	};
});
document.querySelectorAll('.small-image-2').forEach(e => {
	e.onclick = () => {
		document.querySelector('.big-image-2').src = e.getAttribute('src');
	};
});
document.querySelectorAll('.small-image-3').forEach(e => {
	e.onclick = () => {
		document.querySelector('.big-image-3').src = e.getAttribute('src');
	};
});

//countdown date
let countDate = new Date('aug, 2022 00:00:00').getTime();

function countDown() {
	let now = new Date().getTime();
	gap = now - countDate;

	let seconds = 1000;
	let minutes = seconds * 60;
	let hours = minutes * 60;
	let day = hours * 24;

	let d = Math.floor(gap / day);
	let h = Math.floor((gap % day) / hours);
	let m = Math.floor((gap % hours) / minutes);
	let s = Math.floor((gap % minutes) / seconds);

	document.getElementById('days').innerText = d;
	document.getElementById('hours').innerText = h;
	document.getElementById('minutes').innerText = m;
	document.getElementById('seconds').innerText = s;
}

setInterval(function () {
	console.log(countDown());
}, 1000);

// theme shiwt dark mode
let themeToggle = document.querySelector('#theme-toggle');

themeToggle.onclick = () => {
	themeToggle.classList.toggle('bxs-sun');
	if (themeToggle.classList.contains('bxs-sun')) {
		document.querySelector('body').classList.add('active');
	} else {
		document.querySelector('body').classList.remove('active');
	}
};

// swiper slider products
var swiper = new Swiper('.product-slider', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 10,

	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	breakpoints: {
		0: {
			slidesPerView: 1
		},
		550: {
			slidesPerView: 2
		},
		800: {
			slidesPerView: 3
		},
		1000: {
			slidesPerView: 3
		}
	}
});

// swiper slider review
var swiper = new Swiper('.review-slider', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 10,

	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},

	breakpoints: {
		0: {
			slidesPerView: 1
		},
		550: {
			slidesPerView: 2
		},
		800: {
			slidesPerView: 3
		},
		1000: {
			slidesPerView: 3
		}
	}
});
