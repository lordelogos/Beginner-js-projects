
// creation of images array
const images = [
'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1513346940221-6f673d962e97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
];

//initialization of the image counter
var count = 0;

// class creation for each person
class Person {
	constructor(name, course, author){
		this.name = name;
		this.course = course;
		this.author = author;
		this.image = images[count];
	}
}

//object creaion
let name = document.querySelector('#name');
let course = document.querySelector('#course');
let author = document.querySelector('#author');
let submit = document.querySelector('#btn');
let error = document.querySelector('#errors')

submit.addEventListener('click', createObject);

function createObject(e){
	e.preventDefault();
	if (name.value == '' || course.value == '' || author.value == ''){
		error.innerHTML = '<p>All Fields Must Be Filled</p>';
		window.setTimeout(function(){
			error.innerHTML = ''
		}, 1000)
	}else{
		count++
		if (count >= images.length){
			count = 0;
		}
		let newPerson = new Person(name.value, course.value, author.value)
		personCard(newPerson);
		window.setTimeout(function(){
			name.value = '';
			course.value = '';
			author.value = '';
		}, 1000)
	}
}

// display people cards
let display = document.querySelector('#display');

function personCard(person){
	var maindiv = document.createElement('div');
	maindiv.innerHTML = '<div class="object">\
			<img src="'+person.image+'" class="objectimg">\
				<div class="attrib">\
					<div class="tags">\
						<label class="name">Name:</label>\
						<p class="name-name">'+person.name+'</p>\
					</div>\
					<div class="tags">\
						<label class="course">Course:</label>\
						<p class="course-name">'+person.course+'</p>\
					</div>\
					<div class="tags">\
						<label class="author">Author:</label>\
						<p class="author-name">'+person.author+'</p>\
					</div>\
				</div>\
				</div>'
	display.innerHTML += maindiv.innerHTML;
}