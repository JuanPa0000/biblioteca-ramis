from flask import Flask
from flask_cors import CORS

#Importar Blueprints
from routes.getBook import getBook
from routes.getCatalog import getCatalog

App = Flask(__name__)
CORS(App)

App.register_blueprint(getBook)
App.register_blueprint(getCatalog)

if __name__ == '__main__':
    App.run(debug=True)