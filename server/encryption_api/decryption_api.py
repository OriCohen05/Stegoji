from flask import Flask, render_template, request, jsonify
import sys
sys.path.append('../encryption') 
from encryption.emoji_algorithm import encrypt, decrypt
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})






@app.route('/api/decrypt', methods=['GET'])
@cross_origin()
def decrypt_api():
    to_decrypt = request.args.get('data')
    key = request.args.get('key')

    if to_decrypt and key:
        decrypted_data = decrypt(to_decrypt, key)
        return jsonify({'mode': 'dec', 'input': to_decrypt, 'output': decrypted_data, 'key': ''})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
