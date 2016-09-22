$(function () {

	var words = [
		{text: "Python", weight: 15},
		{text: "Javascript", weight: 14},
		{text: "Django", weight: 13},
		{text: "Coffeescript", weight: 12},
		{text: "Flask", weight: 12},
		{text: "MySQL", weight: 11.5},
		{text: "Jinja2", weight: 11.5},
		{text: "HTML", weight: 11},
		{text: "CSS", weight: 10.9},
		{text: "Git", weight: 10.7},
		{text: "Redis", weight: 10.7},
		{text: "Lua", weight: 10.5},
		{text: "Java", weight: 10.5},
		{text: "Backbone.js", weight: 10},
		{text: "Underscore.js", weight: 10},
		{text: "NodeJs", weight: 10},
		{text: "SASS", weight: 10},
		{text: "C#", weight: 10},
		{text: "Unix", weight: 10},
		{text: "Bootstrap", weight: 9},
	];

	$('#skills').jQCloud(words, {
		width: 500,
		height: 350,
		colors: ["#0009EA", "#EA001C", "#EA3C00", "#fc4e2a", "#7200EA", "#EAAA00", "#EA7C00", "#3BEA00", "#EA00C0"],
	});

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

		$form.find('[name="name"]').val('')
		$form.find('[name="email"]').val('')
		$form.find('[name="message"]').val('')

		e.preventDefault();
	});
});
