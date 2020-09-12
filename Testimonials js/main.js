let star = "<img src = 'https://image.flaticon.com/icons/svg/2107/2107957.svg' class ='star'>"
let a = star.repeat(1);
let b = star.repeat(2);
let c = star.repeat(3);
let d = star.repeat(4);
let e = star.repeat(5);
let a1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
let a2 = 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
let a3 = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
let a4 = 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
let a5 = 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

class Person {
	constructor(name, comment, rating, img){
		this.name= name;
		this.comment = comment;
		this.rating = rating;
		this.img = img;
	}
}

let sandy = new Person('SANDY', '<p>Contrary to popular opinion, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. making it over 2000 years old. Richard McClintock</p>', d, a1);
let adams = new Person('ADAMS', '<p>This is dummy text to start with</p>', e, a2);
let gabriel = new Person('GABRIEL', '<p>This is dummy text to start with again</p>', e, a3);
let david = new Person('DAVID', '<p>This is dummy text to start with again</p>', d, a4);
let frank = new Person('FRANK', '<p>This is dummy text to end with again</p>', e, a5);

const people = [sandy, adams, gabriel, david, frank];

let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
var count = 0;

next.addEventListener('click', displayN);
prev.addEventListener('click', displayP);

function displayN(e){
	e.preventDefault();
	count++;
	if (count >= people.length){count = 0};
	document.querySelector('#profile').src = people[count]['img'];
	document.querySelector('#name').textContent = people[count]['name'];
	document.querySelector('#stars').innerHTML = people[count]['rating'];
	document.querySelector('#comment').innerHTML = people[count]['comment'];
}

function displayP(e){
	e.preventDefault();
	count--;
	if (count <= -1){
		count = 4;
	}
	document.querySelector('#profile').src = people[count]['img'];
	document.querySelector('#name').textContent = people[count]['name'];
	document.querySelector('#stars').innerHTML = people[count]['rating'];
	document.querySelector('#comment').innerHTML = people[count]['comment'];

}