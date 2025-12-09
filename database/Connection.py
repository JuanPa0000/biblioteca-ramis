import pymysql

def getConnection():

    try:
        connection = pymysql.connect(
            host='localhost',
            user='root',
            password='Dequa20.',
            database='biblioteca'
        )

        print("Conexion con la base de datos establecida")
        return connection

    except Exception as err:
        print('No se puede acceder a la base de datos: ', err)

getConnection()