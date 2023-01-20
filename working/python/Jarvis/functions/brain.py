import openai
from dotenv import load_dotenv

# File = open("database\api.txt", "r")
# api = File.read()
# File.close()
api = "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"

openai.api_key = api
load_dotenv()
completion = openai.Completion()

def replybrain(questions, chat_log = None):
    file = open("database\chat_log.txt", "r")
    chat_log_template = file.read()
    file.close()

    if chat_log == None:
        chat_log = chat_log_template

    prompt = f"{chat_log}You : {questions} \nJarvis : "
    response = completion.create(
        model = "text-davinci-002", 
        prompt = prompt,  
        temperature = 0.5, 
        max_tokens = 60,
        top_p = 0.3, 
        frequency_penalty = 0.5,
        presence_penalty = 0 )
    answer = response.choices[0].text.strip()

    chat_log_template_update = chat_log_template + f"\nYou : {questions} \nJarvis : {answer}"
    filelog = open("database\chat_log.txt", "w")
    filelog.write(chat_log_template_update)
    filelog.close()

    return answer
