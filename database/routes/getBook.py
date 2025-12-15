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
    
    dicc = {'id': book_info[0][0],
        'name': book_info[0][1],
        'slug': book_info[0][2],
        'autor': book_info[0][3],
        'editorial': book_info[0][4],
        'category': book_info[0][5],
        'year': book_info[0][6],
        'pages': book_info[0][7],
        'description': book_info[0][8],
        'reservado': book_info[0][9]}

    return jsonify({'dicc': dicc}), 200
