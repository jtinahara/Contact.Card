$(document).ready(function(){
	$('form').submit(function(){
		var first = $('#first').val(),
		last = $('#last').val(),
		desc = $('#description').val();
		if(!first){
			return;
		}
		if(!last){
			return;
		}
		if(!desc){
			return;
		}

		$('first, last, desc').val()
		$('#contactCards').append('<div class="cards"><h2>'+first+'&nbsp;'+last+'</h2><p>'+desc+'</p></div>');
		$('#first, #last, #description').val('');
		$('#first').focus();
		return false;
		});
		
	$(document).on('click', '.cards', function(){
		$('p, h2').toggle();
	});

});
