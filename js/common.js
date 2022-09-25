document.addEventListener('DOMContentLoaded', function() {

	// кастомный курсор
	let cursor = document.querySelector('#cursor')
	let body = document.querySelector('body')
	let links = document.querySelectorAll('a, button')
	let x, y

	document.addEventListener('mousemove', (e) => {
		x = e.clientX
		y = e.clientY
		cursor.style.left = x + 'px'
		cursor.style.top = y + 'px'
	})

	links.forEach((item) =>{
		item.addEventListener('mouseover', () => {
			cursor.classList.add('active')
		})
		item.addEventListener('mouseout', () => {
			cursor.classList.remove('active')
		})
	})
	
	body.addEventListener('mousemove', () => {
      cursor.classList.remove('hidden')
   })
   body.addEventListener('mouseout', () => {
		cursor.classList.add('hidden')
	})
	//--

	// анимация при скролле
	let container = document.querySelector('.container')
	let case1 = document.querySelector('#case1')
	let case2 = document.querySelector('#case2')
	let card = document.querySelectorAll('.card')

	container.addEventListener('scroll', function() {
		if (inViewport(case2)) {
			container.classList.remove('container-case1')
			container.classList.add('container-case2')
			card[1].classList.add('show')
			card[0].classList.remove('show')
			return
		}
		if (inViewport(case1)) {
			container.classList.remove('container-case2')
			container.classList.add('container-case1')
			card[0].classList.add('show')
			card[1].classList.remove('show')
			return
		}
	})
	function inViewport(el) {
		let bounds = el.getBoundingClientRect()
		return ((bounds.left + bounds.width > 0) && // правее левой
				 (window.innerWidth - bounds.left > 0)) // левее правой
	}
//--

// движение кругов
	let circles = document.querySelectorAll('.circle')

	circles.forEach((item) => {
		// притягивание курсором кругов
		item.addEventListener('mousemove', (e) => {
			let coord = item.getBoundingClientRect()
			let left = coord.left
			let top = coord.top
			let width = left + coord.width
			let height = top + coord.height
			let centrX = left + coord.width/2
			let centrY = top + coord.height/2

			if ((Math.abs(x - centrX) <= width) && (Math.abs( y - centrY) <= height)) {
				item.style.transform = `translate(${x-centrX}px, ${y-centrY}px)`
			}
		})
		// возвращение круга на место
		item.addEventListener('mouseout', () => {
			item.style.transform = `translate(0, 0)`
		})
	})
	// --

})