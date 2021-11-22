let elem;
function css(selector,props) {
	elem = document.querySelectorAll(selector)

	for(var m = 0 ; m < elem.length ; m++ ){
		for(var i in props){
			eval(`elem[m].style.${i} = '${props[i]}' `)
		}
	}
	
}
function click(selector,functionToRun) {
	elem = document.querySelectorAll(selector)
	for(var i = 0 ; i < elem.length ; i++ ){
		elem[i].addEventListener('click',functionToRun)
	}
}

function hover(selector,functionToRun) {
	elem = document.querySelectorAll(selector)
	for(var i = 0 ; i < elem.length ; i++ ){
		elem[i].addEventListener('mouseover',functionToRun)
	}
}

let dropdowns = document.getElementsByClassName('sw-dropdown')
for(var i = 0 ; i < dropdowns.length ; i++ ){
	dropdowns[i].append('<i class="fas fa-arrow-down down"></i>')
	document.getElementsByClassName('down')[0].style.textAlign = 'right'
