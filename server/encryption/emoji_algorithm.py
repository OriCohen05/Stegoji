import random

"""

Encryption based on the ASCII representation of the 'abc' letter & a random seed for shuffling the dict.
@author Yahel Braun

"""

emojis = [
    "\U0001F600", "\U0001F603", "\U0001F604", "\U0001F601", "\U0001F606",
    "\U0001F605", "\U0001F923", "\U0001F602", "\U0001F642", "\U0001F643",
    "\U0001F609", "\U0001F60A", "\U0001F607", "\U0001F970", "\U0001F60D",
    "\U0001F618", "\U0001F617", "\U0000263A", "\U0001F92A", "\U0001F929",
    "\U0001F61A", "\U0001F60B", "\U0001F61B", "\U0001F61C", "\U0001F911",
    "\U0001F917", "\U0001F92D", "\U0001F914", "\U0001F910", "\U0001F928",
    "\U0001F612", "\U0001F92B", "\U0001F610", "\U0001F611", "\U0001F636",
    "\U0001F60F", "\U0001F644", "\U0001F62C", "\U0001F925", "\U0001F614",
    "\U0001F62A", "\U0001F924", "\U0001F922", "\U0001F60C", "\U0001F634",
    "\U0001F637", "\U0001F912", "\U0001F915"
]


def shuffle_list(to_shuffle: list, seed: int):
    random_obj = random.Random(seed)
    shuffled_list = random_obj.sample(to_shuffle, len(to_shuffle))
    return shuffled_list


def correct_data(data):
    data = data.lower()
    data = ''.join(char for char in data if char.isalpha() or char.isspace())
    return data


def encrypt(data):
    data = correct_data(data)
    seed = random.randint(1, 10000)
    shuffled_emojis = shuffle_list(emojis, seed)
    encrypted_data = ''.join([shuffled_emojis[ord(char) - ord('a')] if not char.isspace() else ' ' for char in data])
    return encrypted_data, seed


def decrypt(data, seed):
    shuffled_emojis = shuffle_list(emojis, int(seed))
    try:
        decrypted_data = ''.join(
            [chr(shuffled_emojis.index(emoji) + ord('a')) if not emoji.isspace() else ' ' for emoji in data])
    except ValueError:
        return "Must be an emoji to decrypt!"

    return decrypted_data


def main():
    tamper_key = 0  # 0 - for true decryption, any other unsigned integer - for false decryption

    data = input("Enter Text: ")

    encrypted_data, seed = encrypt(data)
    print(f'Encrypted data: {encrypted_data}')

    decrypted_data = decrypt(encrypted_data, seed + tamper_key)
    print(f'Decrypted data: {decrypted_data}')


if __name__ == '__main__':
    main()