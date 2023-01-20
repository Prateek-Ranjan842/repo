import speech_recognition as sr

def Listen(): #listen function
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print("Listening.... ")
        r.pause_threshold = 1
        audio = r.listen(source, 0, 8) #listening 

    try:
        print("recognizing.... ")
        query = r.recognize_google(audio, language="hi", pfilter=1, show_all=True,with_confidence=True) #formating the listened data in hindi language
        query = str(query)

    except:
        return ""

    lines = query.splitlines() # getting the formatted line
    raw = lines[-1][33:] # getting the formatted line
    final = raw.split("'") # getting the formatted line
    final = final[0] # getting the formatted line
    final = final.lower()
    return final # returning the value
       
from googletrans import Translator

def translator(Text):
    text = str(Text) # converting the arg. into string
    translate = Translator()
    output = translate.translate(text) # translating in english
    output = output.text # extracting output
    return output # returning value

def cltf():
    cmd = Listen()
    translatedtext = translator(cmd)
    return translatedtext