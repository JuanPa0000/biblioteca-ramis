from flask import Blueprint, jsonify, request       
from Connection import getConnection     

sign_up = Blueprint("sign_up", __name__)

@sign_up.route("/sign-up", methods=['POST'])
def registrarse():
    
    data = request.get_json()
    name = data['name']
    email = data['email']
    password = data['password']
    aula = data['aula']
    tutor = data['tutor']

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute("SELECT name FROM users WHERE name = %s", (name))
    if (len(cursor.fetchall()) != 0): # Verificar si el nombre de usuario ya existe
        cursor.close()
        connection.close()
        return jsonify({'msg': 'El nombre de usuario ya existe'})
    
    cursor.execute("SELECT email FROM users WHERE email = %s", (email))
    if(len(cursor.fetchall()) != 0): # Verificar si el correo ya esta registrado
        cursor.close()
        connection.close()
        return jsonify({'msg': 'La dirección de correo ya está registrada'})

    cursor.execute("INSERT INTO users(email, password, name, aula, tutor)" \
    " VALUES(%s, %s, %s, %s, %s)",(email, password, name, aula, tutor))        

    cursor.close()
    connection.commit()
    connection.close()

    return jsonify({"msg": "ok"}), 200