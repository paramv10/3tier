
from flask import Flask
import mysql.connector

app = Flask(__name__)

@app.route('/api/data')
def index():
    db = mysql.connector.connect(
        host="db",
        user="root",
        password="password",
        database="my_database"
    )

    cursor = db.cursor()
    cursor.execute("SELECT message FROM messages LIMIT 1")  
    message = cursor.fetchone()[0]
    
    return {'message': message}