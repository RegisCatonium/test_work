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
	//--

	// анимация при скролле

	
})