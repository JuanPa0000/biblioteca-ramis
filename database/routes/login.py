from flask import jsonify, Blueprint, request
from Connection import getConnection
from flask_jwt_extended import create_access_token

login = Blueprint('login', __name__)

@login.route('/login', methods=['POST'])
def log_user():
    data = request.get_json()
    email = data['email']
    password = data['password']

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute("SELECT name FROM users WHERE email = %s && password = %s",(email, password))
    res = cursor.fetchall()
    
    if(len(res)):
        acces_token = create_access_token(identity=res[0])# res = username
        cursor.close()
        connection.close()
        return jsonify(acces_token=acces_token), 200
        
    else:
        cursor.close()
        connection.close()
        return jsonify({'msg': 'Usuario o contraseña incorrectos'}), 200
