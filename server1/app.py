from flask import Flask, request
from flask import Blueprint
from flask_cors import CORS
import requests
import openai
import json

openai.api_key = "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"

blueprint = Blueprint(
    'Content_blueprint',
    __name__,
    url_prefix=''
)

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "*"}},  supports_credentials=True)
# CORS(app)
# CORS(blueprint)

@app.route('/')
# @blueprint.route('/')
def hello():
    return 'Hello, World!'

@app.route('/api/getContent', methods = ['GET', 'POST'])
# @blueprint.route('/api/getContent', methods = ['GET', 'POST'])
def getContent():

    idea = request.form['idea']

    # print('idea>>>>', idea)

    content_for_idea = getResponseFrom_ChatGPT(idea)

    # print('content for idea>>>>>>', content_for_idea);

    return {"state":True, 'response':content_for_idea}

def getResponseFrom_ChatGPT(idea):

    prompt = f"I want to create a ${idea}. Provide a title of website and 4 subtitle and their content for website. Also, provide 2 example user's simple feedbacks, usernames(real name) and sex(low case) about the website I built. And I want to get the images from api.unsplash.com. Provide the search query for this. And provide the subtitle, feedback and its username(real name) that encourage to join community.  Provide the result as following Json format: [title:"", subtitle1:"", subcontent1:"", subtitl2:"", subcontent2:"", subtitle3:"", subcontent3:"", subtitle4:"", subcontent4:"", feedback1:"", username1:"", sex1:"", feedback2:"", username2:"", sex2:"", subtitle:"",  feedback3:"", username3:"", sex3:"", search_query:""]"

    print('chatgpt starter>>>>>')
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  
        # engine = "text-davinci-003",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
    )

    content_for_idea = response.choices[0].message.content.strip()
    return content_for_idea

@app.route('/api/getImage', methods=['GET','POST'])
# @blueprint.route('/api/getImage', methods=['GET','POST'])
def getImage():

    data = request.json
    access_key = 'q0nZ8A8yDOfd6pHYznzO-DegHgMKik3TIUnN6p9UQ0A'
    search_query = data['idea']  # Enter your desired search query here
    image_urls = []

    for i in range(1, 6):

        url = f'https://api.unsplash.com/photos/random?client_id={access_key}&query={search_query}'
        response = requests.get(url)
        image_data = response.json()
        image_url = image_data['urls']['regular']
        image_urls.append(image_url)

    print('image url>>>>', image_urls)
    if len(image_urls) >0 :
        return {"state":True, "images":image_urls}
    else:
        return {'state':False}

@app.route('/api/getLogo', methods=['POST'])
def getLogo():

    query = "arrow"
    url = f"https://api.iconfinder.com/v4/icons/search?query=arrow&count=1"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer X0vjEUN6KRlxbp2DoUkyHeM0VOmxY91rA6BbU5j3Xu6wDodwS0McmilLPBWDUcJ1"
    }

    response = requests.get(url, headers=headers)

    # print("logo response>>>>", response.text)

    # data = json.load(response.text['total_count'])
    data = json.loads(response.text)

    # Check if the request was successful (status code 200 indicates success)
    if data['total_count'] > 0:
        # Extract the URL of the random logo image in SVG format from the response JSON
        image_url = data['icons'][0]['raster_sizes'][0]['formats'][0]['preview_url']
        print(f'Random logo image URL: {image_url}')
        return {'state':True, 'logo':image_url}
    else:
        print('Failed to get a random logo image.', response.status_code)
        return {'state': False}
    # return {'state': True}