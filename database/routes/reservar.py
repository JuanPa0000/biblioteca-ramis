from flask import jsonify, Blueprint, request
from Connection import getConnection

reservar = Blueprint('reservar', __name__)

#@reservar.route('/reservar', methods=['POST'])
#def reservar_libro():
