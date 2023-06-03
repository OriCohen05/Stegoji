import sys
import random
# Set the encoding to UTF-8
sys.stdout.reconfigure(encoding='utf-8')



NumToEmoj = {
    1: "\U0001F600", 2: "\U0001F603", 3: "\U0001F604", 4: "\U0001F601", 5: "\U0001F606",
    6: "\U0001F605", 7: "\U0001F923", 8: "\U0001F602", 9: "\U0001F642", 10: "\U0001F643",
    11: "\U0001F609", 12: "\U0001F60A", 13: "\U0001F607", 14: "\U0001F970", 15: "\U0001F60D",
    16: "\U0001F618", 17: "\U0001F617", 18: "\U0000263A", 19: "\U0001F92A", 20: "\U0001F929",
    21: "\U0001F61A", 22: "\U0001F60B", 23: "\U0001F61B", 24: "\U0001F61C", 25: "\U0001F911",
    26: "\U0001F917", 27: "\U0001F92D", 28: "\U0001F914", 29: "\U0001F910", 30: "\U0001F928",
    31: "\U0001F612", 32: "\U0001F92B", 33: "\U0001F610", 34: "\U0001F611", 35: "\U0001F636",
    36: "\U0001F60F", 37: "\U0001F644", 38: "\U0001F62C", 39: "\U0001F925", 40: "\U0001F614",
    41: "\U0001F62A", 42: "\U0001F924", 43: "\U0001F922", 44: "\U0001F60C", 45: "\U0001F634",
    46: "\U0001F637", 47: "\U0001F912", 48: "\U0001F915"
}

EmojToNum = {emoji: num for num, emoji in NumToEmoj.items()}


def encrypt_message(message):
    encrypted = ""
    for char in message:
        char = char.lower()
        if char.isalpha():
            num = ord(char) - ord('a') + 1
            emoji = NumToEmoj.get(num)
            encrypted += emoji + " "
        elif char.isspace():
            encrypted += " "
    return encrypted.strip()


def decrypt_message(encrypted):
    decrypted = ""
    emojis = encrypted.split()
    for emoji in emojis:
        num = EmojToNum.get(emoji)
        if num:
            char = chr(num + ord('a') - 1)
            decrypted += char
    return decrypted




# Test encryption and decryption
message = "hello world"
encrypted = encrypt_message(message)
decrypted = decrypt_message(encrypted)

print("Message:", message)
print("Encrypted:", encrypted)
print("Decrypted:", decrypted)