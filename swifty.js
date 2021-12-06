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
	let dropdownsRight = document.querySelectorAll(".right")
	let dropdownsLeft = document.querySelectorAll(".left")

	for(var i = 0 ; i < dropdowns.length ; i++ ){
			if (dropdowns[i].className.includes('right')) {
				dropdowns[i].innerHTML += '<i class="fas fa-chevron-down down-right"></i>'
			}else if(dropdowns[i].className.includes('left')){
				dropdowns[i].innerHTML += '	<i class="fas fa-chevron-down down-right"></i>'
			}
	}

	for(var m = 0 ; m < document.querySelectorAll('.sw-dropdowns').length ; m++ ){
		for(var l = 1 ; l < document.querySelectorAll('.sw-dropdowns')[m].querySelectorAll('.sw-dropdown').length ; l++ ){
			let options = document.querySelectorAll('.sw-dropdowns')[m].querySelectorAll('.sw-dropdown')[l].querySelectorAll('.sw-dropdown-body')[0]
			options.style.display = 'none'
			options.style.position = 'absolute'
		}
		document.querySelectorAll('.sw-dropdowns')[m].querySelectorAll('.sw-dropdown')[0].querySelectorAll('.head')[0].style.background = '#e7f1ff'
		document.querySelectorAll('.sw-dropdowns')[m].querySelectorAll('.sw-dropdown')[0].querySelectorAll('i')[0].style.transform = 'rotate(-90deg)'
	}
	
	$(".head").click(function (e) {
		let options = e.target.parentElement.querySelectorAll('.sw-dropdown-body')[0]
		if (options.style.display == 'none') {
			options.style.display = 'block'
			options.style.position = 'static'
			options.parentElement.querySelectorAll('.head')[0].style.background = '#e7f1ff'
			e.target.querySelectorAll('i')[0].style.transform = 'rotate(-90deg)'
		}else{
			options.style.display = 'none'
			options.style.position = 'absolute'
			options.parentElement.querySelectorAll('.head')[0].style.background = 'white'
			e.target.querySelectorAll('i')[0].style.transform = 'rotate(0deg)'
		}

	});


	$('.sw-alert-dismiss').click(function (e) { 
		$('.sw-alert-dismiss').parent()[0].style.opacity = '0'
		setTimeout(() => {
			$('.sw-alert-dismiss').parent()[0].style.display = 'none'
		}, 305);
	});

}
