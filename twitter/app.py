from flask import Flask, jsonify
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app)
import requests
import json


tkn = 'Bearer AAAAAAAAAAAAAAAAAAAAAPy5LAEAAAAAGLzQdm7Geimz2mueyGQCRlJE2wg%3DtHF24CFQf9D984qDYqf0vIIWItJ8ZxzfzvSktaS3qWHvfQG5uf'
payload = {'q':'Elon Musk', 'result_type':'popular', 'count': '5'}
payload2 = {'q':'Daz Black', 'result_type':'popular', 'count': '5'}
payload3 = {'q':'Dalai Lama', 'result_type':'popular', 'count': '5'}
payload4 = {'q':'Adam Grant', 'result_type':'popular', 'count': '5'}
headers = {'Authorization': tkn, 'Accept' : 'application/json', 'Content-Type':'application/json'}
twitter = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers)
dazTweets = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload2, headers=headers)
dalaiTweets = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload3, headers=headers)
adamTweets = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload4, headers=headers)
tweets = twitter.json()
dazTweets = dazTweets.json()
dalaiTweets = dalaiTweets.json()
adamTweets = adamTweets.json()

userPayload ={'q': 'Elon Musk', 'page':'1', 'count':"5"}
elonMusk = requests.get('https://api.twitter.com/1.1/users/search/.json', headers=headers, params=userPayload)
elonMusk = elonMusk.json()

print(elonMusk)

class ElonTweets(Resource):
    def get(self):
        return jsonify(tweets)

class DazTweets(Resource):
    def get(self):
        return jsonify(dazTweets)

class DalaiTweets(Resource):
    def get(self):
        return jsonify(dalaiTweets)

class AdamTweets(Resource):
    def get(self):
        return jsonify(adamTweets)

api.add_resource(ElonTweets, '/api/elonmusk')
api.add_resource(DazTweets, '/api/dazblack')
api.add_resource(DalaiTweets, '/api/dalailama')
api.add_resource(AdamTweets, '/api/adamTweets')

if __name__=="__main__":
    app.run(debug=True)


