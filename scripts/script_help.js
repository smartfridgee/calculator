function themeChanger(){
	var value = document.getElementById("checkbox").checked;
	
	setTimeout(function(){
		if(value == false){
			window.location.replace("help.html");
		}
		else if(value == true){
			window.location.replace("help_bm.html");
		}
	}, 500);
}

function themeChangerPl(){
	var value = document.getElementById("checkbox").checked;
	
	setTimeout(function(){
		if(value == false){
			window.location.replace("help_pl.html");
		}
		else if(value == true){
			window.location.replace("help_bm_pl.html");
		}
	}, 500);
}

function backIndex(){
	window.location.replace("../index.html");
}

function backIndexBm(){
	window.location.replace("../index_bm.html");
}

function languageChangerPl(){
	window.location.replace("help_pl.html");
}

function languageChangerPlBm(){
	window.location.replace("help_bm_pl.html");
}

function languageChangerGb(){
	window.location.replace("help.html");
}

function languageChangerGbBm(){
	window.location.replace("help_bm.html");
}