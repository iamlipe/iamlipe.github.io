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

// OPEN MENU
const menu = document.getElementById('menu-burguer')

menu.addEventListener('click', function() {
	const element = document.getElementById('content-menu')
	if (element.classList.contains('open')) {
		element.classList.remove('open')
	} else {
		element.classList.add('open')
	}
})