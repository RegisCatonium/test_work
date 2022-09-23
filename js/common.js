document.addEventListener('DOMContentLoaded', function() {

	// кастомный курсор
	let cursor = document.querySelector('#cursor')
	let links = document.querySelectorAll('a, button')

	document.addEventListener('mousemove', (e) => {
		let x = e.clientX
		let y = e.clientY
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

})