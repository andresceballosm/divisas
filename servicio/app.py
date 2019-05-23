from flask import Flask, Response
from flask_restful import Resource, Api
import requests
import json

app = Flask(__name__)
api= Api(app)

#Inserte la Key de la Api de cambio.today
keyCambio= ''

class Cotizacion(Resource):
    def get(self,format):
        moneda= codeMoneda(format)
        if moneda != False:
            data = getCotizacion(moneda)
            value= data['result']['value']
            response= {}
            response['moneda'] = format
            response['precio'] = value
            return response
        else:
            return 'Moneda no reconocida'    

def codeMoneda(value):
    if value == 'euro':
        return 'EUR'
    elif value == 'real':
        return 'BRL'
    elif value == 'dolar':
        return 'USD'
    else:
        return False  

def getCotizacion(moneda):
    payload = {'quantity': 1, 'key': keyCambio}
    res = requests.get("http://api.valuta.money/v1/quotes/USD/{}/json".format(moneda), params= payload)
    return res.json()

api.add_resource(Cotizacion, '/cotizacion/<string:format>/')

app.run(host='0.0.0.0', port=7000 )

    