$(document).ready(function(){
	
	/* OLD CODE

	var randomNum = function(){
		return Math.floor(Math.random() * 255);
	};

	var randomBgColor = function(){
		return 'rgba(' + randomNum() + ', ' + randomNum() +', ' + randomNum() + ', 1)';
	};

	*/

	var randomHexColor = function(){
		return "#" + Math.random().toString(16).slice(2,8);
	}

	$("#bgColorChange").on("click", function(){
		$('.content-section-a').css('background', randomHexColor());
	});
});