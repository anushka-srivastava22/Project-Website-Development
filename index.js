var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')

menu.addEventListener('click' , function(e)
{
	nav.classList.toggle('hide-mobile')
})
exit.addEventListener('click' , function(e)
{
	nav.classList.toggle('hide-mobile')
})
function setNewImage()
{
	document.getElementById("scene").src="bali.jpg";
}
function setOldImage()
{
	document.getElementById("scene").src="i1.jpg";
}
