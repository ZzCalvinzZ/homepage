$(document).ready(function () {
	$('#contact form').submit(function (e) {
		$form = $(this);

		var data = {
			'name': $form.find('[name="name"]').val(),
			'email': $form.find('[name="email"]').val(),
			'message': $form.find('[name="message"]').val(),
		}

		$.post('emailcalvin',
			data,
			function (response) {
				if (response === 'success') {
					alert('success');
				}
				else {
					alert('error');
				}
			}
		);
		e.preventDefault();
	});
});
