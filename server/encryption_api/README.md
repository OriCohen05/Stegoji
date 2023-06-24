# Emoji-Encryptor
Effortlessly encrypt and decrypt your data using emojis with a unique algorithm and Flask API.

## Algorithm
In Python, and many more programming languages, the 'random' object relies on a 'seed' to create its randomness.
In the Emoji-Encryptor algorithm, we utilize the 'random' object to generate a random 'seed' which is then used as the input to create another 'random' object responsible for shuffling a list of emojis.
```
Random Object 1 -> seed
seed -> Random Object 2
Random Object 2 -> shuffle emoji list
```

**The crucial aspect of this algorithm is that the 'random' object that receives the seed will always shuffle the emoji list in the same way if the seed remains the same. This ensures consistent encryption and decryption of data using the Emoji-Encryptor.**

## Installation

1. Clone the repository
`git clone https://github.com/YahelB05/Emoji-Encryptor.git`

3. Navigate to the project directory
`cd Emoji-Encryptor`

4. Create a virtual environment (optional but recommended)

5. Install flask
`pip install flask`

6. Run the Flask app
`python flask_emoji.py`
