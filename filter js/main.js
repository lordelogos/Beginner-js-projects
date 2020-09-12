const searchBtn = document.querySelector('#search-icon');
const searchBar = document.querySelector('#searchbar');
const itemList = document.querySelector('#display');
var items = itemList.getElementsByClassName('item');
var categories = document.querySelectorAll('.category');

searchBar.addEventListener('keyup', filter);
categories.forEach(item => item.addEventListener('click', categorize));

function filter(e){
	var keyword = searchBar.value.toLowerCase();
	Array.from(items).forEach(function(item){
		var itemName = item.lastElementChild.firstElementChild.textContent.toLowerCase();
		if( itemName.indexOf(keyword) != -1){
			item.style.display = 'block';
		}else{
			item.style.display = 'none';
		}
	})
}



function categorize(e){
	e.preventDefault();
	var keyword = e.target.textContent.toLowerCase();
	Array.from(items).forEach(function(item){
		var itemName = item.attributes[1].value.toLowerCase();
		if (keyword == 'all'){
			item.style.display = 'block';
		}else if(itemName.indexOf(keyword) != -1){
			item.style.display = 'block';
		}else{
			item.style.display = 'none';
		}
	})

}
