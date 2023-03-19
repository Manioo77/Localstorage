const containerCookie = document.querySelector('.container')
const btnCookie = document.querySelector('.container__button')

const cookie = () => {
	const cookie = localStorage.getItem('cookie')
	if (cookie) {
		containerCookie.classList.add('hide')
	}
}

const hidePopup = () => {
	localStorage.setItem('cookie', 'true')
	containerCookie.classList.add('hide')
}

btnCookie.addEventListener('click', hidePopup)
cookie()
