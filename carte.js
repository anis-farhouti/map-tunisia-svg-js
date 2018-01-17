var map = document.querySelector('#map');
var paths = map.querySelectorAll('.map_image a');
var links = map.querySelectorAll('.map_list a');


paths.forEach(function(path){

	path.addEventListener('mouseenter', function () {

		var id = this.id.replace('image_','');
		map.querySelectorAll('.is-active').forEach(function (item) {
			item.classList.remove('is-active');
		})
		document.querySelector("#list_"+id).classList.add('is-active');
		document.querySelector("#image_"+id).classList.add('is-active');


	})

	path.addEventListener('mouseleave',function(){
		map.querySelectorAll('.is-active').forEach(function(item){
			item.classList.remove('is-active');
		
	})

	})

	
})

links.forEach(function(link){

	link.addEventListener('mouseenter',function(){
		var id=this.id.replace('list_','');
		map.querySelectorAll('.is-active').forEach(function(item){
			item.classList.remove('is-active');
		
	})
	document.querySelector("#list_"+id).classList.add('is-active');
	document.querySelector("#image_"+id).classList.add('is-active');

  })
	link.addEventListener('mouseleave',function(){
		map.querySelectorAll('.is-active').forEach(function(item){
			item.classList.remove('is-active');
		
	})

	})
})


