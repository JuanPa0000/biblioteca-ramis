from flask import jsonify, Blueprint, request
from Connection import getConnection

getBook = Blueprint('getBook', __name__)

@getBook.route('/book', methods=['GET'])
def getBookFunction():

    args = request.args
    book_name = args.to_dict()['name']
    
    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT * FROM libros WHERE slug = %s', (book_name, ))
    book_info = cursor.fetchall()
    
    print(book_info)

    return jsonify({'msg': 'Correcto'}), 200
