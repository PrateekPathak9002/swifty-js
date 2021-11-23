window.onload = function(){
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

	let dropdowns = document.querySelectorAll(".head")

	for(var i = 0 ; i < dropdowns.length ; i++ ){
		console.log(dropdowns[i].className)
		dropdowns[i].innerHTML += '<i class="fas fa-arrow-circle-down down " aria-hidden="true"></i>';
		document.querySelectorAll(".down")[i].style.float = 'right'
		document.querySelectorAll(".down")[i].style.position = 'absolute'
	}
}
