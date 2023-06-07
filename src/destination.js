import '../styles/destination.scss'
import('./common/nav.js')

const buttons = document.querySelectorAll('.destination-item')
const images = document.querySelectorAll('.destination-image > img')
const title = document.querySelector('.destination-description > h2')
const text = document.querySelector('.destination-description > p')
const distance = document.querySelector('.destination-distance > h3')
const time = document.querySelector('.destination-time > h3')
const destinations = [
	{
		"name": "Moon",
		"images": {
			"png": "./assets/destination/image-moon.png",
			"webp": "./assets/destination/image-moon.webp"
		},
		"description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		"distance": "384,400 km",
		"travel": "3 days"
	},
	{
		"name": "Mars",
		"images": {
			"png": "./assets/destination/image-mars.png",
			"webp": "./assets/destination/image-mars.webp"
		},
		"description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
		"distance": "225 mil. km",
		"travel": "9 months"
	},
	{
		"name": "Europa",
		"images": {
			"png": "./assets/destination/image-europa.png",
			"webp": "./assets/destination/image-europa.webp"
		},
		"description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		"distance": "628 mil. km",
		"travel": "3 years"
	},
	{
		"name": "Titan",
		"images": {
			"png": "./assets/destination/image-titan.png",
			"webp": "./assets/destination/image-titan.webp"
		},
		"description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		"distance": "1.6 bil. km",
		"travel": "7 years"
	}
]

const selectDest = function(id){
	images.forEach(image=>{
		image.id === id
			? image.setAttribute('visible','')
			: image.removeAttribute('visible')
	})
	buttons.forEach(button=>{
		button.id === id
			? button.setAttribute('active','')
			: button.removeAttribute('active')
	})
	title.textContent = destinations[id].name
	text.textContent = destinations[id].description
	time.textContent = destinations[id].travel
	distance.textContent = destinations[id].distance
}

buttons.forEach(button => button.addEventListener('click', (e) => {
	selectDest(e.target.id)
}))