from flask import jsonify, Blueprint, request
from Connection import getConnection

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
        print("Si Existe")
    else:
        print("No existe")

    cursor.close()
    connection.close()

    return jsonify({'response': 'ok'}), 200