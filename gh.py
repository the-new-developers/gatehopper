from flask import Flask, render_template, session, request, redirect
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from random import choice
from string import ascii_letters


class Name(FlaskForm):
    username = StringField('username', [DataRequired()])
    submit = SubmitField('login')


app = Flask(__name__)
app.config['SECRET_KEY'] = ''.join(choice(ascii_letters) for _ in range(15))  # produces a random security key.


@app.route('/')
def welcome():
    return render_template(
        'home/welcome.html',
        username=session.get('username')
    )


@app.route('/login')
def get_login():
    return render_template(
        'home/login.html',
        form=Name()
    )


@app.route('/login', methods=['POST'])
def post_login():
    session['username'] = request.form.get('username')
    return redirect('/')


@app.route('/logout')
def logout():
    del session['username']
    return redirect('/')
