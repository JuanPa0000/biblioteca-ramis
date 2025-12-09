from flask import Flask
from flask_cors import CORS

#Importar Blueprints
from routes.getBook import getBook

App = Flask(__name__)
CORS(App)

App.register_blueprint(getBook)

if __name__ == '__main__':
    App.run(debug=True)