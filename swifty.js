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
	}
	$(".down").click(function (e) {
		for(var i = 0 ; i < e.target.parentElement.parentElement.querySelectorAll('.sw-dropdown-options').length ; i++ ){
			let element = e.target.parentElement.parentElement.querySelectorAll('.sw-dropdown-options')[i]
			if (element.style.display == 'none') {
				element.style.display = 'inline'
				e.target.style.transform = 'rotate(0deg)'
			}else{
				element.style.display = 'none'
				e.target.style.transform = 'rotate(-90deg)'
			}
		}
		

	});
}
