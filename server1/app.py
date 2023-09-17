from flask import Flask, request
import openai

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/getContent', method = ['GET', 'POST'])
def getContent():
    param = request.json

    idea = param['idea']

    content_for_idea = getResponseFrom_ChatGPT(idea)
    return {"state":True, 'response':content_for_idea}

def getResponseFrom_ChatGPT(idea):
    prompt = f"I want to create the website for my idea ({idea}). provide the title of site and 4 subtitle and their content for website.  Also, provide 2 example user's simple feedback(usage and joining) and username(real name) about the website I built. And provide the subtitle that encourage to join community. example: 'Join our community of bag marketers and boost your sales'. this is a subtitle for bag marketing site. Provide the result as following Json format: [ title:"", subtitle1:"", subcontent1:"" subtitl2:"", subcontent2:"", subtitle3:"", subcontent3:"", subtitle4:"", subcontent4:"", feedback(usage):"", username(usage):"", subtitle(joining):"", feedback(joining):"", username(joining):"",]"

    response = openai.Completion.create(
        engine="text-davinci-003",  
        prompt=prompt,
        max_tokens=4000
    )
    content_for_idea = response.choices[0].text.strip()
    return content_for_idea



