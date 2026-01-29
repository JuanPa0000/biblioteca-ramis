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
    day = data['day']

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT id FROM libros WHERE slug = %s', (book_slug, )) # Sacar el book id
    book_id = cursor.fetchall()[0][0]
    
    cursor.execute('INSERT INTO reservas(day, users_id, libros_id) VALUES(%s, %s, %s)',(day, user_id, book_id))

    cursor.close()
    connection.commit()
    connection.close()

    return jsonify({'msg': 'ok'}), 200