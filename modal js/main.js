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

const images = ['https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1527904324834-3bda86da6771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
]

let modal = document.querySelector('#modal-view');
let modalImg = document.querySelector('#productModal')
var position;
var productImg;
var count;
Array.from(items).forEach(item => item.addEventListener('click', modalview));

function modalview(e){
	e.preventDefault();
	var productImg = e.target.attributes[0].value;
	position = images.indexOf(productImg);
	count = position;
	modal.style.display = 'block';
	modalImg.src = productImg;
}

let exit = document.querySelector('#exit');

exit.addEventListener('click', offDisplay);

function offDisplay(e){
	e.preventDefault();
	modal.style.display = 'none';
}

let next = document.querySelector('#next', nextImg);
let prev = document.querySelector('#prev', prevImg);
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

function nextImg(e){
	e.preventDefault();
	count++;
	if(count >4){count = 0};
	modalImg.src = images[count];
}


function prevImg(e){
	e.preventDefault();
	count--;
	if(count < 0){count = 4};
	modalImg.src = images[count];
}