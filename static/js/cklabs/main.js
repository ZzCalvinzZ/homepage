$(document).ready(function () {

	var name = '';

	$('.challenge-box').on('input', 'input:text', function () {
		var that = $(this);
		name = that.val();

		var button = that.parent().siblings('button');

		if (name){
			button.show().text(name + '?');
		} else {
			button.hide().text('');
		}


	});


});
