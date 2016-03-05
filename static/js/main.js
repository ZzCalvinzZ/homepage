$(document).ready(function () {

	var name = '';

	$('.challenge-box').on('input', 'input:text', function () {
		var that = $(this);
		name = that.val();

		that.parent().siblings('button').text(name);

	});


});
