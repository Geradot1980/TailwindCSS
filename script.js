

const btnToggle = document.querySelector('.btn-toggle')
let day = true
const tagHTML = document.getElementsByTagName('html')
console.log(tagHTML[0])
btnToggle.addEventListener('click', () => {
	tagHTML[0].classList.toggle('dark');
	console.log(tagHTML[0])


})