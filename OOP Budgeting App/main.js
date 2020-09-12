//budget class
class Budget {
	constructor(amount, bills = {}){
		this.amount = amount;
		this.expenses = bills;
	}

	expense(){
		let x = 0 // this is the return value of expenses
		for (let i in Object.values(this.expenses)){
			x += Object.values(this.expenses)[i];
		}
		return x
	}

	balance(){
		return this.amount - this.expense();
	}

	add(obj){
		var key = Object.keys(obj)[0];
		console.log(key)
		if (Object.keys(this.expenses).indexOf(key) == -1){
			this.expenses[key] = Object.values(obj)[0];
		}else{
			this.expenses[key] += Object.values(obj)[0];
		}
		
	}

	remove(obj){
	 	delete this.expenses[obj];
	}

	edit(oldname, newname){
		var value = this.expenses[oldname];
		this.remove(oldname);
		this.add({ [newname] : value});
	}
}

//

// adding webpage functionality
let budgetDigits = document.querySelector('#budgetDigits');
let addBudget = document.querySelector('#calc');
let expenseName = document.querySelector('#expense');
let expenseDigits = document.querySelector('#expenseAmount');
let addExpense = document.querySelector('#addbtn');
let totalBudget = document.querySelector('#totalBudget');
let totalExpenses = document.querySelector('#totalExpenses');
let balance = document.querySelector('#balance');
let budgeterror = document.querySelector('#error1');
let expenseerror= document.querySelector('#error2');
let expensetitle = document.querySelector('#expensetitle');
let expenseamount = document.querySelector('#expenseamount');
let actions =document.querySelector('#actiondiv');
var person;


addBudget.addEventListener('click', startbudget)

function startbudget(e){
	e.preventDefault();
	if(budgetDigits.value == ''|| budgetDigits.value == 0){
		budgeterror.innerHTML = '<p>All Fields Are Required</p>';
		window.setTimeout(function(){
			budgeterror.innerHTML = '';
		}, 1000)
	}else{
		person = new Budget(parseInt(budgetDigits.value));
		console.log(person);
		totalBudget.textContent = person.amount;
		totalExpenses.textContent = person.expense();
		balance.textContent = person.balance();
		window.setTimeout(() => {budgetDigits.value = '';}, 500)
	}
}

addExpense.addEventListener('click', startexpenses);

function startexpenses(e){
	e.preventDefault();
	if(person != undefined){
		if (expenseName.value == ''|| expenseDigits.value == ''|| expenseDigits.value == 0){
			expenseerror.innerHTML = '<p>All Fields Are Required</p>';
			window.setTimeout(function(){
				expenseerror.innerHTML = '';
			}, 1000)
		}else{
			var expenseObj = {[expenseName.value] : parseInt(expenseDigits.value)}
			person.add(expenseObj);
			console.log(person)
			totalBudget.textContent = person.amount;
			totalExpenses.textContent = person.expense();
			balance.textContent = person.balance();
			addExpenseToList(expenseObj);
			window.setTimeout(() => {expenseName.value = ''; expenseAmount.value = ''}, 500)
		}
	}else{
		budgeterror.innerHTML = '<p>Add Your Budget First</p>'
		window.setTimeout(function(){
				budgeterror.innerHTML = '';
				expenseName.value = '';
				expenseAmount.value = '';
			}, 1000)
	}
	console.log(edit, del)
}

function addExpenseToList(obj){
	expensetitle.innerHTML += '<p class = "smallText">'+Object.keys(obj)[0]+'</p>'
	expenseamount.innerHTML += '<p class = "smallText">$ '+Object.values(obj)[0]+'</p>';
	actiondiv.innerHTML += '<div id="actions">\
				<button class="action-icon editbtn"><svg width="478" height="478" viewBox="0 0 478 478" fill="none" xmlns="http://www.w3.org/2000/svg" class= "svg">\
							<g id="edit">\
							<g id="pencil">\
							<g id="Group_2">\
							<path id="Vector_2" d="M458.742 19.142C446.488 6.88599 429.867 0.00199316 412.536 0.00399316C395.195 -0.0460068 378.557 6.84999 366.337 19.153L141.534 243.937C139.669 245.816 138.262 248.1 137.421 250.61L103.288 353.01C100.309 361.953 105.144 371.617 114.087 374.595C115.822 375.173 117.639 375.468 119.467 375.47C121.299 375.467 123.12 375.173 124.86 374.6L227.26 340.467C229.775 339.627 232.06 338.213 233.933 336.337L458.735 111.535C484.25 86.023 484.253 44.657 458.742 19.142ZM434.603 87.419L212.736 309.286L146.449 331.421L168.516 265.219L390.468 43.353C402.67 31.175 422.435 31.195 434.613 43.397C440.43 49.226 443.708 57.117 443.733 65.352C443.754 73.631 440.467 81.575 434.603 87.419Z" fill="#05668d"/>\
							</g>\
							</g>\
							</g>\
						</svg></button>\
				<button class="action-icon del">x</button>\
			</div>'
}

// edit and delete btn functionality

let edit = document.getElementsByClassName('editbtn');
let del = document.getElementsByClassName('del');



Array.from(edit).forEach(item => {item.addEventListener('click', editItem)})
Array.from(del).forEach(item => {item.addEventListener('click', delItem)})

function editItem(e){
	e.preventDefault();
	console.log(e.target);
}

function delItem(e){
	e.preventDefault();
	console.log(e.target);
}