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


	// движение кругов (не работает)
	// let circles = document.querySelectorAll('.circle')

	// circles.forEach((item) => {
	// 	let lf = window.getComputedStyle(item).left
	// 	let tp = window.getComputedStyle(item).top
	// 	// let r = window.getComputedStyle(item).width

	// 	let coord = item.getBoundingClientRect()
	// 	let f = coord.left
	// 	let p = coord.top

	// 	// console.log(lf, tp)
	// 	item.addEventListener('mouseover', (e) => {
	// 		// console.log(lf)
	// 		// console.log( x + 'px')
	// 		// console.log( x + 'px' + lf)
			
	// 		item.style.transform = `translate(${x}px, ${y}px)`
	// 		// item.style.left = x + f + 'px'
	// 		// item.style.top = y + p +'px' 
	// 	})
	// 	item.addEventListener('mouseout', () => {
	// 		item.style.left = lf
	// 		item.style.top = tp
	// 		item.style.transform = `translate(0, 0)`
	// 	})


	// })
	// --





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