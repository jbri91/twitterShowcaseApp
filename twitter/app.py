from flask import Flask, jsonify
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app)
import requests
import json
from config import token_secret




payload = {'q':'from:elonmusk', 'result_type':'recent', 'count': 20}
payload2 = {'q':'from:tferriss', 'result_type':'recent', 'count': 20}
payload3 = {'q':'from:TEDtalks', 'result_type':'recent', 'count': 20}
payload4 = {'q':'from:gruber', 'result_type':'recent', 'count': 20}
payload5 = {'q':'from:nasa', 'result_type':'recent', 'count': 20}


headers = {'Authorization': token_secret, 'Accept' : 'application/json', 'Content-Type':'application/json'}
elonMusk = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()

elonMusk = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()
timFerris = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload2, headers=headers).json()
tedTalks = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload3, headers=headers).json()
gruber = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload4, headers=headers).json()
nasa = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload5, headers=headers).json() 

class SearchTweet(Resource):
    def get(self, tweet):
        headers = {'Authorization': token_secret, 'Accept' : 'application/json', 'Content-Type':'application/json'}
        payload = {'q':tweet, 'result_type':'popular', 'count': 5}
        searchTweet = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()
        return jsonify(searchTweet)

class SearchUser(Resource):
    def get(self, user):
        headers = {'Authorization': token_secret, 'Accept' : 'application/json', 'Content-Type':'application/json'}
        payload = {'q':'from:' + user, 'result_type':'recent', 'count': 5}
        searchUser = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()        
        return jsonify(searchUser)

class ElonTweets(Resource):
    def get(self):
        return jsonify(elonMusk)

class TimTweets(Resource):
    def get(self):
        return jsonify(timFerris)

class TedTweets(Resource):
    def get(self):
        return jsonify(tedTalks)


class GruberTweets(Resource):
    def get(self):
        return jsonify(gruber)


class NasaTweets(Resource):
    def get(self):
        return jsonify(nasa)


api.add_resource(SearchTweet, '/api/<string:tweet>')
api.add_resource(SearchUser, '/api/<string:user>')

api.add_resource(ElonTweets, '/api/elonmusk')
api.add_resource(TimTweets, '/api/timferris')
api.add_resource(TedTweets, '/api/tedtalks')
api.add_resource(NasaTweets, '/api/nasa')
api.add_resource(GruberTweets, '/api/gruber')


if __name__=="__main__":
    app.run(debug=True)


