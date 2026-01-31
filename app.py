# app.py - CORRECTED VERSION
from flask import Flask, render_template

# Create ONE Flask app with all configurations
app = Flask(__name__, 
            template_folder='templates/main',
            static_folder='static', 
            static_url_path='/static')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/listen')
def listen():
    return render_template('main/listen.html', title='Listen')

@app.route('/communicate')
def communicate():
    return render_template('main/communicate.html', title='Communicate')

@app.route('/empathise')
def empathise():
    return render_template('main/empathise.html', title='Empathise')

@app.route('/resolve')
def resolve():
    return render_template('main/resolve.html', title='Resolve')

if __name__ == '__main__':
    app.run(debug=True)
