from flask import Flask, request
import openai

app = Flask(__name__)

openai.api_key = "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"

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/api/getContent', methods = ['GET', 'POST'])
def getContent():


    idea = request.form['idea']

    print('idea>>>>', idea)

    content_for_idea = getResponseFrom_ChatGPT(idea)

    print('okay??????')

    print('content>>>>>', content_for_idea)

    return {"state":True, 'response':content_for_idea}

def getResponseFrom_ChatGPT(idea):

    prompt = f"I want to create the website for my idea ({idea}). provide the title of site and 4 subtitle and their content for website.  Also, provide 2 example user's simple feedback(usage and joining) and username(real name) about the website I built. And provide the subtitle that encourage to join community. example: 'Join our community of bag marketers and boost your sales'. this is a subtitle for bag marketing site. Provide the result as following Json format: [ title:"", subtitle1:"", subcontent1:"" subtitl2:"", subcontent2:"", subtitle3:"", subcontent3:"", subtitle4:"", subcontent4:"", feedback(usage):"", username(usage):"", subtitle(joining):"", feedback(joining):"", username(joining):"",]"

    print('chatgpt starter>>>>>')
    response = openai.ChatCompletion.create(
        engine="gpt-3.5-turbo",  
        # engine = "text-davinci-003",
        # messages_input=[{"role": "system", "content": 'SPECIFY HOW THE AI ASSISTANT SHOULD BEHAVE'},
        #           {"role": "user", "content": 'SPECIFY WANT YOU WANT THE AI ASSISTANT TO SAY'}
        # ],
        prompt = "hello",
        max_tokens=4000,
        temperature=0.7,
        n=1,
        stop=None,
        timeout=None,
    )

    print('response>>>>', response)
    content_for_idea = response.choices[0].text.strip()
    return content_for_idea



