import json
from flask import Flask, request
from flask_socketio import SocketIO, emit
from flask_cors import CORS, cross_origin
app = Flask(__name__)
app.config['SECRET_KEY'] = 'ASK6KXKV8930S'
app.config['CORS_HEADERS'] = 'Content-Type'

socketio = SocketIO(app, async_mode='threading')  # Set async_mode to 'threading'
CORS(app)

@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route("/", methods=['POST'])
@cross_origin()
def hello():
    json_data = json.loads(request.data)
    return json_data['iam']


@socketio.on('connect')
def handle_connect():
    emit('new_socket')


if __name__ == '__main__':
    socketio.run(app, host="localhost", port=8080, debug=True, allow_unsafe_werkzeug=True)
