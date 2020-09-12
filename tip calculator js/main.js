let calc = document.querySelector('#calculate');
let price = document.querySelector('#price');
let people = document.querySelector('#people');
let alert = document.querySelector('#alertBox');
let tips = document.getElementsByTagName('option');
let select = document.querySelector('#tipPercentage');
let result = document.querySelector('#summary');
var tip;

calc.addEventListener('click', calculate);


function calculate(e){
	result.innerHTML = "";
	alert.style.display = "none";
	alert.innerHTML = '';
	if (price.value != parseFloat(price.value)){
		alert.innerHTML += '<p>Bill Amount Cannot Be Blank</p>';
		alert.style.display = 'block';
	}
	if (people.value != parseFloat(people.value) || people.value <= 0){
		alert.innerHTML += '<p>Number of Users Must Be Greater Than Zero</p>';
		alert.style.display = 'block';
	}

	if (!parseFloat(select.value)){
		alert.innerHTML += '<p>You Must Select A Service</p>';
		alert.style.display = 'block';
	}
	//This is what happens if the form is valid
	if(alert.innerHTML == ""){
		var totalAmount = (parseFloat(price.value) * (1 + parseFloat(select.value))).toFixed(2);
		var amountForEach = (parseFloat(totalAmount) / parseFloat(people.value)).toFixed(2);
		var tipAmount = (parseFloat(price.value) * parseFloat(select.value)).toFixed(2);
		result.innerHTML += "<p>Tip Amount $ " + tipAmount;
		result.innerHTML += "<p>Total Amount $ " + totalAmount;
		result.innerHTML += "<p>Each Person Owes $ "+ amountForEach;
		window.setTimeout(function(){
			price.value ="";
			people.value = ""
			select.value = "Choose..."
			result.innerHTML = "";
		}, 5000)
	}else{
		window.setTimeout(function(){
			alert.style.display = "none";
			alert.innerHTML = '';
		}, 3000)
	}
}

