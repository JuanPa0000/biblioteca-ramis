from flask import Blueprint, jsonify
from Connection import getConnection
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

profile = Blueprint('profile', __name__)

@profile.route('/profile', methods=['GET'])
@jwt_required()
def getUserInfo():
    user_id = get_jwt_identity()
    
    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute("SELECT name, email, aula, tutor FROM users WHERE id = %s", (int(user_id)))
    data = cursor.fetchall()[0]

    name = data[0]
    email = data[1]
    aula = data[2]
    tutor = data[3]

    cursor.close()
    connection.close()

    return jsonify({'username': name, 'email': email, 'aula': aula, 'tutor': tutor}), 200