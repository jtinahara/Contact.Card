$(document).ready(function(){
	$('form').submit(function(){
		var first = $('#first').val(),
		last = $('#last').val(),
		desc = $('#description').val();

		$('#contactCards').append('<div class="cards"><h2>'+first+'&nbsp;'+last+'</h2><p>'+desc+'</p></div>');
		return false;
		});
		
	$(document).on('click', '.cards', function(){
		$('p, h2').toggle();
	

	});

	$('.cards').click(function(){
		('p').fadeIn(800, function());
	});

});
