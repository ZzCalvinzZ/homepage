import os
from flask import Flask, render_template
from flask.ext import assets

app = Flask(__name__)

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
	return render_template('home.html')

@app.route('/cklabs')
def experimental():
	return render_template('cklabs.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
