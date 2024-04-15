from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi



app = Flask(__name__)
CORS(app, origins='*')

uri = "mongodb+srv://muizmadadi:ARGNiSSGAKhJjnvv@cluster0.k39ttbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
#uri = "mongodb+srv://muizmadadi:<password>@cluster0.k39ttbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client['Taskify']
users = db['users']


@app.route('/login', methods=["POST"])
def login(): 
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
    try:

        data = request.json

        email = data.get('email')
        password = data.get('password')

        if email and password:
                
            user = users.find_one({'email': email})
            if user:

                if password == user.get('password'):
                    return jsonify({'message':'ok'}), 200
                else:
                    return jsonify({'message':'wrongPassword'}), 200
            else: 
                return jsonify({'message':'notFound'}), 200
        else: 
            return jsonify({'message': 'missing'}), 200
    except Exception as e:
        return jsonify({'error': e}), 500

@app.route('/signup', methods=["POST"])
def signup():
    try: 
        data = request.json

        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if name and email and password:
            new_user = {'name': name, 'email': email, 'password':password}

            users.insert_one(new_user)
            return jsonify({'message':'ok'})
        else:
            return jsonify({'message':'missing'})

    except Exception as e:
        return jsonify({'error': e}), 500





if __name__ == '__main__':
    try:
        
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
        app.run(debug=True)
    except Exception as e:
        print(e)