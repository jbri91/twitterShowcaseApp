from flask import Flask, jsonify
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app)
import requests
import json
from config import token_secret
<<<<<<< HEAD


=======
>>>>>>> onClick


payload = {'q':'from:elonmusk', 'result_type':'recent', 'count': 20}
payload2 = {'q':'from:tferriss', 'result_type':'recent', 'count': 20}
payload3 = {'q':'from:TEDtalks', 'result_type':'recent', 'count': 20}
payload4 = {'q':'from:gruber', 'result_type':'recent', 'count': 20}
payload5 = {'q':'from:nasa', 'result_type':'recent', 'count': 20}
payload6 = {'q':'from:adammgrant', 'result_type':'recent', 'count': 20}

headers = {'Authorization': token_secret, 'Accept' : 'application/json', 'Content-Type':'application/json'}
<<<<<<< HEAD
elonMusk = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()
=======
>>>>>>> onClick

elonMusk = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()
timFerris = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload2, headers=headers).json()
tedTalks = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload3, headers=headers).json()
gruber = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload4, headers=headers).json()
nasa = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload5, headers=headers).json()

searchUser = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload6, headers=headers).json()


class SearchUser(Resource):
    def get(self, user):
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


api.add_resource(SearchUser, '/api/<string:user>')

api.add_resource(ElonTweets, '/api/elonmusk')
api.add_resource(TimTweets, '/api/timferris')
api.add_resource(TedTweets, '/api/tedtalks')
api.add_resource(NasaTweets, '/api/nasa')
api.add_resource(GruberTweets, '/api/gruber')


if __name__=="__main__":
    app.run(debug=True)


