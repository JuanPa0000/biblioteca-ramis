from flask import jsonify, Blueprint, request
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from Connection import getConnection

reservar = Blueprint('reservar', __name__)

@reservar.route('/reservar', methods=['POST'])
@jwt_required()
def reservar_libro():
    user_id = int(get_jwt_identity()) # Sacar el user id

    data = request.get_json()
    book_slug = data['bookSlug']
    fecha = data['fecha']

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT id FROM libros WHERE slug = %s', (book_slug, )) # Sacar el book id
    book_id = cursor.fetchall()[0][0]
    
    cursor.execute('SELECT id FROM reservas WHERE fecha = %s && libros_id = %s',(fecha, book_id))
    response = cursor.fetchone()

    if response: # Mirar si el libro ya esta reservado para ese dia
        return jsonify({'msg': 'El libro ya esta reservado para ese dia'}), 200

    cursor.execute('INSERT INTO reservas(fecha, users_id, libros_id) VALUES(%s, %s, %s)',(fecha, user_id, book_id))

    cursor.close()
    connection.commit()
    connection.close()

    return jsonify({'msg': 'ok'}), 200

@reservar.route('/reservar', methods=['GET'])
@jwt_required()
def get_libros():
    user_id = int(get_jwt_identity())

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT fecha, libros.titulo, libros.slug, libros.descripcion, libros.categoria FROM reservas JOIN libros ON reservas.libros_id = libros.id')
    data = cursor.fetchall()

    cursor.close()
    connection.close()

    return jsonify({'msg': data}), 200