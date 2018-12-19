document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM was loaded!');
// });


var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
var inputNumber = document.getElementById("type");
var topNumber = 0
minusButton.addEventListener("click", function(e){
	e.preventDefault();
	minus(topNumber, inputNumber)
})
plusButton.addEventListener("click", function(e){
	e.preventDefault();
	plus(topNumber, inputNumber)
})

    function plus(result, input) {
        topNumber = result + Number(input.value);
        document.getElementById("topnumber").textContent = topNumber;
        inputNumber.value = 1;

    }
    
    function minus(result, input){
    	topNumber = result - Number(input.value);
        document.getElementById("topnumber").textContent = topNumber;
        inputNumber.value = 1;

    }

    });