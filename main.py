import os
import smtplib
from flask import Flask, render_template, request
from flask_mail import Mail, Message
from flask.ext import assets

app = Flask(__name__)
mail = Mail(app)

assets.Environment.debug = False
assets.Environment.auto_build = False
env = assets.Environment(app)

# Tell flask-assets where to look for our coffeescript and sass files.
env.load_path = [
	os.path.join(os.path.dirname(__file__), 'sass'),
]

env.register(
	'home',
	assets.Bundle(
		'home/main.sass',
		filters='sass',
		output='css/home.css'
	)
)
env.register(
	'cklabs',
	assets.Bundle(
		'cklabs/main.sass',
		filters='sass',
		output='css/cklabs.css'
	)
)

@app.route('/')
def main():
	projects = [{
			'name': 'Minesweeper',
			'image': 'static/img/portfolio/minesweeper.png',
			'link': 'http://minesweeper.calvinkcollins.com'
		}, {
			'name': "Gascreep's Fortune",
			'image': "static/img/portfolio/gascreep.png" ,
			'link': 'http://gascreep.calvinkcollins.com'
		}
			
	]

	return render_template('home.html', projects=projects)

@app.route('/emailcalvin', methods=['POST'])
def email_calvin():
	name = request.form.get('name', 'anonymous')
	email = request.form.get('email')
	text = request.form.get('message', '')
	message = 'Subject: %s - %s\n\n%s' % (name, email, text)

	try:
		s = smtplib.SMTP('localhost')
		s.sendmail('calvin@calvinkcollins.com', 'calvinkcollins@gmail.com', message)
		s.quit()

		return 'success'
	except SMTPException:
		print "Error: unable to send email"
		return 'error'

	# msg = Message(
		# message,
		# sender= email,
		# recipients=["calvinkcollins@gmail.com"]
	# )

	# mail.send(msg)


@app.route('/cklabs')
def experimental():
	return render_template('cklabs.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0')
