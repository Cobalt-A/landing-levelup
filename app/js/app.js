// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	const timer = document.querySelector('.timer')

	let countdown = 30 * 60 * 1000;

	let timerId = setInterval(function(){
		countdown -= 1000;
		let hours = Math.floor(countdown / (60 * 60 * 1000));
		let min = Math.floor(countdown / (60 * 1000));
		let sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

		if (`${hours}`.length <= 1) hours = `0${hours}`
		if (`${min}`.length <= 1) min = `0${min}`
		if (`${sec}`.length <= 1) sec = `0${sec}`
		
		let result = hours + ":" + min + ":" + sec
		timer.innerHTML = result

	}, 1000); //1000ms. = 1sec.



	document.addEventListener('click', function(event) {

		if (event.target.closest('.offer-button')) {
			document.getElementById("order").scrollIntoView({behavior: "smooth"})
		}

	})

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},

		// Default parameters
		slidesPerView: 1,
		spaceBetween: 10,
		// Responsive breakpoints
		breakpoints: {
		  // when window width is >= 480px
		  480: {
			slidesPerView: 1,
			spaceBetween: 20
		  },
		  // when window width is >= 640px
		  640: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  992: {
			slidesPerView: 3,
			spaceBetween: 20
		  }
		}
	});

})
