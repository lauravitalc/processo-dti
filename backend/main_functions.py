def check_weekday(date):
    date_week = date.weekday();
    
    if date_week in [0, 1, 2, 3, 4]: 
        return "weekday"
    else:
        return "weekend"
    
def calc_canino_feliz(small_dogs, big_dogs, date_week):
    distance_meters = '2000'

    if date_week == 'weekday':
        price_small = 20
        price_big = 40
    else:
        price_small = round(1.2 * 20)
        price_big = round(1.2 * 40)
    
    calc = (small_dogs * price_small) + (big_dogs * price_big)

    return [calc, distance_meters]

def calc_vai_rex(small_dogs, big_dogs, date_week):
    distance_meters = '1700'

    if date_week == 'weekday':
        price_small = 15
        price_big = 50
    else:
        price_small = 20
        price_big = 55
    
    calc = (small_dogs * price_small) + (big_dogs * price_big)

    return [calc, distance_meters]

def calc_chowchawgas(small_dogs, big_dogs):
    distance_meters = '800'
    price_small = 30
    price_big = 45
    
    calc = (small_dogs * price_small) + (big_dogs * price_big)

    return [calc, distance_meters]

def calculate_prices(small_dogs, big_dogs, date_week):
    canino_feliz, distance_canino = calc_canino_feliz(small_dogs, big_dogs, date_week)
    vai_rex, distance_rex = calc_vai_rex(small_dogs, big_dogs, date_week)
    chowchawgas, distance_chow = calc_chowchawgas(small_dogs, big_dogs)

    petshops = [
        { 
        "name": "Canino Feliz",
        "price": canino_feliz,
        "distance": distance_canino
        },
        {
        "name": "Vai Rex",
        "price": vai_rex,
        "distance": distance_rex
        },
        {
        "name": "ChowChawgas",
        "price": chowchawgas,
        "distance": distance_chow
        }
    ]

    petshops.sort(key=lambda shop: (shop["price"], shop["distance"]));
    petshop = petshops[0]

    return petshop

