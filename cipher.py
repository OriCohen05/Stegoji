import random

"""
    This dictionary maps numbers (from 1 to 16) to tuples of emoji characters.
    Each number is associated with three emoji characters, represented by Unicode escape sequences.
    For example, the number 1 is associated with the tuple ("\U0001F600", "\U0001F603", "\U0001F604"), which corresponds to the emoji characters 😀, 😃, and 😄.
"""

NumToEmoj = {
    1: ("\U0001F600", "\U0001F603", "\U0001F604"),    # Number 1 corresponds to 😀, 😃, and 😄
    2: ("\U0001F601", "\U0001F609", "\U0001F60A"),    # Number 2 corresponds to 😁, 😉, and 😊
    3: ("\U0001F642", "\U0001F643", "\U0001F602"),    # Number 3 corresponds to 🙂, 🙃, and 😂
    4: ("\U0001F606", "\U0001F605", "\U0001F923"),    # Number 4 corresponds to 😆, 😅, and 🤣
    5: ("\U0001F607", "\U0001F970", "\U0001F60D"),    # Number 5 corresponds to 😇, 🥰, and 😍
    6: ("\U0001F618", "\U0001F617", "\U0000263A"),    # Number 6 corresponds to 😘, 😗, and ☺️
    7: ("\U0001F92A", "\U0001F929", "\U0001F61A"),    # Number 7 corresponds to 🤪, 🤩, and 😚
    8: ("\U0001F60B", "\U0001F61B", "\U0001F61C"),    # Number 8 corresponds to 😋, 😛, and 😜
    9: ("\U0001F911", "\U0001F917", "\U0001F92D"),    # Number 9 corresponds to 🤑, 🤗, and 🤭
    10: ("\U0001F914", "\U0001F910", "\U0001F928"),   # Number 10 corresponds to 🤔, 🤐, and 🤨
    11: ("\U0001F612", "\U0001F92B", "\U0001F610"),   # Number 11 corresponds to 😒, 🤫, and 😐
    12: ("\U0001F611", "\U0001F636", "\U0001F60F"),   # Number 12 corresponds to 😑, 😶, and 😏
    13: ("\U0001F644", "\U0001F62C", "\U0001F925"),   # Number 13 corresponds to 🙄, 😬, and 🤥
    14: ("\U0001F614", "\U0001F62A", "\U0001F924"),   # Number 14 corresponds to 😔, 😪, and 🤤
    15: ("\U0001F922", "\U0001F60C", "\U0001F634"),   # Number 15 corresponds to 🤢, 😌, and 😴
    16: ("\U0001F637", "\U0001F912", "\U0001F915")    # Number 16 corresponds to 😷, 🤒, and 🤕
}
"""
    This dictionary maps each emoji character (represented by Unicode escape sequences) to its corresponding number.
    It serves as the reverse mapping of NumToEmoj.
    For example, the emoji character 😀 is associated with the number 1, and the emoji character 😃 is also associated with the number 1.
"""
EmojToNum = {
    "\U0001F600": 1,    # 😀 corresponds to number 1
    "\U0001F603": 1,    # 😃 corresponds to number 1
    "\U0001F604": 1,    # 😄 corresponds to number 1
    "\U0001F601": 2,    # 😁 corresponds to number 2
    "\U0001F609": 2,    # 😉 corresponds to number 2
    "\U0001F60A": 2,    # 😊 corresponds to number 2
    "\U0001F642": 3,    # 🙂 corresponds to number 3
    "\U0001F643": 3,    # 🙃 corresponds to number 3
    "\U0001F602": 3,    # 😂 corresponds to number 3
    "\U0001F606": 4,    # 😆 corresponds to number 4
    "\U0001F605": 4,    # 😅 corresponds to number 4
    "\U0001F923": 4,    # 🤣 corresponds to number 4
    "\U0001F607": 5,    # 😇 corresponds to number 5
    "\U0001F970": 5,    # 🥰 corresponds to number 5
    "\U0001F60D": 5,    # 😍 corresponds to number 5
    "\U0001F618": 6,    # 😘 corresponds to number 6
    "\U0001F617": 6,    # 😗 corresponds to number 6
    "\U0000263A": 6,    # ☺️ corresponds to number 6
    "\U0001F92A": 7,    # 🤪 corresponds to number 7
    "\U0001F929": 7,    # 🤩 corresponds to number 7
    "\U0001F61A": 7,    # 😚 corresponds to number 7
    "\U0001F60B": 8,    # 😋 corresponds to number 8
    "\U0001F61B": 8,    # 😛 corresponds to number 8
    "\U0001F61C": 8,    # 😜 corresponds to number 8
    "\U0001F911": 9,    # 🤑 corresponds to number 9
    "\U0001F917": 9,    # 🤗 corresponds to number 9
    "\U0001F92D": 9,    # 🤭 corresponds to number 9
    "\U0001F914": 10,   # 🤔 corresponds to number 10
    "\U0001F910": 10,   # 🤐 corresponds to number 10
    "\U0001F928": 10,   # 🤨 corresponds to number 10
    "\U0001F612": 11,   # 😒 corresponds to number 11
    "\U0001F92B": 11,   # 🤫 corresponds to number 11
    "\U0001F610": 11,   # 😐 corresponds to number 11
    "\U0001F611": 12,   # 😑 corresponds to number 12
    "\U0001F636": 12,   # 😶 corresponds to number 12
    "\U0001F60F": 12,   # 😏 corresponds to number 12
    "\U0001F644": 13,   # 🙄 corresponds to number 13
    "\U0001F62C": 13,   # 😬 corresponds to number 13
    "\U0001F925": 13,   # 🤥 corresponds to number 13
    "\U0001F614": 14,   # 😔 corresponds to number 14
    "\U0001F62A": 14,   # 😪 corresponds to number 14
    "\U0001F924": 14,   # 🤤 corresponds to number 14
    "\U0001F922": 15,   # 🤢 corresponds to number 15
    "\U0001F60C": 15,   # 😌 corresponds to number 15
    "\U0001F634": 15,   # 😴 corresponds to number 15
    "\U0001F637": 16,   # 😷 corresponds to number 16
    "\U0001F912": 16,   # 🤒 corresponds to number 16
    "\U0001F915": 16    # 🤕 corresponds to number 16
    }
BASE_TEXT = [
    "The sun began to set, casting a warm golden glow across the horizon.",
    "Birds chirped merrily, filling the air with their joyful melodies.",
    "A gentle breeze rustled through the leaves of the trees, creating a soothing sound.",
    "The scent of blooming flowers wafted through the air, perfuming the surroundings.",
    "As dusk approached, the world seemed to embrace a tranquil stillness.",
    "Stars started to twinkle in the night sky, dotting the darkness with their shimmering light.",
    "A sense of peace and serenity settled over the landscape, inviting contemplation.",
    "In the distance, the sound of waves crashing against the shore could be faintly heard.",
    "The moon emerged, casting a soft glow and illuminating the path ahead.",
    "Nature whispered its secrets, captivating anyone willing to listen.",
    "Amidst this enchanting ambiance, a feeling of harmony filled the heart."
]


def rand(row):
    return random.choice(NumToEmoj[row])
