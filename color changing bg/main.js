var btn = document.getElementById('btn');
var body = document.querySelector('#body');

btn.addEventListener('click', changeBg)

function changeBg(e){
	var a = e.offsetX;
	var b = e.offsetY;
	body.style.backgroundColor = 'rgb('+a+',' +b+ ','+ (a+b)/2 +')';
}