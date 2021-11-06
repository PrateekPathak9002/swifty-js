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