var btn = document.querySelector('#btn');
var input = document.querySelector('#Message');
var display = document.querySelector('#textarea');

btn.addEventListener('click', action);

function action(e){
	var a = input.value;
	display.innerHTML = '<p>'+ a + '</p>';
	input.value = '';
}