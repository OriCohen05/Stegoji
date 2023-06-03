import json
from flask import Flask, request
from flask_socketio import SocketIO, emit
from flask_cors import CORS
app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
socketio = SocketIO(app, async_mode='threading')  # Set async_mode to 'threading'
CORS(app)

@app.after_reque st
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route("/", methods=['POST'])
def hello():
    json_data = json.loads(request.data)
    return json_data['iam']


@socketio.on('connect')
def handle_connect():
    emit('new_socket')


if __name__ == '__main__':
    socketio.run(app, host="localhost", port=8080, debug=True, allow_unsafe_werkzeug=True)
