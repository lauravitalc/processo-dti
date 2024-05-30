from flask import Flask
from datetime import datetime
from main_functions import check_weekday, calculate_prices
app = Flask(__name__)

@app.route("/")
def home(): # to do: mudar o nome da rota???
    number_small_dogs = 1
    number_big_dogs = 3
    bath_date = datetime.strptime("2024-06-04","%Y-%m-%d").date()
    weekday = check_weekday(bath_date)
    bath_date = bath_date.strftime("%Y-%m-%d")

    petshop = calculate_prices(number_small_dogs, number_big_dogs, weekday)
    name_petshop = petshop['name']
    price_petshop = 'R$' + str(petshop['price']) + ',00'

    content = "small dogs: " + str(number_small_dogs) + " big dogs: " + str(number_big_dogs) + " bath date: " + bath_date + " weekday: " + weekday + " melhor opção: " + name_petshop + " preco: " + price_petshop
    return content
