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
	

	var parseData = (function(){

		var getAllComments = function(context) {
	
				var ret = [],
					node = context.firstChild;
	
				if (!node) { return ret; }
	
				do {
					if (node.nodeType === 8) {
						ret[ret.length] = node;
					}
					if (node.nodeType === 1) {
						ret = ret.concat( getAllComments(node) );
					}
				} while( node = node.nextSibling );
	
				return ret;
	
			},
			cache = [0],
			expando = 'data' + +new Date(),
			data = function(node) {
	
				var cacheIndex = node[expando],
					nextCacheIndex = cache.length;
	
				if(!cacheIndex) {
					cacheIndex = node[expando] = nextCacheIndex;
					cache[cacheIndex] = {};
				}
	
				return cache[cacheIndex];
	
			};
	
		return function(context) {
	
			context = context || document.documentElement;
	
			if ( data(context) && data(context).commentJSON ) {
				return data(context).commentJSON;
			}
	
			var comments = getAllComments(context),
				len = comments.length,
				comment, cData;
	
			while (len--) {
				comment = comments[len];
				cData = comment.data.replace(/\n|\r\n/g, '');
				if ( /^\s*?\{.+\}\s*?$/.test(cData) ) {
					try {
						data(comment.parentNode).commentJSON = (new Function('return ' + cData + ';'))();
					} catch(e) {}
				}
			}
	
			return data(context).commentJSON || true;
	
		};
	
	})();

	for (let i = 0; i < document.querySelectorAll('.sw-alert-dismiss').length; i++) {
		console.log(document.querySelectorAll('.sw-alert-dismiss') , i)
		const element = document.querySelectorAll('.sw-alert-dismiss')[i];
		if (parseData(element).bg_color !== undefined) {
			let bgColor = parseData(element).bg_color
			element.style.background = bgColor
		}

		if (parseData(element).color !== undefined) {
			let color = parseData(element).color
			element.style.color = color
		}
	}
}
