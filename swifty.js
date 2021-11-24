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
		dropdowns[i].innerHTML += '<i class="fas fa-arrow-circle-down down " aria-hidden="true"></i>'
	}
	$(".down").click(function (e) {
		let element;
		let options = e.target.parentElement.parentElement.querySelectorAll('.sw-options')[0]
		if (options.style.display == 'none') {
			options.style.display = 'block'
			options.style.position = 'static'
			e.target.style.transform = 'rotate(0deg)'
		}else{
			options.style.display = 'none'
			options.style.position = 'absolute'
			e.target.style.transform = 'rotate(-90deg)'
		}

	});
}
