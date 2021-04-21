function themeChanger(){
	var value = document.getElementById("checkbox").checked;
	
	setTimeout(function(){
		if(value == false){
			window.location.replace("index.html");
		}
		else if(value == true){
			window.location.replace("index_bm.html");
		}
	}, 500);
	
	/*if(value == false){ //DARK
		document.body.style.backgroundColor = "#212121";
		document.body.style.color = "#e8e8e8";
		document.getElementById("main").style.backgroundColor = "#333333";
		document.getElementById("main").style.color = "#e8e8e8";
		document.getElementById("title").style.color = "white";
		document.getElementById("output_window").style.backgroundColor = "#363636";
		document.getElementById("equation").style.color = "#d1d1d1";
		document.getElementById("bin").style.color = "#ebebeb";
		document.getElementById("bin").style.backgroundColor = "#242424";
		document.getElementById("bin").style.border = "";
	}
	else if(value == true){ //BRIGHT
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
		document.getElementById("main").style.backgroundColor = "#f2f2f2";
		document.getElementById("main").style.color = "black";
		document.getElementById("title").style.color = "black";
		document.getElementById("output_window").style.backgroundColor = "#e8e8e8";
		document.getElementById("equation").style.color = "#2b2b2b";
		document.getElementById("bin").style.color = "black";
		document.getElementById("bin").style.backgroundColor = "white";
	}*/
	
}

function checkRes(){
	var w = window.innerWidth;

	if(w < 600){
			document.getElementById("buttons_right").innerHTML = "";
			document.getElementById("buttons_left").innerHTML = "";
			document.getElementById("switch").innerHTML = "";
			document.body.style.fontFamily = "Arial";
	}
}

window.onload = valueLoader;
window.onload = checkRes;


function valueLoader(){
	document.getElementById("gb").value = 1;
	document.getElementById("pl").value = 0;
}

function languageChangerGb(){
	document.getElementById("title_t").innerHTML = "Calculator";
	let get = document.getElementById("equation").innerHTML;
	
	if(get == "Wprowadź liczbę"){
		document.getElementById("equation").innerHTML = "Enter a number";
	}
}

function languageChangerPl(){
	document.getElementById("title_t").innerHTML = "Kalkulator";
	let get = document.getElementById("equation").innerHTML;
	
	if(get == "Enter a number"){
		document.getElementById("equation").innerHTML = "Wprowadź liczbę";
	}
}

function helperOpener(){
	window.location.replace("help/help.html");
}

function helperOpenerBm(){
	window.location.replace("help/help_bm.html");
}

