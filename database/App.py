from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

#Importar Blueprints
from routes.getBook import getBook
from routes.getCatalog import getCatalog
#from routes.reservar import reservar
from routes.login import login

App = Flask(__name__)
CORS(App)

App.config["JWT_SECRET_KEY"] = "Dequa20." #Clave secreta
jwt = JWTManager(App)   

App.register_blueprint(getBook)
App.register_blueprint(getCatalog)
#App.register_blueprint(reservar)
App.register_blueprint(login)

if __name__ == '__main__':
    App.run(debug=True)