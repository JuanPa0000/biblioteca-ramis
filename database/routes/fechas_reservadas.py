from flask import Blueprint, jsonify, request
from Connection import getConnection

fechas_reservadas = Blueprint("fechas_reservadas", __name__)

@fechas_reservadas.route('/fechas-reservadas', methods=['GET'])
def get_fechas_reservadas():
    book_slug = request.args.get('name')

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT id FROM libros WHERE slug = %s', (book_slug, ))
    book_id = cursor.fetchall()

    cursor.execute('SELECT fecha FROM reservas WHERE libros_id = %s', (book_id, ))
    fechas = cursor.fetchall()

    cursor.close()
    connection.close()

    return jsonify({'msg': fechas}), 200