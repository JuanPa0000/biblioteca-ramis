from flask import Blueprint, jsonify 
from Connection import getConnection

getCatalog = Blueprint('getCatalog', __name__)

@getCatalog.route('/getCatalog', methods=['GET'])
def getCatalogFunction():

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT slug, categoria FROM libros')
    catalog_info = cursor.fetchall()

    cursor.close()
    connection.close()

    return jsonify({'dicc': catalog_info}), 200