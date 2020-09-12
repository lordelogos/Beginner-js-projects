var a = 'https://i.redd.it/nm0ejw824j3z.jpg';
var b = 'https://wallpaperaccess.com/full/494069.jpg';
var c = 'https://wallpaperaccess.com/full/219691.jpg';
var d = 'https://i.pinimg.com/originals/d8/73/77/d873771b5dd915a0bea16be2974680ea.jpg';
var e = 'https://i.pinimg.com/originals/91/58/11/9158112ab2fedfb27259daeaf2167916.jpg';
const img = [a,b,c,d,e];
var count = 0;

var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var display = document.querySelector('#img');

next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

function nextImg(e){
	count += 1;
	if (count == 5){
		count = 0
	}
	display.src = img[count];

}

function prevImg(e){
	count -= 1;
	if (count == -1){
		count = 4
	}
	display.src = img[count];

}