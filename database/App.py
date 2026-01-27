from flask import Flask
from flask_cors import CORS

#Importar Blueprints
from routes.getBook import getBook
from routes.getCatalog import getCatalog
#from routes.reservar import reservar
from routes.login import login

App = Flask(__name__)
CORS(App)

App.register_blueprint(getBook)
App.register_blueprint(getCatalog)
#App.register_blueprint(reservar)
App.register_blueprint(login)

if __name__ == '__main__':
    App.run(debug=True)