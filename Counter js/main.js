var count = document.querySelector('#secs');
var reduce = document.querySelector('#lower');
var add = document.querySelector('#add');

add.addEventListener('click', addEvent);
reduce.addEventListener('click', reduceEvent);


function addEvent(){
	var a = parseInt(count.textContent);
	a += 1;
	if (a >= 0){
		count.style.color= 'green';
		count.textContent = a;
	}else if(a < 0){
		count.style.color = 'red';
		count.textContent = a;
	}
}

function reduceEvent(){
	var a = parseInt(count.textContent);
	a -= 1;
	if (a >= 0){
		count.style.color= 'green';
		count.textContent = a;
	}else if(a < 0){
		count.style.color = 'red';
		count.textContent = a;
	}
}