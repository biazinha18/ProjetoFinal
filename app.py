import requests
from requests.auth import HTTPBasicAuth
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/bitcoin", methods=['GET'])
def show_bitcoin():
    response = requests.get('https://api.coindesk.com/v1/bpi/currentprice.json').json()
    values = response['bpi']
    currency = {}

    for key, value in values.items():
        currency[key] = value['rate']
    
    return render_template("bitcoin.html", values=currency)

@app.route('/nomes')
def show_nomes():
    url = 'https://gerador-nomes.wolan.net/nomes/5'
    nomes = requests.get(url=url).json()
    return render_template('nomes.html', nomes=nomes)
