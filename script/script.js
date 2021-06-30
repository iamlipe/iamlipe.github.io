// SCROLL ANIMATION
window.onload = function () {
	lax.init()

	// Add a driver that we use to control our animations
	lax.addDriver('scrollY', function () {
		return window.scrollY
	})

	// Add animation bindings to elements
	lax.addElements('.animateTraslateYBox', {
		scrollY: {
			translateY: [
				['elInY', 'elCenterY', 'elCenterY',],
				[580, 0, 0],
			]
		},
	})

	lax.addElements('.animateTraslateYTitle', {
		scrollY: {
			translateY: [
				['elInY', 'elCenterY', 'elCenterY',],
				[580, 0, 0],
			]
		},
	})
}

window.addEventListener('scroll', function () {
	// console.log(window.scrollY)
	if (window.scrollY >= 60) {
		document.getElementById('nav').classList.remove('open')
		document.getElementById('nav').classList.add('hidden')
	} else {
		document.getElementById('nav').classList.remove('hidden')
		document.getElementById('nav').classList.add('open')
	}
});

const menu = document.getElementById('menu-burguer')

menu.addEventListener('click', function() {
	// console.log(menu.checked)
	if (menu.checked === true) {
		document.getElementById('content-menu').classList.add('open')
		document.documentElement.style.overflow = 'hidden';
		document.body.scroll = "no"
	} else {
		document.getElementById('content-menu').classList.remove('open')
		document.documentElement.style.overflow = 'auto';
		document.body.scroll = 'yes'
	}
});