function inputNumber1(){
	let output = document.getElementById("output").innerHTML;
	let input = 1;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber2(){
	let output = document.getElementById("output").innerHTML;
	let input = 2;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber3(){
	let output = document.getElementById("output").innerHTML;
	let input = 3;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber4(){
	let output = document.getElementById("output").innerHTML;
	let input = 4;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber5(){
	let output = document.getElementById("output").innerHTML;
	let input = 5;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber6(){
	let output = document.getElementById("output").innerHTML;
	let input = 6;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber7(){
	let output = document.getElementById("output").innerHTML;
	let input = 7;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber8(){
	let output = document.getElementById("output").innerHTML;
	let input = 8;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber9(){
	let output = document.getElementById("output").innerHTML;
	let input = 9;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputNumber0(){
	let output = document.getElementById("output").innerHTML;
	let input = 0;
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function inputFunctionPlus(){
	let output = document.getElementById("output").innerHTML;
	let input = "+";
	output = output + " " + input + " ";
	
	document.getElementById("output").innerHTML = output;
}

function inputFunctionMinus(){
	let output = document.getElementById("output").innerHTML;
	let input = "-";
	output = output + " " + input + " ";
	
	document.getElementById("output").innerHTML = output;
}

function inputFunctionTimes(){
	let output = document.getElementById("output").innerHTML;
	let input = "*";
	output = output + " " + input + " ";
	
	document.getElementById("output").innerHTML = output;
}

function inputFunctionDiv(){
	let output = document.getElementById("output").innerHTML;
	let input = "/";
	output = output + " " + input + " ";
	
	document.getElementById("output").innerHTML = output;
}

function inputFunctionPrc(){
	let output = document.getElementById("output").innerHTML;
	document.getElementById("equation").innerHTML = output + "%" + " " + "=";
	
	output = eval(output)/100;
	document.getElementById("output").innerHTML = output;
}

function inputFunctionDot(){
	let output = document.getElementById("output").innerHTML;
	let input = ".";
	output = output + input;
	
	document.getElementById("output").innerHTML = output;
}

function outputFunction(){
	let input = document.getElementById("output").innerHTML;
	let output;
	let language = document.getElementById("title_t").innerHTML;
	
	if(language == "Calculator"){
		language = "Enter a number";
	}
	else if(language == "Kalkulator"){
		language = "Wprowadź liczbę";
	}
	console.log(language);
	
	try{
		output = eval(input);
	}
	catch(e){
		output = "NaN"
	}
	
	if(output == null){
		document.getElementById("equation").innerHTML = language;
	}
	else{
	
	let result = input + " " + "=";
	
	document.getElementById("equation").innerHTML = result;
	document.getElementById("output").innerHTML = output;
	
	
	//history block
	var hist = document.getElementById("r_block");
	var newcontent = document.createElement('div');
	
	newcontent.innerHTML = '<div class="block_holder"><div class="h_block">'+ result + " " + output +'</div> </div> </div>';

    while (newcontent.firstChild) {
        hist.appendChild(newcontent.firstChild);
    }
	}
}

/*document.addEventListener('keypress', keyInput);*/

$(document).unbind('keydown').bind('keydown', function (e) {
   var key = e.which;
	
	switch(key){
		//0
	 case 48:
	 case 96:
		inputNumber0();
		break;
		//1
	 case 49:
	 case 97:
		inputNumber1();
		break;
		//2
	 case 50:
	 case 98:
		inputNumber2();
		break;
		//3
	 case 51:
	 case 99:
		inputNumber3();
		break;
		//4
	 case 52:
	 case 100:
		inputNumber4();
		break;
		//5
	 case 53:
	 case 101:
		inputNumber5();
		break;
		//6
	 case 54:
	 case 102:
		inputNumber6();
		break;
		//7
	 case 55:
	 case 103:
		inputNumber7();
		break;
		//8
	 case 56:
	 case 104:
		inputNumber8();
		break;
		//9
	 case 57:
	 case 105:
		inputNumber9();
		break;
		//=
	 case 187:
	 case 13:
		outputFunction();
		break;
		//+
	 case 107:
		inputFunctionPlus();
		break;
		//-
	 case 109:
	 case 189:
		inputFunctionMinus();
		break;
		//*
	 case 106:
		inputFunctionTimes();
		break;
		// : (division)
	 case 186:
	 case 111:
	 case 191:
		inputFunctionDiv();
		break;
		//. 
	 case 190:
	 case 110:
	 case 188:
		inputFunctionDot();
		break;
		//cC
	 case 67:
		clearAll();
		break;
		//backspace
	 case 8:
		backSpace();
		break;
		//historyclean
	 case 45:
		historyClean();
		break;
		//cleareverything
	 case 46:
		clearAll();
		historyClean();
		break
		
		
		//default
	 default:
		console.log("none");
	}
});

/*function keyInput(e){
	var key = e.key;
	
	if(key == 0){
		inputNumber0();
	}
	else if(key == 1){
		inputNumber1();
	}
	else if(key == 2){
		inputNumber2();
	}
	else if(key == 3){
		inputNumber3();
	}
	else if(key == 4){
		inputNumber4();
	}
	else if(key == 5){
		inputNumber5();
	}
	else if(key == 6){
		inputNumber6();
	}
	else if(key == 7){
		inputNumber7();
	}
	else if(key == 8){
		inputNumber8();
	}
	else if(key == 9){
		inputNumber9();
	}
	else{
		console.log("none");
	}
	
}*/

/*function historyFill(){
	let result = document.getElementsByClassName("result").innerHTML;
	let output = document.getElementsByClassName("output_h").innerHTML;
	
	document.getElementsByClassName("equation").innerHTML = result;
	document.getElementsByClassName("output").innerHTML = output;
}*/

function backSpace(){
	document.getElementById("output").innerHTML = "";
}

function historyClean(){
	document.getElementById("r_block").innerHTML = "";
}

function clearAll(){
	document.getElementById("output").innerHTML = "";
	document.getElementById("equation").innerHTML = "";
}