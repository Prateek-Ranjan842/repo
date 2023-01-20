import pyttsx3
import datetime as dt

def Speak(text):
    engine = pyttsx3.init("sapi5")
    text = str(text)
    voices = engine.getProperty('voices')
    engine.setProperty('voices', voices[0].id)
    engine.setProperty('rate', 170)
    engine.say(text)
    engine.runAndWait()

def greeting():
    if int(dt.datetime.now().strftime("%H")) > 5 and int(dt.datetime.now().strftime("%H")) < 12:
            Speak("Good morning sir welcome back. how can i help you?")

    elif int(dt.datetime.now().strftime("%H")) > 11 and int(dt.datetime.now().strftime("%H")) < 17:
            Speak("Good afternoon sir welcome back. how can i help you?")

    elif int(dt.datetime.now().strftime("%H")) > 16 and int(dt.datetime.now().strftime("%H")) < 21:
            Speak("Good evening sir welcome back. how can i help you?")

    elif int(dt.datetime.now().strftime("%H")) > 20 and int(dt.datetime.now().strftime("%H")) < 25:
            Speak("Good night sir welcome back. how can i help you?")

    else:
            Speak("Good night sir welcome back. how can i help you?")

greeting()