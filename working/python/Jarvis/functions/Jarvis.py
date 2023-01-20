from Listen import cltf
from Speak import Speak
from brain import replybrain

while 1 > 0:
    cmd = cltf()
    reply = replybrain(cmd)
    print(reply)
    Speak(reply)
