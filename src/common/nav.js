const sidebar = document.querySelector('.nav-list')
const menuButton = document.querySelector('#nav-menu')
menuButton.addEventListener('click',()=>{
	sidebar.toggleAttribute('visible')
	Array.from(menuButton.children).forEach(element => element.toggleAttribute('visible'))
	
	if (sidebar.getAttribute('visible')===null){
		sidebar.toggleAttribute('closing')
		sidebar.addEventListener('animationend',() =>
			{
				sidebar.toggleAttribute('closing')
			},
			{once:true}
		)
	}
})