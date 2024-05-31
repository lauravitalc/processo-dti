from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from datetime import datetime
from main_functions import check_weekday, calculate_prices
app = Flask(__name__)
CORS(app)
CORS(app, origins=['http://localhost:3000'])

@app.route('/api/petshop', methods=['POST'])
@cross_origin(supports_credentials=True)
def recieve_data():
    data = request.get_json()
    small_dogs = int(data['data']['smallDogs'])
    big_dogs = int(data['data']['bigDogs'])
    bath_date = datetime.strptime(data['data']['dateBath'],"%Y-%m-%d").date()

    weekday = check_weekday(bath_date)
    bath_date = bath_date.strftime("%Y-%m-%d")

    petshop = calculate_prices(small_dogs, big_dogs, weekday)
    name_petshop = petshop['name']
    price_petshop = 'R$' + str(petshop['price']) + ',00'

    return_data = {
        "name_petshop": name_petshop,
        "price_petshop": price_petshop,
    }

    return jsonify(return_data)
