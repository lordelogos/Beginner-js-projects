var btn = document.querySelector('#btn');
var name = document.querySelector('#name');

btn.addEventListener('click', hexBg);

function hexBg(e){
	var hexcode = ['1', '2', '3', '4', '5', '6', '7', '8', '9','a', 'b', 'c','d', 'e', 'f'];
	var hex = '#';
	for (var i = 0; i < 6; i++){
		var a = hexcode[Math.floor(Math.random() * hexcode.length)]
		hex += a;
	}

	document.body.style.backgroundColor = hex;
	document.getElementById('name').textContent = hex.toUpperCase();
}