from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from datetime import timedelta

#Importar Blueprints
from routes.getBook import getBook
from routes.getCatalog import getCatalog
from routes.reservar import reservar
from routes.login import login
from routes.sign_up import sign_up
from routes.profile import profile
from routes.fechas_reservadas import fechas_reservadas

App = Flask(__name__)
CORS(App)

App.config["JWT_SECRET_KEY"] = "Dequa20." #Clave secreta
App.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=7) #La sesion expira en 7 dias
jwt = JWTManager(App)   

App.register_blueprint(getBook)
App.register_blueprint(getCatalog)
App.register_blueprint(reservar)
App.register_blueprint(login)
App.register_blueprint(sign_up)
App.register_blueprint(profile)
App.register_blueprint(fechas_reservadas)

if __name__ == '__main__':
    App.run(debug=True)