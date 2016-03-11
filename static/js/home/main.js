$(document).ready(function () {
	$('#contact form').submit(function (e) {
		$form = $(this);
		var data = {
			'name': $form.find('[name="name"]').val()
		}
		$.post('emailcalvin',
			data,
			function (response) {
				// success callback
			}
		);
	});
});
