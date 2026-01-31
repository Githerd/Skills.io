# app.py - CORRECTED VERSION
from flask import Flask, render_template

# Create ONE Flask app with all configurations
app = Flask(__name__, 
            template_folder='templates/main',
            static_folder='static', 
            static_url_path='/static')

@app.route('/')
def home():
    return render_template('about.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/articles')
def articles():
    return render_template('articles.html')

@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
